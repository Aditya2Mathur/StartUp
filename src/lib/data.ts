export interface Author {
  name: string;
  avatar: string;
  role?: string;
}

export interface Category {
  name: string;
  slug: string;
  description: string;
}

export interface Article {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  image: string;
  category: Category;
  author: Author;
  date: string;
  readTime: string;
  featured?: boolean;
  trending?: boolean;
}

export const CATEGORIES: Category[] = [
  { name: "Founder Journeys", slug: "founder-journeys", description: "Raw, real stories of building from 0 → 1." },
  { name: "Business Breakdowns", slug: "business-breakdowns", description: "Deep dives into startup business models and strategies." },
  { name: "Finance Simplified", slug: "finance-simplified", description: "Explaining venture capital and startup economics in simple terms." },
  { name: "Daily Trends", slug: "daily-trends", description: "What’s happening in India’s startup ecosystem today." },
  { name: "Startup News", slug: "startup-news", description: "Curated news from the startup world." },
  { name: "Funding Updates", slug: "funding-updates", description: "Who raised what and why it matters." }
];

export const AUTHORS: Record<string, Author> = {
  alex: { name: "Alex Kumar", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200&h=200", role: "Senior Analyst" },
  sarah: { name: "Sarah Patel", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200&h=200", role: "VC Reporter" },
  rohan: { name: "Rohan Sharma", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200&h=200", role: "Founder in Residence" },
};

export const ARTICLES: Article[] = [
  {
    id: "1",
    title: "The Real Economics Behind Zepto's Growth",
    slug: "real-economics-zepto-growth",
    excerpt: "A deep dive into the unit economics of 10-minute grocery delivery and how Zepto is optimizing its dark stores to achieve profitability.",
    content: "<p>Quick commerce is notoriously difficult. Early cash burn is incredibly high, and building dense networks of dark stores requires massive capital...</p>",
    image: "https://images.unsplash.com/photo-1607082349566-187342175e2f?auto=format&fit=crop&q=80&w=1200&h=600",
    category: CATEGORIES[1],
    author: AUTHORS.alex,
    date: "2026-03-10",
    readTime: "8 min read",
    featured: true,
  },
  {
    id: "2",
    title: "How Zerodha Built a Billion Dollar Company Without VC Funding",
    slug: "zerodha-billion-dollar-no-vc",
    excerpt: "Exploring the contrarian decisions made by Nithin and Nikhil Kamath that led to India's most profitable fintech unicorn.",
    content: "<p>In an era where raising venture capital is seen as a milestone of success, Zerodha stands out as a glaring exception...</p>",
    image: "https://images.unsplash.com/photo-1590283603385-18ffb2a40c27?auto=format&fit=crop&q=80&w=800&h=500",
    category: CATEGORIES[0],
    author: AUTHORS.rohan,
    date: "2026-03-08",
    readTime: "12 min read",
    trending: true,
  },
  {
    id: "3",
    title: "Why Indian SaaS Startups Are Winning Globally",
    slug: "indian-saas-startups-winning-globally",
    excerpt: "From Freshworks to Zoho, Indian SaaS companies are capturing global market share. Here's why capital efficiency is their biggest moat.",
    content: "<p>India is rapidly becoming the SaaS capital of the world. Leveraging engineering talent and an inside sales model targeting the US and Europe...</p>",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800&h=500",
    category: CATEGORIES[3],
    author: AUTHORS.sarah,
    date: "2026-03-05",
    readTime: "6 min read",
    trending: true,
  },
  {
    id: "4",
    title: "What Every Founder Should Know About Burn Rate",
    slug: "founders-guide-to-burn-rate",
    excerpt: "Breaking down the difference between gross and net burn, and how to calculate runway before your next fundraising round.",
    content: "<p>Cash is oxygen for a startup. Understanding your burn rate isn't just an accounting exercise; it's a matter of survival...</p>",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800&h=500",
    category: CATEGORIES[2],
    author: AUTHORS.alex,
    date: "2026-03-01",
    readTime: "5 min read",
    trending: true,
  },
  {
    id: "5",
    title: "The Hidden Strategy Behind India's D2C Boom",
    slug: "hidden-strategy-india-d2c-boom",
    excerpt: "Why digital-first brands are rapidly expanding into offline retail to lower Customer Acquisition Costs (CAC).",
    content: "<p>Direct-to-Consumer (D2C) brands thrived during the pandemic. However, as digital advertising costs skyrocket on Facebook and Google...</p>",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800&h=500",
    category: CATEGORIES[1],
    author: AUTHORS.sarah,
    date: "2026-02-28",
    readTime: "7 min read",
  },
  {
    id: "6",
    title: "Inside the AI Funding Frenzy",
    slug: "inside-ai-funding-frenzy",
    excerpt: "Are AI startups incredibly overvalued, or are we witnessing a fundamental platform shift? We look at the numbers.",
    content: "<p>Generative AI is commanding massive valuations. But looking at the Annual Recurring Revenue (ARR) multiples...</p>",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800&h=500",
    category: CATEGORIES[5],
    author: AUTHORS.alex,
    date: "2026-02-25",
    readTime: "9 min read",
  }
];

export function getFeaturedArticle() {
  return ARTICLES.find(a => a.featured) || ARTICLES[0];
}

export function getTrendingArticles() {
  return ARTICLES.filter(a => a.trending);
}

export function getLatestArticles(limit: number = 6) {
  return [...ARTICLES].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, limit);
}

export function getArticlesByCategory(slug: string) {
  return ARTICLES.filter(a => a.category.slug === slug);
}
