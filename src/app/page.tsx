import { getFeaturedArticle, getTrendingArticles, getLatestArticles, getArticlesByCategory, CATEGORIES } from "@/lib/data";
import ArticleCard from "@/components/ui/ArticleCard";
import SectionTitle from "@/components/ui/SectionTitle";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  const featured = getFeaturedArticle();
  const trending = getTrendingArticles();
  const latest = getLatestArticles(8);
  const startupNews = getArticlesByCategory("startup-news").slice(0, 3);
  const founderJourneys = getArticlesByCategory("founder-journeys").slice(0, 3);
  
  return (
    <div className="bg-gray-50 pb-24">
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-8">
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-2 relative group rounded-2xl overflow-hidden ring-1 ring-gray-100 shadow-sm transition-shadow hover:shadow-lg bg-white h-full flex flex-col">
            <ArticleCard article={featured} layout="featured" className="h-full flex-1" />
          </div>
          <div className="flex flex-col gap-6">
            <SectionTitle title="Trending Now" />
            <div className="flex flex-col gap-6 h-full">
              {trending.map((article) => (
                <ArticleCard key={article.id} article={article} layout="list" className="h-32 sm:h-32 rounded-lg" />
              ))}
            </div>
          </div>
        </div>

        {/* Latest News Grid */}
        <section className="mb-16">
          <SectionTitle title="Latest Stories" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {latest.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        </section>

        {/* Categories Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <section>
            <SectionTitle title="Startup News" viewAllLink="/category/startup-news" />
            <div className="flex flex-col gap-6">
              {startupNews.length > 0 ? (
                startupNews.map(article => (
                  <ArticleCard key={article.id} article={article} layout="list" />
                ))
              ) : (
                <p className="text-gray-500 italic">More news coming soon...</p>
              )}
            </div>
          </section>
          
          <section>
            <SectionTitle title="Founder Journeys" viewAllLink="/category/founder-journeys" />
            <div className="flex flex-col gap-6">
              {founderJourneys.length > 0 ? (
                founderJourneys.map(article => (
                  <ArticleCard key={article.id} article={article} layout="list" />
                ))
              ) : (
                <p className="text-gray-500 italic">More journeys coming soon...</p>
              )}
            </div>
          </section>
        </div>

        {/* Newsletter CTA Section */}
        <section className="relative overflow-hidden rounded-3xl bg-brand-900 py-16 px-6 sm:px-12 lg:px-16 mt-24 mb-12 shadow-xl border border-brand-800">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-brand-900/80 to-transparent"></div>
          
          <div className="relative mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl text-balance">
              Join 1,000+ curious minds building the future of India.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg leading-8 text-brand-100 text-balance">
              Subscribe to get weekly startup breakdowns and founder insights delivered straight to your inbox.
            </p>
            <form className="mt-8 mx-auto flex max-w-md gap-x-4">
              <label htmlFor="cta-email" className="sr-only">Email address</label>
              <input
                id="cta-email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="min-w-0 flex-auto rounded-md border-0 bg-white/10 px-4 py-3 text-white shadow-sm ring-1 ring-inset ring-white/20 placeholder:text-gray-300 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6 backdrop-blur-sm"
                placeholder="Enter your email"
              />
              <button
                type="submit"
                className="flex items-center justify-center rounded-md bg-white px-4 py-3 text-sm font-semibold text-brand-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-colors"
              >
                Subscribe <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </form>
            <p className="mt-4 text-xs text-brand-200">Zero spam. Unsubscribe anytime.</p>
          </div>
        </section>
      </main>
    </div>
  );
}
