import Link from "next/link";
import { Twitter, Linkedin, Youtube, ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-dark-900 text-gray-300">
      <div className="mx-auto max-w-7xl px-4 pb-8 pt-16 sm:px-6 lg:px-8 lg:pt-24">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <span className="text-2xl font-extrabold tracking-tight text-white">
              Startup<span className="text-brand-500">Journal</span>
            </span>
            <p className="text-sm leading-6 text-gray-400">
              Most people see the funding headlines. We analyze the unit economics, founder decisions, and business strategies behind them.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Twitter</span>
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">YouTube</span>
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white uppercase tracking-wider">Categories</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <Link href="/category/founder-journeys" className="text-sm leading-6 hover:text-white transition-colors">Founder Journeys</Link>
                  </li>
                  <li>
                    <Link href="/category/business-breakdowns" className="text-sm leading-6 hover:text-white transition-colors">Business Breakdowns</Link>
                  </li>
                  <li>
                    <Link href="/category/finance-simplified" className="text-sm leading-6 hover:text-white transition-colors">Finance Simplified</Link>
                  </li>
                  <li>
                    <Link href="/category/daily-trends" className="text-sm leading-6 hover:text-white transition-colors">Daily Trends</Link>
                  </li>
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white uppercase tracking-wider">Company</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <Link href="/about" className="text-sm leading-6 hover:text-white transition-colors">About Us</Link>
                  </li>
                  <li>
                    <Link href="/contact" className="text-sm leading-6 hover:text-white transition-colors">Contact</Link>
                  </li>
                  <li>
                    <Link href="#" className="text-sm leading-6 hover:text-white transition-colors">Careers</Link>
                  </li>
                  <li>
                    <Link href="#" className="text-sm leading-6 hover:text-white transition-colors">Privacy Policy</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-10 md:mt-0 lg:ml-auto w-full max-w-sm">
              <h3 className="text-sm font-semibold leading-6 text-white uppercase tracking-wider">Join our newsletter</h3>
              <p className="mt-2 text-sm leading-6 text-gray-400">
                Join 1,000+ curious minds. Subscribe to get weekly startup breakdowns.
              </p>
              <form className="mt-6 sm:flex sm:max-w-md">
                <label htmlFor="email-address" className="sr-only">Email address</label>
                <input
                  type="email"
                  name="email-address"
                  id="email-address"
                  autoComplete="email"
                  required
                  className="w-full min-w-0 appearance-none rounded-md border-0 bg-white/5 px-3 py-2 text-base text-white shadow-sm ring-1 ring-inset ring-white/10 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-brand-500 sm:text-sm sm:leading-6"
                  placeholder="Enter your email"
                />
                <div className="mt-4 sm:ml-4 sm:mt-0 sm:flex-shrink-0">
                  <button
                    type="submit"
                    className="flex w-full items-center justify-center rounded-md bg-brand-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-brand-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500 transition-colors"
                  >
                    Subscribe <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-xs leading-5 text-gray-400 text-center">&copy; {new Date().getFullYear()} Startup Journal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
