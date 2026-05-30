import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { industries } from '../../data/content/industries';
import { useCarousel } from '../../hooks/useCarousel';
import { CarouselControls } from '../widgets/CarouselControls';

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8, rotateY: 10 },
  visible: {
    opacity: 1,
    scale: 1,
    rotateY: 0,
    transition: { duration: 0.7, ease: "easeOut" }
  }
};

const slideFromLeft = {
  hidden: { opacity: 0, x: -100, scale: 0.8 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.7, ease: "easeOut" }
  }
};

const slideFromRight = {
  hidden: { opacity: 0, x: 100, scale: 0.8 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.7, ease: "easeOut" }
  }
};

const headerVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const imageVariants = {
  rest: { scale: 1 },
  hover: {
    scale: 1.05,
    transition: { duration: 0.3, ease: "easeInOut" }
  }
};

function IndustryCard({ image, imageAlt, title, description, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const slideDirection = index % 2 === 0 ? slideFromLeft : slideFromRight;

  return (
    <motion.div
      ref={ref}
      className="perspective-1000"
      variants={slideDirection}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      whileHover={{ rotateY: 5, transition: { duration: 0.3 } }}
      style={{ transformStyle: "preserve-3d" }}
    >
      <div className="bg-white rounded-xl md:rounded-2xl border-2 border-blue-200 hover:shadow-lg hover:-translate-y-1 hover:border-blue-400 transition-all duration-300 h-full min-h-[clamp(300px,40vw,400px)] flex flex-col">
        <motion.div
          className="bg-gradient-to-r from-blue-500 to-blue-600 p-4 md:p-8 flex justify-center overflow-hidden rounded-t-xl md:rounded-t-2xl aspect-[4/3] sm:aspect-video"
          variants={imageVariants}
          initial="rest"
          whileHover="hover"
        >
          <img src={image} alt={imageAlt} className="w-full h-full object-cover rounded-lg" />
        </motion.div>
        <div className="p-5 sm:p-6 text-center flex-grow flex flex-col justify-center">
          <h4 className="text-base md:text-lg font-extrabold text-blue-950 mb-2 text-fluid-lg weight-fluid-card-title">{title}</h4>
          <p className="text-sm font-medium text-gray-600 leading-relaxed mb-3 md:mb-4 line-clamp-2 sm:line-clamp-3 text-fluid-sm weight-fluid-body">{description}</p>
          <motion.div
            className="text-blue-600 hover:text-orange-500 font-semibold text-xs md:text-sm flex items-center justify-center gap-1 group"
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            Explore <span>&#8594;</span>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

function AnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
      <svg className="absolute w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
      <motion.div
        className="absolute w-96 h-96 bg-blue-400 rounded-full blur-3xl opacity-20"
        animate={{
          x: [0, 50, 0],
          y: [0, -30, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{ top: "10%", left: "10%" }}
      />
      <motion.div
        className="absolute w-80 h-80 bg-blue-500 rounded-full blur-3xl opacity-15"
        animate={{
          x: [0, -40, 0],
          y: [0, 40, 0],
          scale: [1, 1.15, 1]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{ bottom: "20%", right: "15%" }}
      />
      <motion.div
        className="absolute w-64 h-64 bg-orange-400 rounded-full blur-3xl opacity-10"
        animate={{
          x: [0, 30, 0],
          y: [0, 20, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
      />
    </div>
  );
}

export function FeaturedIndustries() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-50px" });
  const { currentIndex, canGoNext, canGoPrev, goNext, goPrev } = useCarousel(industries.length, 4);

  return (
    <div></div>
    // <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 container-responsive bg-gradient-to-b from-blue-50 to-slate-50 relative overflow-hidden">
    //   <AnimatedBackground />

    //   <motion.div
    //     ref={headerRef}
    //     variants={headerVariants}
    //     initial="hidden"
    //     animate={headerInView ? "visible" : "hidden"}
    //   >
    //     <h2 className="text-xl md:text-2xl lg:text-3xl font-extrabold text-center mb-4 bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent text-fluid-xl">
    //       AI-Powered Solutions
    //     </h2>
    //     <p className="text-center text-gray-500 text-sm md:text-base lg:text-lg mb-8 md:mb-12 max-w-2xl mx-auto px-4">
    //       Transform your enterprise with cutting-edge artificial intelligence and automation technologies
    //     </p>
    //   </motion.div>

    //   <motion.div
    //     className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 px-2 md:px-0"
    //     variants={containerVariants}
    //     initial="hidden"
    //     whileInView="visible"
    //     viewport={{ once: true, margin: "-100px" }}
    //   >
    //     {industries.map((industry, index) => (
    //       <IndustryCard key={industry.id} {...industry} index={index} />
    //     ))}
    //   </motion.div>

    //   <CarouselControls
    //     canGoPrev={canGoPrev}
    //     canGoNext={canGoNext}
    //     onPrev={goPrev}
    //     onNext={goNext}
    //   />
    // </section>

  );
}
