import Image from "next/image";
import SectionTitle from "@/components/ui/SectionTitle";

export const metadata = {
  title: "About | Startup Journal",
  description: "Beyond surface-level startup news. We analyze unit economics and business strategies.",
};

export default function About() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            Beyond the <span className="text-brand-600">Headlines</span>
          </h1>
          <p className="mt-4 text-xl text-gray-500">
            Startup Journal was created to go beyond surface-level startup news.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-12 lg:gap-y-0 items-center">
          <div>
            <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-gray-100 shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200"
                alt="Team working together"
                width={1200}
                height={900}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              The real story is in the numbers.
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Most people see the funding headlines. We analyze the unit economics, founder decisions, and business strategies behind them. Every month our insights reach <strong>500,000+ professionals, founders, and investors across LinkedIn</strong>.
            </p>
            <dl className="mt-8 space-y-6">
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex h-10 w-10 items-center justify-center rounded-md bg-brand-500 text-white">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <dt className="text-lg font-medium leading-6 text-gray-900">Founder Journeys</dt>
                  <dd className="mt-2 text-base text-gray-500">Raw, real stories of building from 0 → 1.</dd>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex h-10 w-10 items-center justify-center rounded-md bg-brand-500 text-white">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22M2.25 18V15m0 3h3m7.5-3l5.25-5.25" />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <dt className="text-lg font-medium leading-6 text-gray-900">Business Breakdowns</dt>
                  <dd className="mt-2 text-base text-gray-500">Deep dives into startup business models and strategies.</dd>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex h-10 w-10 items-center justify-center rounded-md bg-brand-500 text-white">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <dt className="text-lg font-medium leading-6 text-gray-900">Finance Simplified</dt>
                  <dd className="mt-2 text-base text-gray-500">Explaining venture capital and startup economics in simple terms.</dd>
                </div>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
