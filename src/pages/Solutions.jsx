import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { solutionsData } from '../data/content/solutionsData';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } }
};

function HeroSection() {
  return (
    <header
      className="relative overflow-hidden"
      style={{
        backgroundImage: `radial-gradient(circle at 100% 0%, #D9F5FD 0%, transparent 40%),
                          radial-gradient(circle at 0% 100%, #EBF1F6 0%, transparent 40%)`,
        backgroundColor: '#F5F6F7'
      }}
    >
      <div className="max-w-7xl mx-auto py-16 sm:py-20 px-4 flex flex-col items-center text-center relative z-10">
        <motion.span
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-700 text-xs font-bold tracking-wide uppercase mb-4 sm:mb-6"
        >
          Next-Generation Intelligence
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-fluid-3xl weight-fluid-hero text-slate-900 leading-tight max-w-4xl"
        >
          Turning complex operations into proactive intelligence.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-fluid-base weight-fluid-body text-slate-600 mb-8 sm:mb-10 max-w-3xl leading-relaxed"
        >
          From autonomous site reliability and industrial data contextualization to spatial dynamics and clinical-grade health monitoring, ProcessQ Dynamics bridges the gap between raw data and actionable, life-saving insights.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a href="#solutions" className="bg-blue-600 text-white font-semibold px-8 py-3.5 rounded shadow hover:bg-blue-700 transition-colors text-center touch-target">
            Explore Our Solutions
          </a>
          <Link to="/contact" className="bg-white text-slate-700 border border-gray-300 font-semibold px-8 py-3.5 rounded shadow-sm hover:bg-gray-50 hover:border-gray-400 transition-colors text-center touch-target">
            Talk to an Expert
          </Link>
        </motion.div>
      </div>
    </header>
  );
}

function HealthMonitoringGraphic() {
  return (
    <div
      className="rounded-xl shadow-sm border border-gray-200 p-8 aspect-square lg:aspect-[4/3] flex flex-col relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #F5F6F7 0%, #EBF1F6 100%)'
      }}
    >
      <div className="absolute top-0 right-0 p-6 opacity-10 text-blue-600">
        <i className="fas fa-notes-medical text-9xl"></i>
      </div>
      <div className="bg-white p-4 rounded shadow-sm border border-gray-100 mb-4 w-3/4 relative z-10">
        <div className="flex justify-between items-center mb-2">
          <span className="text-xs font-semibold text-slate-500 uppercase">Heart Rate Var.</span>
          <span className="text-xs font-bold text-green-500">Normal</span>
        </div>
        <div className="h-12 w-full flex items-end space-x-1">
          <div className="w-1/6 bg-blue-200 h-1/2 rounded-t"></div>
          <div className="w-1/6 bg-blue-300 h-2/3 rounded-t"></div>
          <div className="w-1/6 bg-blue-400 h-full rounded-t"></div>
          <div className="w-1/6 bg-blue-300 h-3/4 rounded-t"></div>
          <div className="w-1/6 bg-blue-200 h-1/3 rounded-t"></div>
          <div className="w-1/6 bg-blue-200 h-1/2 rounded-t"></div>
        </div>
      </div>
      <div className="bg-white p-4 rounded shadow-sm border border-gray-100 w-5/6 relative z-10 self-end">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
            <i className="fas fa-exclamation-triangle"></i>
          </div>
          <div>
            <div className="text-sm font-bold text-slate-900">Predictive Alert Generated</div>
            <div className="text-xs text-slate-500">Early deviation detected. Care team notified.</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CrowdTrackingGraphic() {
  return (
    <div
      className="rounded-xl shadow-sm border border-gray-200 p-8 aspect-square lg:aspect-[4/3] flex items-center justify-center relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #F5F6F7 0%, #EBF1F6 100%)'
      }}
    >
      <div className="absolute inset-0 opacity-10 text-slate-400 grid grid-cols-6 grid-rows-6 gap-2 p-4">
        {Array.from({ length: 36 }).map((_, i) => (
          <div key={i} className="rounded-full bg-slate-400 w-2 h-2 place-self-center"></div>
        ))}
      </div>
      <div className="relative z-10 w-full flex flex-col gap-4">
        <div className="bg-white p-5 rounded shadow-sm border border-gray-100 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded bg-blue-50 flex items-center justify-center text-blue-500">
              <i className="fas fa-users text-xl"></i>
            </div>
            <div>
              <div className="text-sm font-semibold text-slate-900">Terminal A Density</div>
              <div className="text-xs text-slate-500">Live Heatmap Tracking</div>
            </div>
          </div>
          <div className="text-right">
            <div className="text-xl font-bold text-slate-900">84%</div>
            <div className="text-xs font-semibold text-blue-600">Capacity</div>
          </div>
        </div>
        <div className="bg-white p-5 rounded shadow-sm border border-gray-100 ml-8 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded bg-orange-50 flex items-center justify-center text-orange-500">
              <i className="fas fa-route text-xl"></i>
            </div>
            <div>
              <div className="text-sm font-semibold text-slate-900">Queue Prediction</div>
              <div className="text-xs text-slate-500">Checkpoint 4 Bottleneck</div>
            </div>
          </div>
          <div className="text-xs font-bold bg-orange-100 text-orange-700 px-2 py-1 rounded">Open Lane</div>
        </div>
      </div>
    </div>
  );
}

