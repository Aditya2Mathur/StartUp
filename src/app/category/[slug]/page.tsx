import { getArticlesByCategory, CATEGORIES } from "@/lib/data";
import ArticleCard from "@/components/ui/ArticleCard";
import SectionTitle from "@/components/ui/SectionTitle";
import { notFound } from "next/navigation";

interface CategoryPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: CategoryPageProps) {
  const resolvedParams = await params;
  const category = CATEGORIES.find(c => c.slug === resolvedParams.slug);
  if (!category) return { title: "Category Not Found" };
  return {
    title: `${category.name} | Startup Journal`,
    description: category.description,
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const resolvedParams = await params;
  const category = CATEGORIES.find(c => c.slug === resolvedParams.slug);
  
  if (!category) {
    notFound();
  }

  const articles = getArticlesByCategory(category.slug);

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center max-w-3xl mx-auto">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 mb-4">{category.name}</h1>
          <p className="text-xl text-gray-500">{category.description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.length > 0 ? (
            articles.map(article => (
              <ArticleCard key={article.id} article={article} />
            ))
          ) : (
            <div className="col-span-full py-12 text-center">
              <p className="text-gray-500 text-lg">No articles found in this category yet. Stay tuned!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
