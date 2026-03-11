import Image from "next/image";
import Link from "next/link";
import { Clock } from "lucide-react";
import { Article } from "@/lib/data";
import clsx from "clsx";

interface ArticleCardProps {
  article: Article;
  layout?: "grid" | "list" | "featured";
  className?: string;
}

export default function ArticleCard({ article, layout = "grid", className }: ArticleCardProps) {
  const isFeatured = layout === "featured";
  const isList = layout === "list";

  return (
    <article
      className={clsx(
        "group relative flex flex-col bg-white overflow-hidden rounded-xl shadow-sm ring-1 ring-gray-100 hover:shadow-lg transition-all duration-300 card-hover",
        isList && "sm:flex-row sm:h-48",
        className
      )}
    >
      <div
        className={clsx(
          "relative overflow-hidden bg-gray-100",
          isFeatured ? "aspect-[16/9] w-full" : isList ? "aspect-[4/3] sm:w-1/3 sm:shrink-0" : "aspect-[3/2] w-full"
        )}
      >
        <Link href={`/article/${article.slug}`} className="absolute inset-0 z-10">
          <span className="sr-only">View article</span>
        </Link>
        <Image
          src={article.image}
          alt={article.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
        />
        {isFeatured && (
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent pointer-events-none" />
        )}
      </div>

      <div
        className={clsx(
          "flex flex-col justify-between p-5",
          isFeatured ? "absolute bottom-0 left-0 w-full text-white z-20" : "flex-1",
          isList && "sm:p-6"
        )}
      >
        <div>
          <div className="flex items-center gap-x-4 mb-3">
            <Link
              href={`/category/${article.category.slug}`}
              className={clsx(
                "relative z-10 rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-600 hover:bg-brand-100 transition-colors cursor-pointer",
                isFeatured && "bg-brand-500 text-white hover:bg-brand-400"
              )}
            >
              {article.category.name}
            </Link>
            <div className={clsx("flex items-center text-xs", isFeatured ? "text-gray-300" : "text-gray-500")}>
              <Clock className="mr-1 h-3 w-3" />
              {article.readTime}
            </div>
          </div>
          <div className="group relative">
            <h3
              className={clsx(
                "mt-3 text-lg font-bold leading-6 line-clamp-3",
                isFeatured ? "text-white text-2xl sm:text-3xl" : "text-gray-900 group-hover:text-brand-600 transition-colors"
              )}
            >
              <Link href={`/article/${article.slug}`}>
                <span className="absolute inset-0" />
                {article.title}
              </Link>
            </h3>
            {!isFeatured && (
              <p className="mt-3 line-clamp-2 text-sm leading-6 text-gray-600">
                {article.excerpt}
              </p>
            )}
          </div>
        </div>
        
        <div className={clsx("relative mt-4 flex items-center gap-x-4", isFeatured ? "mt-4" : "mt-6")}>
          <Image
            src={article.author.avatar}
            alt={article.author.name}
            width={40}
            height={40}
            className="h-10 w-10 rounded-full bg-gray-50 object-cover"
          />
          <div className="text-sm leading-6">
            <p className={clsx("font-semibold", isFeatured ? "text-white" : "text-gray-900")}>
              {article.author.name}
            </p>
            <p className={clsx(isFeatured ? "text-gray-300" : "text-gray-500")}>
              {new Date(article.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
