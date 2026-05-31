import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } }
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const sidebarLinks = [
  { path: '/compliance', label: 'Privacy Policy', icon: 'fas fa-shield-alt' },
  { path: '/terms', label: 'Terms of Service', icon: 'fas fa-file-contract' },
  { path: '/cookies', label: 'Cookie Policy', icon: 'fas fa-cookie' },
  { path: '/gdpr', label: 'GDPR Compliance', icon: 'fas fa-balance-scale' },
  { path: '/sla', label: 'Service Level Agreement', icon: 'fas fa-handshake' }
];

function HeroSection() {
  return (
    <header
      className="relative py-12 md:py-16 px-4 text-center"
      style={{
        background: 'linear-gradient(to right, rgba(8, 145, 178, 0.95) 0%, rgba(15, 23, 42, 0.9) 100%)'
      }}
    >
      <motion.h1
        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-3 tracking-tight"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Cookie Policy
      </motion.h1>
      <motion.p
        className="text-lg font-light text-white/90 max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        How we use cookies and similar technologies on our platform.
      </motion.p>
    </header>
  );
}

function BreadcrumbSection() {
  return (
    <div className="bg-gray-100 py-3 px-4 md:px-8 text-sm text-gray-600 border-b border-gray-200">
      <div className="max-w-7xl mx-auto flex items-center space-x-2">
        <Link to="/" className="hover:text-cyan-500 transition-colors">
          <i className="fas fa-home"></i>
        </Link>
        <span>/</span>
        <span className="font-semibold text-gray-800">Legal</span>
      </div>
    </div>
  );
}

function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const currentLink = sidebarLinks.find(link => location.pathname === link.path);

  return (
    <div className="md:hidden mb-6">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between bg-white border border-gray-200 rounded-sm px-4 py-3 text-sm font-semibold text-gray-700 shadow-sm"
        aria-expanded={isOpen}
        aria-label="Toggle legal documents navigation"
      >
        <div className="flex items-center">
          <i className={`${currentLink?.icon || 'fas fa-file-alt'} mr-3 w-5 text-center text-cyan-600`}></i>
          <span>{currentLink?.label || 'Legal Documents'}</span>
        </div>
        <i className={`fas fa-chevron-down transition-transform ${isOpen ? 'rotate-180' : ''}`}></i>
      </button>

      {isOpen && (
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="mt-2 bg-white border border-gray-200 rounded-sm shadow-sm overflow-hidden"
        >
          {sidebarLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`
                  block px-4 py-3 text-sm transition-colors border-l-4
                  ${isActive
                    ? 'bg-cyan-50 border-l-4 border-cyan-600 text-cyan-600 font-bold'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-cyan-600 border-l-transparent'
                  }
                `}
              >
                <div className="flex items-center">
                  <i className={`${link.icon} mr-3 w-5 text-center`}></i>
                  {link.label}
                </div>
              </Link>
            );
          })}
        </motion.nav>
      )}
    </div>
  );
}

function DesktopSidebar() {
  const location = useLocation();

  return (
    <motion.aside
      className="hidden md:block w-full md:w-1/4 bg-white border border-gray-200 shadow-sm sticky top-6 rounded-sm"
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <div className="p-6 border-b border-gray-100 bg-gray-50">
        <h3 className="font-extrabold text-gray-800 uppercase tracking-wider text-sm">Legal Documents</h3>
      </div>
      <nav className="flex flex-col text-sm">
        {sidebarLinks.map((link) => {
          const isActive = location.pathname === link.path;
          return (
            <Link
              key={link.path}
              to={link.path}
              className={`
                p-4 border-b border-gray-100 transition-colors border-l-4
                ${isActive
                  ? 'bg-cyan-50 border-l-4 border-cyan-600 text-cyan-600 font-bold'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-cyan-600 border-l-transparent'
                }
              `}
            >
              <div className="flex items-center">
                <i className={`${link.icon} mr-3 w-5 text-center`}></i>
                {link.label}
              </div>
            </Link>
          );
        })}
      </nav>
    </motion.aside>
  );
}

