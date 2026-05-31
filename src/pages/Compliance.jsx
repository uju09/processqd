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

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } }
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
        Legal & Compliance
      </motion.h1>
      <motion.p
        className="text-lg font-light text-white/90 max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Our commitment to transparency, privacy, and operational excellence.
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
  const handlePrint = () => {
    window.print();
  };

  return (
    <button
      onClick={handlePrint}
      className="hidden md:flex items-center text-sm font-semibold text-cyan-600 hover:text-cyan-800 border border-cyan-200 px-4 py-2 rounded hover:bg-cyan-50 transition-colors"
    >
      <i className="fas fa-print mr-2"></i>
      Print Document
    </button>
  );
}

function PrivacyPolicyContent() {
  return (
    <motion.main
      className="w-full bg-white border border-gray-200 shadow-sm p-6 md:p-8 lg:p-12 overflow-x-hidden"
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      <div className="border-b border-gray-200 pb-6 mb-8 flex flex-col sm:flex-row sm:justify-between sm:items-end gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-black text-gray-900 tracking-tight mb-2">Privacy Policy</h1>
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
          Welcome to ProcessQ Dynamics' Privacy Policy. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website (regardless of where you visit it from) and tell you about your privacy rights and how the law protects you.
        </motion.p>

        <motion.div variants={containerVariants} initial="hidden" animate="visible">
          <motion.div variants={fadeInUp}>
            <h2 className="text-xl md:text-2xl font-extrabold text-gray-800 mt-8 md:mt-10 mb-4">1. Important Information and Who We Are</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              <strong>Purpose of this privacy policy:</strong> This privacy policy aims to give you information on how we collect and process your personal data through your use of this website, including any data you may provide through this website when you sign up to our newsletter, purchase a product or service, or take part in a competition.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              This website is not intended for children and we do not knowingly collect data relating to children.
            </p>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <h2 className="text-xl md:text-2xl font-extrabold text-gray-800 mt-8 md:mt-10 mb-4">2. The Data We Collect About You</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Personal data, or personal information, means any information about an individual from which that person can be identified. It does not include data where the identity has been removed (anonymous data).
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-600 space-y-2">
              <li>
                <strong>Identity Data</strong> includes first name, maiden name, last name, username or similar identifier, marital status, title, date of birth and gender.
              </li>
              <li>
                <strong>Contact Data</strong> includes billing address, delivery address, email address and telephone numbers.
              </li>
              <li>
                <strong>Technical Data</strong> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access this website.
              </li>
              <li>
                <strong>Usage Data</strong> includes information about how you use our website, products and services.
              </li>
            </ul>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <h2 className="text-xl md:text-2xl font-extrabold text-gray-800 mt-8 md:mt-10 mb-4">3. How We Use Your Personal Data</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-600 space-y-2">
              <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
              <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
              <li>Where we need to comply with a legal obligation.</li>
            </ul>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <h2 className="text-xl md:text-2xl font-extrabold text-gray-800 mt-8 md:mt-10 mb-4">4. Data Security</h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know. They will only process your personal data on our instructions and they are subject to a duty of confidentiality.
            </p>
          </motion.div>

          <motion.div variants={fadeInUp} className="mt-8 md:mt-12 p-4 md:p-6 bg-cyan-50 border-l-4 border-cyan-600 rounded-r">
            <h4 className="font-bold text-cyan-800 mb-2">Have a privacy question?</h4>
            <p className="text-sm text-gray-700">
              If you have any questions about this privacy policy or our privacy practices, please contact our Data Protection Officer at{' '}
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

export function Compliance() {
  return (
    <div className="min-h-screen bg-[#f8f9fa]">
      <HeroSection />
      <BreadcrumbSection />
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12 flex flex-col md:flex-row gap-8 items-start">
        <MobileNav />
        <DesktopSidebar />
        <PrivacyPolicyContent />
      </section>
    </div>
  );
}

export default Compliance;