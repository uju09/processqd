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
        Terms of Service
      </motion.h1>
      <motion.p
        className="text-lg font-light text-white/90 max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        The terms and conditions governing your use of our services and platform.
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

function TermsContent() {
  return (
    <motion.main
      className="w-full bg-white border border-gray-200 shadow-sm p-6 md:p-8 lg:p-12 overflow-x-hidden"
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      <div className="border-b border-gray-200 pb-6 mb-8 flex flex-col sm:flex-row sm:justify-between sm:items-end gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-black text-gray-900 tracking-tight mb-2">Terms of Service</h1>
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
          These Terms of Service ("Terms") govern your access to and use of ProcessQ Dynamics' website, products, and services. By accessing or using our platform, you agree to be bound by these Terms.
        </motion.p>

        <motion.div variants={containerVariants} initial="hidden" animate="visible">
          <motion.div variants={fadeInUp}>
            <h2 className="text-xl md:text-2xl font-extrabold text-gray-800 mt-8 md:mt-10 mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              By creating an account or using any ProcessQ Dynamics service, you acknowledge that you have read, understood, and agree to be bound by these Terms and our Privacy Policy. If you do not agree to these Terms, you may not access or use our services.
            </p>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <h2 className="text-xl md:text-2xl font-extrabold text-gray-800 mt-8 md:mt-10 mb-4">2. Description of Service</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              ProcessQ Dynamics provides AI-powered process automation, enterprise solutions, technology consulting, and cloud migration services. We reserve the right to modify, suspend, or discontinue any part of our services at any time without prior notice.
            </p>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <h2 className="text-xl md:text-2xl font-extrabold text-gray-800 mt-8 md:mt-10 mb-4">3. User Accounts and Responsibilities</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account. You must provide accurate and complete information when creating an account.
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-600 space-y-2">
              <li>You must be at least 18 years old to use our services.</li>
              <li>You are responsible for all content you upload or transmit through our platform.</li>
              <li>You agree not to use our services for any unlawful or prohibited purpose.</li>
            </ul>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <h2 className="text-xl md:text-2xl font-extrabold text-gray-800 mt-8 md:mt-10 mb-4">4. Intellectual Property Rights</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              All content, designs, logos, and materials on our platform are owned by ProcessQ Dynamics or our licensors and are protected by intellectual property laws. You retain ownership of any content you submit through our services, but grant us a license to use, store, and process such content as necessary to provide our services.
            </p>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <h2 className="text-xl md:text-2xl font-extrabold text-gray-800 mt-8 md:mt-10 mb-4">5. Limitation of Liability</h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              To the maximum extent permitted by law, ProcessQ Dynamics shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, or other intangible losses resulting from your use of or inability to use our services.
            </p>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <h2 className="text-xl md:text-2xl font-extrabold text-gray-800 mt-8 md:mt-10 mb-4">6. Governing Law</h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              These Terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions. Any disputes arising under these Terms shall be subject to the exclusive jurisdiction of the courts of Bangalore, Karnataka.
            </p>
          </motion.div>

          <motion.div variants={fadeInUp} className="mt-8 md:mt-12 p-4 md:p-6 bg-cyan-50 border-l-4 border-cyan-600 rounded-r">
            <h4 className="font-bold text-cyan-800 mb-2">Questions about these Terms?</h4>
            <p className="text-sm text-gray-700">
              If you have any questions about these Terms of Service, please contact our legal team at{' '}
              <a href="mailto:legal@processqdynamics.com" className="text-cyan-600 font-semibold hover:underline inline-block min-h-[44px] py-1">
                legal@processqdynamics.com
              </a>
              .
            </p>
          </motion.div>
        </motion.div>
      </div>
    </motion.main>
  );
}

export function Terms() {
  return (
    <div className="min-h-screen bg-[#f8f9fa]">
      <HeroSection />
      <BreadcrumbSection />
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12 flex flex-col md:flex-row gap-8 items-start">
        <MobileNav />
        <DesktopSidebar />
        <TermsContent />
      </section>
    </div>
  );
}

export default Terms;
