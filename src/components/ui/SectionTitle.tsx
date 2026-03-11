import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface SectionTitleProps {
  title: string;
  viewAllLink?: string;
}

export default function SectionTitle({ title, viewAllLink }: SectionTitleProps) {
  return (
    <div className="flex items-center justify-between border-b-2 border-brand-100 pb-3 mb-6">
      <h2 className="text-2xl font-bold tracking-tight text-gray-900 border-b-2 border-brand-500 -mb-[14px] pb-3 inline-block">
        {title}
      </h2>
      {viewAllLink && (
        <Link
          href={viewAllLink}
          className="group flex items-center text-sm font-semibold text-brand-600 hover:text-brand-500 transition-colors"
        >
          View All
          <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      )}
    </div>
  );
}