function PrintButton() {
  return (
    <button
      onClick={() => window.print()}
      className="hidden md:flex items-center text-sm font-semibold text-cyan-600 hover:text-cyan-800 border border-cyan-200 px-4 py-2 rounded hover:bg-cyan-50 transition-colors"
    >
      <i className="fas fa-print mr-2"></i>
      Print Document
    </button>
  );
}

function CookiesContent() {
  return (
    <motion.main
      className="w-full bg-white border border-gray-200 shadow-sm p-6 md:p-8 lg:p-12 overflow-x-hidden"
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      <div className="border-b border-gray-200 pb-6 mb-8 flex flex-col sm:flex-row sm:justify-between sm:items-end gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-black text-gray-900 tracking-tight mb-2">Cookie Policy</h1>
          <p className="text-sm text-gray-500">Last Updated: October 15, 2025</p>
        </div>
        <PrintButton />
      </div>

      <div className="legal-content max-w-3xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-gray-600 mb-8 leading-relaxed"
        >
          This Cookie Policy explains how ProcessQ Dynamics uses cookies and similar tracking technologies when you visit our website. Understanding how we use these technologies helps you make informed choices about your privacy.
        </motion.p>

        <motion.div variants={containerVariants} initial="hidden" animate="visible">
          <motion.div variants={fadeInUp}>
            <h2 className="text-xl md:text-2xl font-extrabold text-gray-800 mt-8 md:mt-10 mb-4">1. What Are Cookies?</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Cookies are small text files that are stored on your device when you visit a website. They help websites remember your preferences, analyze how you use the site, and personalize your experience. Similar technologies include web beacons, pixel tags, and local storage.
            </p>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <h2 className="text-xl md:text-2xl font-extrabold text-gray-800 mt-8 md:mt-10 mb-4">2. Types of Cookies We Use</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              We use several categories of cookies to operate our platform effectively:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-600 space-y-2">
              <li>
                <strong>Essential Cookies:</strong> Required for basic site functionality. These cannot be disabled without affecting site performance.
              </li>
              <li>
                <strong>Performance Cookies:</strong> Help us understand how visitors interact with our site by collecting anonymous usage data.
              </li>
              <li>
                <strong>Functionality Cookies:</strong> Remember your preferences and settings to provide a personalized experience.
              </li>
              <li>
                <strong>Targeting Cookies:</strong> Used to deliver relevant advertisements and track ad campaign performance.
              </li>
            </ul>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <h2 className="text-xl md:text-2xl font-extrabold text-gray-800 mt-8 md:mt-10 mb-4">3. How We Use Third-Party Cookies</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Some cookies are placed by third-party services that appear on our pages. We use:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-600 space-y-2">
              <li>Google Analytics for website traffic analysis</li>
              <li>HubSpot for marketing automation and CRM</li>
              <li>Cloudflare for security and performance optimization</li>
            </ul>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <h2 className="text-xl md:text-2xl font-extrabold text-gray-800 mt-8 md:mt-10 mb-4">4. Managing Your Cookie Preferences</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              You can manage your cookie preferences through our cookie consent banner when you first visit our site, or by adjusting your browser settings. Note that disabling certain cookies may affect the functionality of our platform.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Most web browsers allow you to block cookies, delete existing cookies, or only allow certain cookies. Instructions for managing cookies can be found in your browser's help documentation.
            </p>
          </motion.div>

          <motion.div variants={fadeInUp} className="mt-8 md:mt-12 p-4 md:p-6 bg-cyan-50 border-l-4 border-cyan-600 rounded-r">
            <h4 className="font-bold text-cyan-800 mb-2">Cookie Preferences</h4>
            <p className="text-sm text-gray-700">
              To update your cookie preferences or withdraw consent, please contact us at{' '}
              <a href="mailto:privacy@processqdynamics.com" className="text-cyan-600 font-semibold hover:underline inline-block min-h-[44px] py-1">
                privacy@processqdynamics.com
              </a>
              .
            </p>
          </motion.div>
        </motion.div>
      </div>
    </motion.main>
  );
}

export function Cookies() {
  return (
    <div className="min-h-screen bg-[#f8f9fa]">
      <HeroSection />
      <BreadcrumbSection />
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12 flex flex-col md:flex-row gap-8 items-start">
        <MobileNav />
        <DesktopSidebar />
        <CookiesContent />
      </section>
    </div>
  );
}

export default Cookies;
