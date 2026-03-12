const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

async function scrapeLinkedInPosts() {
  const url = 'https://www.linkedin.com/company/startup-journal-in/posts/';
  
  console.log(`Starting to scrape posts from: ${url}`);
  
  const browser = await puppeteer.launch({
    headless: false, // Run in headful mode to avoid bot detection
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  const page = await browser.newPage();
  
  // Set a realistic user agent
  await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36');
  
  try {
    console.log('Navigating to page...');
    await page.goto(url, { waitUntil: 'networkidle2', timeout: 60000 });
    
    // Wait for a bit to let any initial auth wall appear and handle it or dismiss it
    await new Promise(r => setTimeout(r, 5000));
    
    // Check if we hit a login wall. If so, try to find a close button
    try {
        const closeBtn = await page.$('button.modal__dismiss');
        if (closeBtn) {
            console.log('Found login modal, attempting to close...');
            await closeBtn.click();
            await new Promise(r => setTimeout(r, 2000));
        }
    } catch (e) {
        console.log('No dismissible auth wall found immediately.');
    }

    // Scroll down multiple times to load posts
    console.log('Scrolling to load more posts...');
    for (let i = 0; i < 5; i++) {
        await page.evaluate(() => {
            window.scrollBy(0, window.innerHeight);
        });
        await new Promise(r => setTimeout(r, 2000));
        
        // Sometimes a new auth wall pops up on scroll
        try {
            const closeBtn = await page.$('button[data-tracking-control-name="public_profile_contextual-sign-in-modal_modal_dismiss"]');
            if (closeBtn) await closeBtn.click();
        } catch(e) {}
    }

    console.log('Extracting posts...');
    
    // Wait for feed elements to appear. The selectors on public pages might differ from logged-in pages.
    // Public profile post container:
    const postSelector = 'div[data-test-id="update-v2"]';
    
    try {
       await page.waitForSelector(postSelector, { timeout: 10000 });
    } catch(e) {
       console.log("Could not find post selector. LinkedIn might be blocking public access with an auth wall.");
       // Let's try to extract whatever text we can find that looks like post content
    }

    const posts = await page.evaluate(() => {
      const extractedPosts = [];
      
      // Look for update containers
      const postElements = document.querySelectorAll('div[data-test-id="update-v2"], li.profile-creator-shared-feed-update__container, .feed-shared-update-v2');
      
      postElements.forEach((el, index) => {
        if (index >= 10) return; // Only get a few posts
        
        // Extract text
        const textElement = el.querySelector('.break-words, .feed-shared-update-v2__description, span[dir="ltr"]');
        let text = textElement ? textElement.innerText : '';
        text = text.trim();
        
        if (!text) return;

        // Try to get image
        const imgElement = el.querySelector('img.ivm-view-attr__img--centered, img.update-components-image__image, .update-components-image img');
        const imageUrl = imgElement ? imgElement.src : null;
        
        // Try to get date/time
        const timeElement = el.querySelector('.update-components-actor__sub-description, .visually-hidden');
        const timeText = timeElement ? timeElement.innerText.trim() : 'Recent';

        // Very basic title generation from first sentence
        let title = text.split('\n')[0].substring(0, 100);
        if (title.length > 97) title += '...';
        
        extractedPosts.push({
            id: `linkedin-post-${Date.now()}-${index}`,
            title: title || "LinkedIn Update",
            content: text,
            excerpt: text.substring(0, 150) + '...',
            imageUrl: imageUrl || 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800&h=500', // fallback
            date: timeText
        });
      });
      
      return extractedPosts;
    });

    console.log(`Found ${posts.length} posts.`);
    
    if (posts.length > 0) {
        fs.writeFileSync(path.join(process.cwd(), 'scraped_posts.json'), JSON.stringify(posts, null, 2));
        console.log('Saved posts to scraped_posts.json');
    } else {
        console.log('Failed to extract posts. LinkedIn might be requiring authentication.');
        // Save the HTML for debugging
        const html = await page.content();
        fs.writeFileSync(path.join(process.cwd(), 'linkedin_debug.html'), html);
    }
    
  } catch (error) {
    console.error('Error scraping:', error);
  } finally {
    await browser.close();
  }
}

scrapeLinkedInPosts();
