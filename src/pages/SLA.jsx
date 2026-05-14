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
        Service Level Agreement
      </motion.h1>
      <motion.p
        className="text-lg font-light text-white/90 max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Our commitment to service quality and reliability for enterprise clients.
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

function Sidebar() {
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

function SLAContent() {
  return (
    <motion.main
      className="w-full bg-white border border-gray-200 shadow-sm p-6 md:p-8 lg:p-12 overflow-x-hidden"
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      <div className="border-b border-gray-200 pb-6 mb-8 flex flex-col sm:flex-row sm:justify-between sm:items-end gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-black text-gray-900 tracking-tight mb-2">Service Level Agreement</h1>
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
          This Service Level Agreement ("SLA") outlines the service commitments and support standards that ProcessQ Dynamics provides to enterprise clients. This SLA forms part of your service contract and applies to all paid subscription plans.
        </motion.p>

        <motion.div variants={containerVariants} initial="hidden" animate="visible">
          <motion.div variants={fadeInUp}>
            <h2 className="text-xl md:text-2xl font-extrabold text-gray-800 mt-8 md:mt-10 mb-4">1. Service Availability</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              We commit to maintaining the following service availability levels:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-600 space-y-2">
              <li><strong>Enterprise Plan:</strong> 99.99% uptime (maximum 4.38 minutes downtime per month)</li>
              <li><strong>Professional Plan:</strong> 99.9% uptime (maximum 43.8 minutes downtime per month)</li>
              <li><strong>Starter Plan:</strong> 99.5% uptime (maximum 3.65 hours downtime per month)</li>
            </ul>
            <p className="text-gray-600 leading-relaxed">
              Scheduled maintenance windows will be communicated at least 48 hours in advance.
            </p>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <h2 className="text-xl md:text-2xl font-extrabold text-gray-800 mt-8 md:mt-10 mb-4">2. Support Response Times</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Our support team is available 24/7 for critical issues. Response time SLAs by severity:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-600 space-y-2">
              <li><strong>Critical (P1):</strong> 15-minute response, 1-hour resolution target</li>
              <li><strong>High (P2):</strong> 1-hour response, 4-hour resolution target</li>
              <li><strong>Medium (P3):</strong> 4-hour response, 24-hour resolution target</li>
              <li><strong>Low (P4):</strong> 8-hour response, 72-hour resolution target</li>
            </ul>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <h2 className="text-xl md:text-2xl font-extrabold text-gray-800 mt-8 md:mt-10 mb-4">3. Performance Credits</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              If we fail to meet our availability commitments, you may be eligible for service credits:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-600 space-y-2">
              <li>Below 99.9% but above 99%: 5% monthly credit</li>
              <li>Below 99% but above 95%: 10% monthly credit</li>
              <li>Below 95%: 25% monthly credit</li>
            </ul>
            <p className="text-gray-600 leading-relaxed">
              Credits are applied to your next billing cycle and require a written request within 30 days of the incident.
            </p>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <h2 className="text-xl md:text-2xl font-extrabold text-gray-800 mt-8 md:mt-10 mb-4">4. Exclusions</h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              This SLA does not apply to downtime caused by: scheduled maintenance (with advance notice), force majeure events, issues caused by customer's applications or equipment, third-party services, or DDoS attacks. Performance metrics are measured using our internal monitoring systems.
            </p>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <h2 className="text-xl md:text-2xl font-extrabold text-gray-800 mt-8 md:mt-10 mb-4">5. Incident Reporting</h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              To report a service incident or request support, contact our NOC team at support@processqdynamics.com or call our dedicated enterprise support line available in your client portal.
            </p>
          </motion.div>

          <motion.div variants={fadeInUp} className="mt-8 md:mt-12 p-4 md:p-6 bg-cyan-50 border-l-4 border-cyan-600 rounded-r">
            <h4 className="font-bold text-cyan-800 mb-2">Enterprise Support</h4>
            <p className="text-sm text-gray-700">
              For dedicated account management and custom SLA arrangements, contact our enterprise sales team at{' '}
              <a href="mailto:enterprise@processqdynamics.com" className="text-cyan-600 font-semibold hover:underline inline-block min-h-[44px] py-1">
                enterprise@processqdynamics.com
              </a>
              .
            </p>
          </motion.div>
        </motion.div>
      </div>
    </motion.main>
  );
}

export function SLA() {
  return (
    <div className="min-h-screen bg-[#f8f9fa]">
      <HeroSection />
      <BreadcrumbSection />
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12 flex flex-col md:flex-row gap-8 items-start">
        <Sidebar />
        <SLAContent />
      </section>
    </div>
  );
}

export default SLA;
