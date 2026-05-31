import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { footerContent } from '../../data/content/footer';

function NewsletterSection() {
  return (
    <div className="w-full lg:w-1/2">
      <h3 className="text-white text-2xl font-bold mb-2">Insights for the Intelligent Enterprise</h3>
      <p className="text-slate-400 text-sm mb-6 max-w-md">
        Join 50,000+ engineering leaders. Subscribe to our monthly newsletter for architecture deep-dives and product updates.
      </p>
      <form className="flex w-full max-w-md" onSubmit={(e) => e.preventDefault()}>
        <input
          type="email"
          placeholder="Enter your work email"
          className="flex-1 bg-slate-800 text-white border border-slate-700 px-4 py-3 rounded-l focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 placeholder-slate-500"
          required
        />
        <button
          type="submit"
          className="bg-brand-600 hover:bg-brand-700 text-white font-semibold px-6 py-3 rounded-r transition-colors shadow-md min-h-[48px]"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
}

function SupportLinks() {
  return (
    <div className="w-full lg:w-auto flex flex-col sm:flex-row gap-6 lg:gap-12 lg:border-l border-slate-800 lg:pl-12">
      <div>
        <p className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-2">Global Support</p>
        <p className="text-white font-semibold text-lg cursor-pointer">
          <i className="fas fa-phone-alt text-brand-500 mr-2"></i> +1 (800) 555-0199
        </p>
        <a href="#" className="text-brand-400 text-sm font-medium hover:text-brand-300 mt-1 inline-block">
          Open a support ticket &rarr;
        </a>
      </div>
      <div>
        <p className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-2">Sales Inquiries</p>
        <p className="text-white font-semibold text-lg cursor-pointer">
          <i className="fas fa-envelope text-brand-500 mr-2"></i> Contact Sales
        </p>
        <a href="#" className="text-brand-400 text-sm font-medium hover:text-brand-300 mt-1 inline-block">
          Request a live demo&rarr;
        </a>
      </div>
    </div>
  );
}

function BrandColumn() {
  return (
    <div className="lg:col-span-2 pr-0 lg:pr-10">
      <div className="text-brand-400 font-bold text-2xl flex items-center mb-6">
        <span className="bg-brand-600 text-white w-8 h-8 flex items-center justify-center mr-3 rounded text-sm shadow-sm">
          <i className="fas fa-bolt"></i>
        </span>
        ProcessQ Dynamics
      </div>
      <p className="text-sm text-slate-400 leading-relaxed mb-8 max-w-sm">
        Bridging the gap between physical operations and digital intelligence. We build the proactive tools of tomorrow, transforming complex operations into automated perfection.
      </p>

      <div className="flex space-x-4">
        {footerContent.social.map((social) => (
          <a
            key={social.name}
            href={social.href}
            className="w-11 h-11 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 hover:bg-brand-600 hover:text-white transition-all shadow-sm"
            aria-label={social.name}
          >
            <i className={`fab fa-${social.icon}`}></i>
          </a>
        ))}
      </div>
    </div>
  );
}

function SolutionsColumn() {
  return (
    <div>
      <h4 className="text-white font-bold mb-5 tracking-wide">Platform& Solutions</h4>
      <ul className="space-y-3 text-sm font-medium text-slate-400">
        {footerContent.solutions.map((item) => (
          <li key={item.text}>
            <a href={item.href} className="hover:text-brand-300 transition-colors flex items-center group">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-600 mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
              {item.text}
            </a>
          </li>
        ))}
        <li className="pt-2">
          <a href="/solutions" className="text-brand-400 hover:text-brand-300 transition-colors font-semibold">
            View All Solutions &rarr;
          </a>
        </li>
      </ul>
    </div>
  );
}

function ResourcesColumn() {
  return (
    <div>
      <h4 className="text-white font-bold mb-5 tracking-wide">Resources</h4>
      <ul className="space-y-3 text-sm font-medium text-slate-400">
        {footerContent.resources.map((item) => (
          <li key={item.text}>
            <a href={item.href} className="hover:text-brand-300 transition-colors">
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function CompanyColumn() {
  return (
    <div>
      <h4 className="text-white font-bold mb-5 tracking-wide">Company</h4>
      <ul className="space-y-3 text-sm font-medium text-slate-400">
        {footerContent.company.map((item) => (
          <li key={item.text}>
            <a href={item.href} className="hover:text-brand-300 transition-colors flex items-center">
              {item.text}
              {item.badge && (
                <span className="bg-brand-600 text-white text-[10px] px-1.5 py-0.5 rounded ml-1 font-bold">
                  {item.badge}
                </span>
              )}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function BottomBar() {
  return (
    <div className="border-t border-slate-800 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-6 flex flex-col md:flex-row justify-between items-center text-xs font-medium text-slate-500 gap-4">
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <span>© 2026 ProcessQ Dynamics, Inc. All rights reserved.</span>
          <div className="hidden sm:block w-1 h-1 bg-slate-700 rounded-full"></div>
          <button className="flex items-center hover:text-slate-300 transition-colors">
            <i className="fas fa-globe-americas mr-1.5"></i> United States (EN)
          </button>
        </div>

        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
          {footerContent.legal.map((item) => (
            <a key={item.text} href={item.href} className="hover:text-white transition-colors">
              {item.text}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="bg-slate-900 border-t-[8px] border-brand-600 font-sans">
      <div className="border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 flex flex-col lg:flex-row justify-between items-center gap-8">
          <NewsletterSection />
          <SupportLinks />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          <BrandColumn />
          <SolutionsColumn />
          <ResourcesColumn />
          <CompanyColumn />
        </div>
      </div>

      <BottomBar />
    </footer>
  );
}

export default Footer;