function SREGraphic() {
  return (
    <div
      className="rounded-xl shadow-sm border border-gray-200 p-8 aspect-square lg:aspect-[4/3] flex flex-col justify-center relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #F5F6F7 0%, #EBF1F6 100%)'
      }}
    >
      <div className="bg-slate-900 rounded-lg p-4 font-mono text-xs text-green-400 shadow-xl overflow-hidden relative w-full h-full max-h-80 flex flex-col">
        <div className="flex space-x-2 mb-4 border-b border-slate-700 pb-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="space-y-2 opacity-80 flex-1 overflow-hidden">
          <div>&gt; [ERROR] Latency spike detected on prod-db-01</div>
          <div>&gt; Analyzing telemetry and historical CAPA...</div>
          <div className="text-blue-300">&gt; Root cause isolated: Memory leak in auth-service v2.1</div>
          <div>&gt; Initiating automated rollback to v2.0...</div>
          <div>&gt; Deploying... [SUCCESS]</div>
          <div>&gt; Generating incident post-mortem (CAPA-4092)...</div>
          <div>&gt; Suggesting IaC patch for memory bounds...</div>
          <div className="text-white font-bold mt-2">&gt; System status: Healthy <span className="animate-pulse">_</span></div>
        </div>
      </div>
    </div>
  );
}

function DataProcessingGraphic() {
  return (
    <div
      className="rounded-xl shadow-sm border border-gray-200 p-8 aspect-square lg:aspect-[4/3] flex items-center justify-center relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #F5F6F7 0%, #EBF1F6 100%)'
      }}
    >
      <div className="relative w-full h-full flex flex-col justify-center space-y-6">
        <div className="flex justify-center space-x-4 opacity-70">
          <div className="bg-white p-3 rounded shadow border border-slate-200 text-center">
            <i className="fas fa-file-pdf text-red-500 text-2xl mb-1"></i>
            <div className="text-[10px] font-bold">P&ID</div>
          </div>
          <div className="bg-white p-3 rounded shadow border border-slate-200 text-center">
            <i className="fas fa-table text-green-500 text-2xl mb-1"></i>
            <div className="text-[10px] font-bold">Sensor</div>
          </div>
          <div className="bg-white p-3 rounded shadow border border-slate-200 text-center">
            <i className="fas fa-file-word text-blue-500 text-2xl mb-1"></i>
            <div className="text-[10px] font-bold">SOP Log</div>
          </div>
        </div>
        <div className="flex justify-center">
          <i className="fas fa-arrow-down text-blue-400"></i>
        </div>
        <div className="bg-slate-900 text-white rounded-lg p-5 shadow-lg border border-slate-800 text-center relative z-10 mx-auto w-4/5">
          <div className="text-xs font-bold text-blue-300 uppercase tracking-widest mb-2">
            <i className="fas fa-network-wired mr-2"></i>Semantic Knowledge Graph
          </div>
          <div className="flex items-center justify-center space-x-2 text-sm mt-3 flex-wrap">
            <span className="bg-slate-800 px-2 py-1 rounded border border-slate-600">PMP-308B</span>
            <i className="fas fa-link text-slate-500 text-xs"></i>
            <span className="bg-slate-800 px-2 py-1 rounded border border-slate-600">180°C</span>
            <i className="fas fa-link text-slate-500 text-xs"></i>
            <span className="bg-red-900/50 text-red-300 px-2 py-1 rounded border border-red-700">Limit: 175°C</span>
          </div>
        </div>
      </div>
    </div>
  );
}

