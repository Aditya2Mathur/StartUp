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
        isList && "sm:flex-row",
        className
      )}
    >
      {/* 1. Image at the top (LinkedIn Landscape Ratio to show full image) */}
      <div
        className={clsx(
          "relative overflow-hidden bg-gray-50 border-b border-gray-100 w-full flex items-center justify-center aspect-[1.91/1]",
          isFeatured ? "" : isList ? "sm:w-1/3 sm:shrink-0 sm:border-b-0 sm:border-r" : ""
        )}
      >
        <Link href={`/article/${article.slug}`} className="absolute inset-0 z-10">
          <span className="sr-only">View article</span>
        </Link>
        <Image
          src={article.image}
          alt={article.title}
          fill
          className="object-contain transition-transform duration-500 group-hover:scale-105"
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
        />
        {/* Category Badge over image */}
        <div className="absolute top-4 right-4 z-20">
          <Link
            href={`/category/${article.category.slug}`}
            className="rounded-full bg-white/90 backdrop-blur-sm px-2.5 py-1 text-[10px] font-semibold text-brand-600 hover:bg-white transition-colors uppercase tracking-wider shadow-sm"
          >
            {article.category.name}
          </Link>
        </div>
      </div>

      <div className={clsx("flex flex-col flex-1 p-5", isList && "sm:w-2/3", isFeatured && "p-6 sm:p-8")}>
        {/* 2. Title */}
        <h3 className={clsx("font-bold text-gray-900 leading-snug mb-3", isFeatured ? "text-2xl" : "text-xl")}>
          <Link href={`/article/${article.slug}`}>
            <span className="absolute inset-0 z-10" />
            {article.title}
          </Link>
        </h3>
        
        {/* 3. Text below title */}
        <p className={clsx("text-gray-700 whitespace-pre-line text-sm leading-relaxed mb-5", !isFeatured && "line-clamp-3")}>
            {article.excerpt}
        </p>

        {/* 4. Author Details below text */}
        <div className="mt-auto pt-4 border-t border-gray-50 flex items-center justify-between relative z-20">
          <div className="flex items-center gap-x-3">
            <Image
              src={article.author.avatar}
              alt={article.author.name}
              width={32}
              height={32}
              className="h-8 w-8 rounded-full bg-gray-50 object-cover ring-1 ring-gray-200"
            />
            <div className="text-xs leading-snug">
              <p className="font-semibold text-gray-900">
                {article.author.name}
              </p>
              <div className="flex items-center text-gray-500 gap-x-1 mt-0.5">
                <span>{new Date(article.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                <span>&middot;</span>
                <Clock className="h-3 w-3" />
                <span>{article.readTime}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
