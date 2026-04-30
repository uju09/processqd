import { motion } from 'framer-motion';
import { useRef } from 'react';

const largeBrands = [
  {
    id: 'ingersoll-rand',
    name: 'Ingersoll Rand',
    logoType: 'ingersoll',
    description:
      'Ingersoll Rand provides products, services and solutions that enhance our customers\' energy efficiency, productivity and operations. With over 160 years of air compressor knowledge and expertise, you can trust Ingersoll Rand to provide you with a solution you can rely on.',
  },
  {
    id: 'gardner-denver',
    name: 'Gardner Denver',
    logoType: 'gardner',
    description:
      'World leading supplier of compressors, blowers and vacuum pumps. We accelerate mission-critical applications worldwide. With 160 years of experience, we are a leading global provider of compressors, blowers, and vacuum pumps.',
  },
  {
    id: 'compair',
    name: 'CompAir',
    logoType: 'compair',
    description:
      'Leading supplier of oil free and oil lubricated rotary screw, reciprocating, centrifugal and portable air compressors. The company has been at the forefront of air compressor technology for many decades & we now also produce our own in-house air treatment ranges to supply the complete compressed air network package.',
  },
];

const smallBrands = [
  { id: 'aro', name: 'ARO', style: 'text-red-600 font-bold text-3xl' },
  { id: 'champion', name: 'Champion', style: 'text-red-700 font-bold text-2xl italic uppercase tracking-wider' },
  { id: 'elmo', name: 'Elmo Rietschle', style: 'text-gray-900 font-bold text-xl', prefix: 'ER', prefixBg: 'bg-blue-800' },
  { id: 'milton', name: 'Milton Roy', style: 'text-blue-500 font-bold text-xl uppercase tracking-widest', icon: 'circle-notch' },
  { id: 'nash', name: 'NASH', style: 'text-blue-800 font-black text-3xl tracking-tighter' },
  { id: 'robuschi', name: 'Robuschi', style: 'text-[#1a365d] font-black text-2xl tracking-tighter uppercase' },
  { id: 'roots', name: 'ROOTS', style: 'text-blue-600 font-black text-3xl italic tracking-tighter' },
  { id: 'thomas', name: 'Thomas', style: 'text-gray-900 font-black text-2xl tracking-widest uppercase' },
  { id: 'seepex', name: 'Seepex', style: 'text-[#004b87] font-black text-2xl tracking-widest uppercase' },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
};

const logoVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: 'easeOut' } }
};

function IngersollRandLogo() {
  return (
    <div className="text-red-600 font-bold text-xl italic tracking-tighter flex items-center">
      <span className="bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-1 text-xs not-italic">IR</span>
      Ingersoll Rand.
    </div>
  );
}

function GardnerDenverLogo() {
  return (
    <h2 className="font-black text-2xl tracking-tighter text-gray-900 uppercase">
      Gardner<br />
      <span className="text-red-600 border-t-2 border-red-600 pt-1 block mt-1">Denver</span>
    </h2>
  );
}

function CompAirLogo() {
  return (
    <div className="font-bold text-2xl text-[#1a365d] flex items-center">
      <i className="fas fa-gear mr-2 text-[#1a365d]"></i> CompAir
    </div>
  );
}

function LargeBrandCard({ brand }) {
  return (
    <motion.div
      className="bg-white flex flex-col md:flex-row items-center shadow-sm border border-gray-100 hover:shadow-md hover:border-cyan-200 transition-all duration-300"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      whileHover={{ y: -4 }}
    >
      <div className="w-full md:w-1/3 p-8 flex justify-center items-center md:border-r border-gray-200 min-h-[120px]">
        {brand.id === 'ingersoll-rand' && <IngersollRandLogo />}
        {brand.id === 'gardner-denver' && <GardnerDenverLogo />}
        {brand.id === 'compair' && <CompAirLogo />}
      </div>
      <div className="w-full md:w-2/3 p-8">
        <h4 className="font-bold text-lg mb-2 text-gray-800">{brand.name}</h4>
        <p className="text-sm text-gray-600 leading-relaxed">{brand.description}</p>
      </div>
    </motion.div>
  );
}

function SmallBrandLogo({ brand }) {
  return (
    <motion.div
      className="bg-white h-32 flex items-center justify-center shadow-sm border border-gray-100 p-4 hover:shadow-md hover:border-cyan-200 transition-all duration-300 cursor-pointer"
      variants={logoVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      whileHover={{ scale: 1.05 }}
    >
      {brand.id === 'elmo' ? (
        <div className={`flex items-center ${brand.style}`}>
          <span className={`${brand.prefixBg} text-white rounded-full w-8 h-8 flex items-center justify-center mr-2 text-xs font-bold`}>{brand.prefix}</span>
          {brand.name}
        </div>
      ) : brand.id === 'milton-roy' || brand.id === 'milton' ? (
        <span className={brand.style}>
          <i className={`fas fa-${brand.icon} mr-1`}></i> {brand.name}
        </span>
      ) : (
        <span className={brand.style}>{brand.name}</span>
      )}
    </motion.div>
  );
}

function KeyBrands() {
  const ref = useRef(null);

  return (
    <section className="bg-[#f0f0f2] py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          ref={ref}
          className="text-3xl font-bold text-center mb-12 text-[#4a5568]"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Key Brands
        </motion.h2>

        {/* Large Brand Cards */}
        <motion.div
          className="space-y-6 mb-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {largeBrands.map((brand) => (
            <LargeBrandCard key={brand.id} brand={brand} />
          ))}
        </motion.div>

        {/* Small Brand Logos Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {smallBrands.map((brand) => (
            <SmallBrandLogo key={brand.id} brand={brand} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export { KeyBrands };
export default KeyBrands;