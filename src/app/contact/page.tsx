import SectionTitle from "@/components/ui/SectionTitle";

export const metadata = {
  title: "Contact | Startup Journal",
};

export default function Contact() {
  return (
    <div className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <SectionTitle title="Get in Touch" />
          <p className="mt-4 text-lg text-gray-500 mb-8">
            Whether you have a startup story, a PR pitch, or want to partner with us, drop us a line.
          </p>
          
          <form className="space-y-6">
            <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
              <div>
                <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">First name</label>
                <div className="mt-1">
                  <input type="text" name="first-name" id="first-name" className="block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm focus:border-brand-500 focus:ring-brand-500 ring-1 ring-gray-200" />
                </div>
              </div>
              <div>
                <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">Last name</label>
                <div className="mt-1">
                  <input type="text" name="last-name" id="last-name" className="block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm focus:border-brand-500 focus:ring-brand-500 ring-1 ring-gray-200" />
                </div>
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <div className="mt-1">
                <input id="email" name="email" type="email" autoComplete="email" className="block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm focus:border-brand-500 focus:ring-brand-500 ring-1 ring-gray-200" />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <div className="mt-1">
                <textarea id="message" name="message" rows={4} className="block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm focus:border-brand-500 focus:ring-brand-500 ring-1 ring-gray-200"></textarea>
              </div>
            </div>
            <div>
              <button type="submit" className="inline-flex justify-center rounded-md border border-transparent bg-brand-600 py-3 px-6 text-base font-medium text-white shadow-sm hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 transition-colors w-full sm:w-auto">
                Let's talk
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
