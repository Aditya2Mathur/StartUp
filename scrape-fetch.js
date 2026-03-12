const cheerio = require('cheerio');
const fs = require('fs');

async function tryScrapeWithFetch() {
    try {
        console.log("Attempting to fetch with standard headers...");
        const response = await fetch('https://www.linkedin.com/company/startup-journal-in/posts/', {
            headers: {
                'User-Agent': 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)',
                'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
            }
        });
        
        const html = await response.text();
        fs.writeFileSync('linkedin_fetch.html', html);
        
        const $ = cheerio.load(html);
        const posts = [];
        
        // Let's try to find anything that looks like content
        $('p, h1, h2, h3, article, .feed-shared-update-v2').each((i, el) => {
            const text = $(el).text().trim();
            if (text && text.length > 50 && !text.includes('LinkedIn')) {
                // very rough heuristic for finding post content
                posts.push({ text: text });
            }
        });
        
        console.log(`Found ${posts.length} potential post blocks using Googlebot UA.`);
        if (posts.length > 0) {
            fs.writeFileSync('potential_posts.json', JSON.stringify(posts, null, 2));
        }

        // Try specifically targeting seo-optimized public pages
         $('section.share-update, .core-section-container').each((i, el) => {
             console.log("Found core section");
         });

    } catch (err) {
        console.error("Fetch failed", err);
    }
}

tryScrapeWithFetch();
