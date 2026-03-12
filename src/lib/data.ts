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
  { name: "Startup News", slug: "startup-news", description: "Curated news from the startup world." },
  { name: "Funding Update", slug: "funding-update", description: "Who raised what and why it matters." },
  { name: "Founder Stories", slug: "founder-stories", description: "Raw, real stories of building from 0 → 1." },
  { name: "PR Consultancy", slug: "pr-consultancy", description: "Expert strategies on brand narrative and crisis communication." }
];

export const AUTHORS: Record<string, Author> = {
  alex: { name: "Aditya Mathur", avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=200&h=200", role: "Editor in Chief" },
  sarah: { name: "Ananya Singh", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200&h=200", role: "Senior Analyst" },
  rohan: { name: "Karthik Raj", avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200&h=200", role: "VC Reporter" },
};

export const ARTICLES: Article[] = [
  {
    id: "linkedin-custom-1",
    title: "Aqua Exchange: Revolutionizing Indian Aquaculture",
    slug: "aqua-exchange-aquaculture",
    excerpt: "How Aqua Exchange is bringing IoT and fintech to India's shrimp farmers, turning a fragmented industry into a data-driven powerhouse.",
    content: "<p>India is one of the world's largest exporters of shrimp, but the farmers at the base of this supply chain face massive inefficiencies. Aqua Exchange is solving this by providing full-stack IoT devices for farm management alongside much-needed financing.</p><p>By automating power management and aeration, Aqua Exchange not only saves farmers electricity costs but deeply understands their harvest cycles, lowering the risk for lending capital. This intersection of agritech and fintech is the perfect template for rural India.</p>",
    image: "/images/linkedin/aqua_exchange.jpg",
    category: CATEGORIES[1], // Funding Update
    author: AUTHORS.sarah,
    date: "2026-03-12",
    readTime: "4 min read",
    featured: true,
  },
  {
    id: "linkedin-custom-2",
    title: "Inside Flipkart HQ: The Engine of Indian E-Commerce",
    slug: "flipkart-hq-ecommerce-engine",
    excerpt: "A look at the scale, logistics network, and relentless innovation happening inside Walmart-backed Flipkart as it battles Amazon and quick commerce.",
    content: "<p>Flipkart fundamentally taught India how to buy online. Years later, walking through their HQ, the sheer scale of the operation is staggering. The current focus isn't just on deep discounting, but on expanding the fulfillment network to compete with the 10-minute delivery apps.</p><p>Their continued dominance relies heavily on Category expansion and their localized supply chain logistics. Flipkart's ability to navigate Tier 2 and Tier 3 Indian cities remains their strongest moat.</p>",
    image: "/images/linkedin/flipkartHQ.jpg",
    category: CATEGORIES[0], // Startup News
    author: AUTHORS.alex,
    date: "2026-03-11",
    readTime: "5 min read",
    trending: true,
  },
  {
    id: "linkedin-custom-3",
    title: "Moneyview: The Profitable Digital Lending Playbook",
    slug: "moneyview-digital-lending",
    excerpt: "While many BNPL startups struggle, Moneyview proves that rigorous underwriting and focused personal loans can generate massive profitability.",
    content: "<p>Digital lending in India has seen massive boom and bust cycles. Moneyview has survived by maintaining an obsessive focus on unit economics and robust credit underwriting, serving the underserved \"missing middle\" of India.</p><p>Their proprietary credit rating models leverage alternative data beyond just CIBIL scores. This allows them to approve loans faster while keeping defaults astonishingly low, cementing their status as a fintech unicorn with actual profits.</p>",
    image: "/images/linkedin/moneyview_files.jpg",
    category: CATEGORIES[1], // Funding Update
    author: AUTHORS.rohan,
    date: "2026-03-10",
    readTime: "6 min read",
  },
  {
    id: "linkedin-custom-4",
    title: "Mozark: Deep Tech from India for the World",
    slug: "mozark-deep-tech-india",
    excerpt: "How native deep tech startups like Mozark are measuring absolute digital experience and building globally competitive infrastructure.",
    content: "<p>Indian startups are no longer just building copycat SaaS or consumer internet apps. Mozark represents a new wave of deep tech, building synthetic monitoring platforms to measure the quality of digital experiences across networks and apps.</p><p>Selling deep tech out of India is notoriously hard because enterprise sales cycles are long, but companies like Mozark are proving that the engineering talent here can build infrastructure software that competes directly with Silicon Valley.</p>",
    image: "/images/linkedin/mozark_deep_tech.jpg",
    category: CATEGORIES[1], // Funding Update
    author: AUTHORS.sarah,
    date: "2026-03-09",
    readTime: "4 min read",
  },
  {
    id: "linkedin-custom-5",
    title: "Startups Electrifying Rural Power",
    slug: "startups-rural-power-india",
    excerpt: "Access to reliable electricity in rural India is being transformed by decentralized clean-energy startups and microgrids.",
    content: "<p>Despite massive government electrification drives, power reliability in deeply rural areas remains a challenge. Startups are stepping in with decentralized solar microgrids and smart-metering solutions.</p><p>By combining pay-as-you-go financing with clean energy hardware, these startups are empowering local micro-entrepreneurs. It is a fantastic example of hardware and software combining to solve real-world physical problems.</p>",
    image: "/images/linkedin/rural_power.jpg",
    category: CATEGORIES[1], // Funding Update
    author: AUTHORS.alex,
    date: "2026-03-08",
    readTime: "5 min read",
  },
  {
    id: "linkedin-custom-6",
    title: "Sarvam AI: Building India's Foundational Models",
    slug: "sarvam-ai-indic-llm",
    excerpt: "Why relying on western LLMs won't work for India, and how Sarvam AI is building native language models for Bharat.",
    content: "<p>Generative AI holds massive promise, but models trained primarily on English data fail to capture the nuance of India's 22 official languages. Sarvam AI is aggressively moving to fix this.</p><p>By building full-stack foundational models tailored specifically for Indic languages, Sarvam is laying the AI infrastructure for the next billion users. Their focus on highly efficient, open-source models is changing the landscape of Indian AI.</p>",
    image: "/images/linkedin/sarvam.jpg",
    category: CATEGORIES[0], // Startup News
    author: AUTHORS.rohan,
    date: "2026-03-07",
    readTime: "7 min read",
    trending: true,
  },
  {
    id: "linkedin-custom-7",
    title: "Sedemac: The Silent Motor Control Powerhouse",
    slug: "sedemac-motor-control",
    excerpt: "The deep-tech EV component manufacturer that is quietly powering millions of two-wheelers across the globe.",
    content: "<p>While consumer EV brands get all the media attention, the real profits often lie in the component ecosystem. Sedemac, built by researchers, is dominating the global market for smart motor control units.</p><p>Their proprietary algorithms for sensorless motor control improve efficiency and reduce costs. It's a masterclass in how Indian manufacturing and deep-tech algorithms can scale globally.</p>",
    image: "/images/linkedin/sedemac.jpg",
    category: CATEGORIES[2], // Founder Stories
    author: AUTHORS.alex,
    date: "2026-03-06",
    readTime: "5 min read",
  },
  {
    id: "linkedin-custom-8",
    title: "The Audio Brand: How boAt Conquered India",
    slug: "boat-audio-brand-conquered-india",
    excerpt: "Aman Gupta's masterstroke in brand positioning turned a commoditized electronics category into a massive lifestyle D2C juggernaut.",
    content: "<p>Before boAt, the Indian audio market was deeply fragmented. You had expensive legacy brands at the top, and cheap, unbranded electronics at the bottom. boAt identified the massive whitespace in the middle.</p><p>By aggressive influencer marketing and positioning earphones as a fashion accessory rather than a tech product, boAt achieved massive scale. Their transition from importing to local manufacturing is the next chapter of their growth story.</p>",
    image: "/images/linkedin/the_audio_brand.jpg",
    category: CATEGORIES[2], // Founder Stories
    author: AUTHORS.sarah,
    date: "2026-03-05",
    readTime: "5 min read",
  },
  {
    id: "linkedin-custom-9",
    title: "Shark Tank India: The Biggest Startup Show",
    slug: "shark-tank-india-biggest-show",
    excerpt: "How primetime television fundamentally altered the dinner table conversations of millions of Indian households regarding entrepreneurship.",
    content: "<p>Shark Tank India didn't just fund startups; it served as a massive educational curriculum for the nation. Terms like 'equity', 'valuation', and 'EBITDA' entered the vocabulary of middle-class households.</p><p>For consumer brands, an appearance on the show—even without securing funding—results in an immediate spike in sales and lowered Customer Acquisition Costs. It represents the mainstreaming of the Indian startup dream.</p>",
    image: "/images/linkedin/the_biggest_startup_show.jpg",
    category: CATEGORIES[2], // Founder Stories
    author: AUTHORS.alex,
    date: "2026-03-04",
    readTime: "4 min read",
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
