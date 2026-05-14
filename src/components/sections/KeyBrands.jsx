import { motion } from 'framer-motion';
import { useRef } from 'react';
import { missionData, industriesData, coreCapabilities } from '../../data/content/brands';

// Card variants for animations
const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } }
};

// Vision/Mission Card Component
function StatementCard({ data, index }) {
  const isVision = index === 0;
  return (
    <motion.div
      className={`bg-white p-8 md:p-10 border-t-4 ${isVision ? 'border-blue-700' : 'border-blue-600'} shadow-md border border-gray-200 hover:shadow-lg transition-all card-height-statement flex flex-col`}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      whileHover={{ y: -4 }}
    >
      <div className="flex items-center mb-6">
        <div className={`${isVision ? 'bg-blue-100 text-blue-700' : 'bg-blue-50 text-blue-600'} p-4 rounded-full mr-4 flex items-center justify-center`}>
          <i className={`${isVision ? 'fas fa-eye' : 'fas fa-bullseye'} text-2xl`}></i>
        </div>
        <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900 text-fluid-2xl weight-fluid-card-title">{data.title}</h3>
      </div>
      <p className="text-gray-700 leading-relaxed text-base md:text-lg font-medium line-clamp-3 text-fluid-base weight-fluid-body">
        {data.statement}
      </p>
    </motion.div>
  );
}

// Industry Card Component
const industryIcons = {
  'Steel & Metals': 'fas fa-layer-group',
  'Glass Manufacturing': 'fas fa-fire',
  'Chemicals': 'fas fa-flask',
  'Power & Utilities': 'fas fa-bolt',
  'Sugar & Process Manufacturing': 'fas fa-boxes-stacked',
  'Oil & Gas': 'fas fa-oil-well',
  'Mining': 'fas fa-hammer',
  'Healthcare & Life Sciences': 'fas fa-suitcase-medical'
};

function IndustryCard({ name }) {
  const icon = industryIcons[name] || 'fas fa-industry';
  return (
    <motion.div
      className="group border-2 border-slate-700 bg-slate-800 p-8 text-center hover:border-blue-600 hover:bg-slate-700 transition-all cursor-pointer card-height-industry flex flex-col justify-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      whileHover={{ y: -4 }}
    >
      <i className={`${icon} text-4xl text-gray-500 group-hover:text-blue-500 mb-4 transition-colors`}></i>
      <h4 className="font-extrabold text-sm md:text-base uppercase tracking-wide text-white">{name}</h4>
    </motion.div>
  );
}

// Capability Card Component
function CapabilityCard({ capability, index }) {
  const iconMap = {
    'fas fa-robot': 'fas fa-robot',
    'fas fa-chart-line': 'fas fa-chart-line',
    'fas fa-brain': 'fas fa-network-wired',
    'fas fa-atom': 'fas fa-chess-knight',
    'fas fa-eye': 'fas fa-camera'
  };
  const icon = iconMap[capability.icon] || capability.icon;

  return (
    <motion.div
      className="bg-white p-8 shadow-md border-2 border-gray-200 hover:-translate-y-1 hover:shadow-lg hover:border-blue-300 transition-all duration-300 card-height-capability flex flex-col"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <h4 className="text-lg font-extrabold mb-6 text-gray-900 flex items-center border-b border-gray-100 pb-4 weight-fluid-heading">
        <i className={`${icon} text-blue-600 mr-3 text-2xl`}></i>
        {capability.title}
      </h4>
      <ul className="space-y-3 text-sm text-gray-700 font-semibold flex-grow">
        {capability.items.map((item, i) => (
          <li key={i} className="flex items-start">
            <i className="fas fa-angle-right text-blue-500 mt-1 mr-3"></i>
            {item}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

function KeyBrands() {
  const ref = useRef(null);

  return (
    <section className="py-16 px-4 md:px-8">
      <div className="container-responsive">
        {/* Section Title */}
        <motion.h2
          className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-center mb-10 md:mb-14 text-gray-900 text-fluid-2xl weight-fluid-heading"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Our Company
        </motion.h2>

        {/* Vision + Mission Cards - INSIDE container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10 md:mb-14 min-w-0">
          <StatementCard data={missionData.vision} index={0} />
          <StatementCard data={missionData.mission} index={1} />
        </div>
      </div>

      {/* Industries We Serve - Separate section with own container */}
      <section className="bg-slate-900 py-20 px-4 md:px-8 text-white relative border-b-4 border-blue-600">
        <div className="container-responsive">
          <div className="text-center mb-14">
            <h3 className="text-2xl md:text-3xl font-extrabold mb-6 text-white text-fluid-2xl weight-fluid-heading">Process Industries We Serve</h3>
            <div className="w-16 h-1 bg-blue-600 mx-auto"></div>
          </div>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {industriesData.map((industry, i) => (
              <IndustryCard key={i} name={industry} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Core Capabilities - Separate section with own container */}
      <section className="bg-gray-200 py-20 px-4 md:px-8">
        <div className="container-responsive">
          <div className="text-center mb-16">
            <h3 className="text-2xl md:text-3xl font-extrabold text-gray-700 mb-4 text-fluid-2xl weight-fluid-heading">Core Capabilities</h3>
            <p className="text-gray-500 text-lg">Delivering advanced AI, intelligence, and optimization across operational domains.</p>
          </div>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {coreCapabilities.map((capability, i) => (
              <CapabilityCard key={i} capability={capability} index={i} />
            ))}
          </motion.div>
        </div>
      </section>
    </section>
  );
}

export { KeyBrands };
export default KeyBrands;