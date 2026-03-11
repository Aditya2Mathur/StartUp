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

  // Get related posts (mock implementation: same category, exclude current)
  const relatedArticles = ARTICLES.filter(a => a.category.slug === article.category.slug && a.id !== article.id).slice(0, 3);

  return (
    <div className="bg-white">
      {/* Article Header */}
      <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-[60vh] bg-gray-900 border-b-8 border-brand-500">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover opacity-40 mix-blend-overlay"
            priority
          />
          <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-gray-900 to-transparent pointer-events-none" />
        </div>
        
        <div className="container relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 mt-24">
          <div className="text-center">
            <Link
              href={`/category/${article.category.slug}`}
              className="inline-flex items-center rounded-full border border-brand-400/30 bg-brand-500/20 px-3 py-1 text-sm font-medium text-brand-300 backdrop-blur-sm mb-6 hover:bg-brand-500/40 transition-colors"
            >
              {article.category.name}
            </Link>
            <h1 className="text-3xl font-extrabold tracking-tight text-white mb-6 sm:text-5xl lg:text-6xl text-balance">
              {article.title}
            </h1>
            <p className="mt-4 text-xl text-gray-300 max-w-2xl mx-auto text-balance">
              {article.excerpt}
            </p>
          </div>
        </div>
      </div>

      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 -mt-16 relative z-10">
        <div className="bg-white rounded-2xl shadow-xl ring-1 ring-gray-100 p-6 sm:p-10 lg:p-16 max-w-4xl mx-auto">
          {/* Author Meta */}
          <div className="flex flex-col sm:flex-row items-center justify-between border-b border-gray-100 pb-8 mb-10 gap-6">
            <div className="flex items-center gap-x-4">
              <Image
                src={article.author.avatar}
                alt={article.author.name}
                width={56}
                height={56}
                className="h-14 w-14 rounded-full bg-gray-50 object-cover ring-2 ring-brand-100"
              />
              <div>
                <p className="text-base font-semibold text-gray-900">
                  {article.author.name}
                </p>
                <div className="flex items-center gap-x-2 text-sm text-gray-500 mt-1">
                  <span>{new Date(article.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                  <span>&middot;</span>
                  <span className="flex items-center"><Clock className="mr-1 h-3.5 w-3.5" /> {article.readTime}</span>
                </div>
              </div>
            </div>

            {/* Share action buttons */}
            <div className="flex items-center gap-x-3">
              <span className="text-sm font-medium text-gray-500 mr-2">Share:</span>
              <button className="rounded-full bg-gray-50 p-2 text-gray-500 hover:bg-brand-50 hover:text-brand-600 transition-colors ring-1 ring-gray-200">
                <Twitter className="h-4 w-4" />
                <span className="sr-only">Twitter</span>
              </button>
              <button className="rounded-full bg-gray-50 p-2 text-gray-500 hover:bg-brand-50 hover:text-brand-600 transition-colors ring-1 ring-gray-200">
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </button>
              <button className="rounded-full bg-gray-50 p-2 text-gray-500 hover:bg-brand-50 hover:text-brand-600 transition-colors ring-1 ring-gray-200">
                <Facebook className="h-4 w-4" />
                <span className="sr-only">Facebook</span>
              </button>
              <button className="rounded-full bg-gray-50 p-2 text-gray-500 hover:bg-brand-50 hover:text-brand-600 transition-colors ring-1 ring-gray-200">
                <LinkIcon className="h-4 w-4" />
                <span className="sr-only">Copy Link</span>
              </button>
            </div>
          </div>

          {/* Article Content */}
          <div 
            className="prose prose-lg prose-brand max-w-none text-gray-700 leading-relax"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          {/* Simple Dummy Comments Section */}
          <div className="mt-16 pt-10 border-t-2 border-dashed border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Join the Conversation</h3>
            <div className="bg-gray-50 rounded-xl p-6 ring-1 ring-gray-200 flex flex-col gap-4 items-center justify-center text-center">
               <p className="text-gray-600">Comments are disabled for this demo.</p>
               <button className="rounded-full bg-brand-600 px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-brand-500 transition-colors">
                 Log in to comment
               </button>
            </div>
          </div>
        </div>

        {/* Related Posts */}
        {relatedArticles.length > 0 && (
          <div className="mt-24 mb-12">
            <SectionTitle title="More From This Category" viewAllLink={`/category/${article.category.slug}`} />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedArticles.map(related => (
                <ArticleCard key={related.id} article={related} />
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
