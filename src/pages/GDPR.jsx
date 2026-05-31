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
        GDPR Compliance
      </motion.h1>
      <motion.p
        className="text-lg font-light text-white/90 max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Our commitment to protecting your personal data under GDPR regulations.
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

function GDPRContent() {
  return (
    <motion.main
      className="w-full bg-white border border-gray-200 shadow-sm p-6 md:p-8 lg:p-12 overflow-x-hidden"
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      <div className="border-b border-gray-200 pb-6 mb-8 flex flex-col sm:flex-row sm:justify-between sm:items-end gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-black text-gray-900 tracking-tight mb-2">GDPR Compliance</h1>
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
          ProcessQ Dynamics is committed to compliance with the General Data Protection Regulation (GDPR). This page explains how we collect, process, and protect personal data of individuals in the European Economic Area (EEA).
        </motion.p>

        <motion.div variants={containerVariants} initial="hidden" animate="visible">
          <motion.div variants={fadeInUp}>
            <h2 className="text-xl md:text-2xl font-extrabold text-gray-800 mt-8 md:mt-10 mb-4">1. Data Controller</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              ProcessQ Dynamics Private Limited acts as the data controller for personal data processed through our website and services. Our registered office is located in Bangalore, Karnataka, India.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              <strong>Contact:</strong> privacy@processqdynamics.com
            </p>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <h2 className="text-xl md:text-2xl font-extrabold text-gray-800 mt-8 md:mt-10 mb-4">2. Legal Basis for Processing</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              We process personal data only when we have a valid legal basis, including:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-600 space-y-2">
              <li><strong>Consent:</strong> You have given clear consent to process your personal data for specific purposes.</li>
              <li><strong>Contract:</strong> Processing is necessary for a contract we have with you.</li>
              <li><strong>Legal Obligation:</strong> Processing is required to comply with our legal obligations.</li>
              <li><strong>Legitimate Interests:</strong> Processing serves our legitimate business interests, balanced against your rights.</li>
            </ul>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <h2 className="text-xl md:text-2xl font-extrabold text-gray-800 mt-8 md:mt-10 mb-4">3. Your GDPR Rights</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              As a data subject in the EEA, you have the following rights:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-600 space-y-2">
              <li><strong>Right of Access:</strong> Request a copy of your personal data.</li>
              <li><strong>Right to Rectification:</strong> Request correction of inaccurate data.</li>
              <li><strong>Right to Erasure:</strong> Request deletion of your personal data ("right to be forgotten").</li>
              <li><strong>Right to Restrict Processing:</strong> Request limitation of data processing.</li>
              <li><strong>Right to Data Portability:</strong> Receive your data in a structured, machine-readable format.</li>
              <li><strong>Right to Object:</strong> Object to processing based on legitimate interests.</li>
              <li><strong>Rights Related to Automated Decision Making:</strong> Not be subject to decisions based solely on automated processing.</li>
            </ul>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <h2 className="text-xl md:text-2xl font-extrabold text-gray-800 mt-8 md:mt-10 mb-4">4. Data Transfers</h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              When we transfer data outside the EEA, we ensure appropriate safeguards are in place, such as Standard Contractual Clauses approved by the European Commission. Our primary data centers are located in India and the United States, operating under binding corporate rules and data processing agreements.
            </p>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <h2 className="text-xl md:text-2xl font-extrabold text-gray-800 mt-8 md:mt-10 mb-4">5. Data Protection Officer</h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              We have appointed a Data Protection Officer (DPO) who can be reached at dpo@processqdynamics.com. The DPO oversees our GDPR compliance program and serves as the primary point of contact for data protection matters.
            </p>
          </motion.div>

          <motion.div variants={fadeInUp} className="mt-8 md:mt-12 p-4 md:p-6 bg-cyan-50 border-l-4 border-cyan-600 rounded-r">
            <h4 className="font-bold text-cyan-800 mb-2">Exercise Your Rights</h4>
            <p className="text-sm text-gray-700">
              To exercise any of your GDPR rights or for data protection inquiries, contact our DPO at{' '}
              <a href="mailto:dpo@processqdynamics.com" className="text-cyan-600 font-semibold hover:underline inline-block min-h-[44px] py-1">
                dpo@processqdynamics.com
              </a>
              . We respond to all requests within 30 days.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </motion.main>
  );
}

export function GDPR() {
  return (
    <div className="min-h-screen bg-[#f8f9fa]">
      <HeroSection />
      <BreadcrumbSection />
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12 flex flex-col md:flex-row gap-8 items-start">
        <MobileNav />
        <DesktopSidebar />
        <GDPRContent />
      </section>
    </div>
  );
}

export default GDPR;
