import Image from "next/image";
import Link from "next/link";
import { Clock, Facebook, Twitter, Linkedin, Link as LinkIcon } from "lucide-react";
import { ARTICLES } from "@/lib/data";
import { notFound } from "next/navigation";
import SectionTitle from "@/components/ui/SectionTitle";
import ArticleCard from "@/components/ui/ArticleCard";

interface ArticlePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: ArticlePageProps) {
  const resolvedParams = await params;
  const article = ARTICLES.find(a => a.slug === resolvedParams.slug);
  if (!article) return { title: "Article Not Found" };
  return {
    title: `${article.title} | Startup Journal`,
    description: article.excerpt,
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const resolvedParams = await params;
  const article = ARTICLES.find(a => a.slug === resolvedParams.slug);
  
  if (!article) {
    notFound();
  }

  // Get related posts
  const relatedArticles = ARTICLES.filter(a => a.category.slug === article.category.slug && a.id !== article.id).slice(0, 3);

  return (
    <div className="bg-gray-50 min-h-screen pt-24 pb-12">
      <main className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        
        <div className="bg-white rounded-xl shadow-sm ring-1 ring-gray-200 overflow-hidden">
          
          {/* 1. Full Width Image (LinkedIn Landscape Ratio) */}
          <div className="relative w-full aspect-[1.91/1] flex items-center justify-center bg-gray-50 border-b border-gray-100">
            <Image
              src={article.image}
              alt={article.title}
              fill
              className="object-contain"
              priority
            />
            {/* Category tag */}
            <div className="absolute top-6 right-6 z-20">
              <Link
                href={`/category/${article.category.slug}`}
                className="hidden sm:inline-flex rounded-full bg-white/90 backdrop-blur-sm px-3 py-1 font-semibold text-brand-600 text-xs tracking-wider uppercase hover:bg-white transition-colors shadow-sm"
              >
                {article.category.name}
              </Link>
            </div>
          </div>

          <div className="p-6 sm:p-8">
            {/* 2. Title */}
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 mb-6 text-balance">
              {article.title}
            </h1>

            {/* 3. Content / Text */}
            <div 
              className="prose prose-lg prose-brand max-w-none text-gray-700 leading-relax mb-8"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />

            {/* 4. Author Details */}
            <div className="flex flex-col sm:flex-row items-center justify-between border-t border-gray-100 pt-6">
              <div className="flex items-center gap-x-4">
                <Image
                  src={article.author.avatar}
                  alt={article.author.name}
                  width={56}
                  height={56}
                  className="h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-gray-50 object-cover ring-2 ring-gray-100"
                />
                <div>
                  <p className="text-base font-semibold text-gray-900">
                    {article.author.name}
                  </p>
                  <div className="flex items-center gap-x-2 text-sm text-gray-500 mt-0.5">
                    <span>{new Date(article.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                    <span>&middot;</span>
                    <span className="flex items-center"><Clock className="mr-1 h-3.5 w-3.5" /> {article.readTime}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer actions */}
          <div className="p-6 sm:p-8 bg-gray-50/50 border-t border-gray-100">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-x-3 w-full sm:w-auto justify-center">
                  <span className="text-sm font-medium text-gray-500 mr-2">Share:</span>
                  <button className="rounded-full bg-white p-2 text-gray-500 hover:bg-brand-50 hover:text-brand-600 transition-colors ring-1 ring-gray-200 shadow-sm">
                    <Twitter className="h-4 w-4" />
                  </button>
                  <button className="rounded-full bg-white p-2 text-gray-500 hover:bg-brand-50 hover:text-brand-600 transition-colors ring-1 ring-gray-200 shadow-sm">
                    <Linkedin className="h-4 w-4" />
                  </button>
                  <button className="rounded-full bg-white p-2 text-gray-500 hover:bg-brand-50 hover:text-brand-600 transition-colors ring-1 ring-gray-200 shadow-sm">
                    <Facebook className="h-4 w-4" />
                  </button>
                  <button className="rounded-full bg-white p-2 text-gray-500 hover:bg-brand-50 hover:text-brand-600 transition-colors ring-1 ring-gray-200 shadow-sm">
                    <LinkIcon className="h-4 w-4" />
                  </button>
                </div>
            </div>
          </div>
        </div>

        {/* Related Posts */}
        {relatedArticles.length > 0 && (
          <div className="mt-16 mb-12 max-w-5xl mx-auto">
            <SectionTitle title="More From This Category" viewAllLink={`/category/${article.category.slug}`} />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
              {relatedArticles.slice(0, 2).map(related => (
                <ArticleCard key={related.id} article={related} />
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