const graphicComponents = {
  'health-monitoring': HealthMonitoringGraphic,
  'crowd-tracking': CrowdTrackingGraphic,
  'autonomous-sre': SREGraphic,
  'contextualized-data': DataProcessingGraphic
};

function SolutionSection({ solution, index }) {
  const isReversed = index % 2 === 1;
  const GraphicComponent = graphicComponents[solution.graphicType];

  return (
    <section
      className={`py-24 px-4 md:px-8 border-b border-gray-200 ${isReversed ? 'bg-slate-50' : 'bg-white'}`}
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        <motion.div
          className={`flex-1 lg:pr-8 ${isReversed ? 'lg:order-2 lg:pl-8' : ''}`}
          initial={{ opacity: 0, x: isReversed ? 50 : -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-blue-600 font-semibold tracking-wide uppercase text-sm mb-3">{solution.category}</p>
          <h2 className="text-fluid-xl weight-fluid-heading text-slate-900 mb-6">{solution.title}</h2>
          {solution.description.map((para, i) => (
            <p key={i} className="text-slate-600 text-fluid-base weight-fluid-body mb-6 leading-relaxed">{para}</p>
          ))}

          <ul className="space-y-6 text-slate-700 text-sm md:text-base">
            {solution.features.map((feature, i) => (
              <motion.li
                key={i}
                className="flex items-start"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <div className="mt-1 mr-4 text-blue-600 bg-blue-100 rounded-full p-1.5">
                  <i className={`fas ${feature.icon} w-4 h-4 text-center`}></i>
                </div>
                <div>
                  <strong className="text-slate-900 font-semibold">{feature.title}:</strong> {feature.description}
                </div>
              </motion.li>
            ))}
          </ul>
        </motion.div>
        <motion.div
          className={`flex-1 w-full max-w-lg lg:max-w-none ${isReversed ? 'lg:order-1 lg:mr-auto' : ''}`}
          initial={{ opacity: 0, x: isReversed ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {GraphicComponent && <GraphicComponent />}
        </motion.div>
      </div>
    </section>
  );
}

function CTASection() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    solution: 'General Inquiry'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className="bg-blue-600 text-white py-24 px-4 md:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-fluid-xl weight-fluid-heading mb-6"
        >
          Ready to transform your operations?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-blue-100 text-lg leading-relaxed mb-10 max-w-2xl mx-auto"
        >
          Connect with our product specialists to discuss your operational challenges, get a customized demonstration of our platforms, or inquire about enterprise deployments.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white p-8 md:p-10 rounded-lg shadow-xl text-left max-w-2xl mx-auto text-slate-900"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">First Name</label>
                <input
                  type="text"
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all touch-target"
                  placeholder="Jane"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Last Name</label>
                <input
                  type="text"
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all touch-target"
                  placeholder="Doe"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Work Email</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all touch-target"
                placeholder="jane@company.com"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Solution of Interest</label>
              <select
                value={formData.solution}
                onChange={(e) => setFormData({ ...formData, solution: e.target.value })}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-slate-700 touch-target"
              >
                <option>Health Care Monitoring</option>
                <option>Crowd Tracking Solution</option>
                <option>Autonomous Intelligence SRE</option>
                <option>Contextualized Data Processing</option>
                <option>General Inquiry</option>
              </select>
            </div>
            <button
              type="submit"
              className="w-full bg-slate-900 text-white font-semibold py-4 rounded hover:bg-slate-800 transition-colors shadow-sm mt-4 touch-target"
            >
              Contact Solutions Team
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

export function Solutions() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <main id="solutions">
        {solutionsData.map((solution, index) => (
          <SolutionSection key={solution.id} solution={solution} index={index} />
        ))}
      </main>
      <CTASection />
    </div>
  );
}

export default Solutions;