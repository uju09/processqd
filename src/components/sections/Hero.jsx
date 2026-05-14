import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { heroContent } from '../../data/content/hero';

// Hero slide data for carousel
const heroSlides = [
  {
    id: 1,
    tagline: heroContent.tagline,
    title: heroContent.title,
    description: heroContent.description,
    ctaPrimary: heroContent.ctaPrimary,
    ctaSecondary: heroContent.ctaSecondary,
    backgroundImage: heroContent.backgroundImage,
  },
  {
    id: 2,
    tagline: 'Predictive Maintenance & Process Optimization',
    title: 'AI-Driven Systems for Industrial Operations',
    description: 'Deploy AI-driven systems for predictive maintenance, anomaly detection, process optimization, and operational intelligence across manufacturing and process industries.',
    ctaPrimary: 'View Case Studies',
    ctaSecondary: 'Learn More',
    backgroundImage: 'https://images.unsplash.com/photo-1717386255773-1e3037c81788?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
  },
  {
    id: 3,
    tagline: 'Industrial Copilots',
    title: 'Transform Industrial Documents into Intelligent AI',
    description: 'Transform industrial documents such as SOPs, P&IDs, PFDs, manuals, and datasheets into intelligent AI copilots using Agentic RAG, knowledge graphs, and domain-aware language models.',
    ctaPrimary: 'Explore Solutions',
    ctaSecondary: 'Learn More',
    backgroundImage: 'https://images.unsplash.com/photo-1694903110330-cc64b7e1d21d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
  },
  {
    id: 4,
    tagline: 'Advanced Optimization',
    title: 'Complex Industrial Scheduling & Resource Allocation',
    description: 'Apply advanced optimization techniques and quantum-inspired algorithms to solve complex industrial scheduling, resource allocation, and operational planning problems.',
    ctaPrimary: 'Schedule Consultation',
    ctaSecondary: 'View Case Studies',
    backgroundImage: 'https://images.unsplash.com/photo-1707286981660-f59326267198?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
  },
];

const AUTO_PLAY_INTERVAL = 5000;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const buttonVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

// Floating decorative shapes
const floatingCircle1Variants = {
  animate: {
    y: [0, -25, 0],
    x: [0, 10, 0],
    scale: [1, 1.1, 1],
    transition: {
      duration: 8,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

const floatingCircle2Variants = {
  animate: {
    y: [0, -15, 0],
    x: [0, -15, 0],
    scale: [1, 1.05, 1],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
      delay: 1
    }
  }
};

const floatingLine1Variants = {
  animate: {
    y: [0, -20, 0],
    rotate: [45, 50, 45],
    transition: {
      duration: 7,
      repeat: Infinity,
      ease: "easeInOut",
      delay: 0.5
    }
  }
};

const floatingLine2Variants = {
  animate: {
    y: [0, -30, 0],
    rotate: [-30, -25, -30],
    transition: {
      duration: 9,
      repeat: Infinity,
      ease: "easeInOut",
      delay: 2
    }
  }
};

const floatingCircle3Variants = {
  animate: {
    y: [0, -18, 0],
    scale: [0.9, 1.1, 0.9],
    opacity: [0.3, 0.5, 0.3],
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut",
      delay: 1.5
    }
  }
};

const imageVariants = {
  hidden: { opacity: 0, scale: 1.05 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1, ease: "easeOut" }
  }
};

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef(null);

  const goToSlide = useCallback((index) => {
    setCurrentSlide(index);
  }, []);

  const goNext = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  }, []);

  const goPrev = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  }, []);

  // Auto-play effect
  useEffect(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        goNext();
      }, AUTO_PLAY_INTERVAL);
    }
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [isPaused, goNext]);

  const currentSlideData = heroSlides[currentSlide];

  return (
    <header
      className="h-[55vh] sm:h-[65vh] md:h-[60vh] xl:h-[55vh] bg-cover bg-center bg-no-repeat text-white flex flex-col items-center justify-center text-center px-4 sm:px-6 md:p-8 bg-hero-gradient relative overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background parallax overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-blue-700/10"
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.8, 1, 0.8]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Hero background image with crossfade animation */}
      <AnimatePresence mode="wait">
        <motion.img
          key={currentSlideData.id}
          src={currentSlideData.backgroundImage}
          alt={currentSlideData.title}
          className="absolute inset-0 w-full h-full object-cover z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        />
      </AnimatePresence>

      {/* Decorative floating shapes */}
      <motion.div
        className="hidden md:block absolute top-[10%] left-[5%] w-32 h-32 rounded-full border-2 border-blue-600/20"
        variants={floatingCircle1Variants}
        animate="animate"
      />
      <motion.div
        className="hidden md:block absolute top-[60%] left-[8%] w-16 h-16 rounded-full bg-gradient-to-br from-blue-400/20 to-blue-500/20 blur-sm"
        variants={floatingCircle2Variants}
        animate="animate"
      />
      <motion.div
        className="hidden md:block absolute bottom-[15%] left-[12%] w-24 h-[2px] bg-gradient-to-r from-blue-500/40 to-transparent"
        variants={floatingLine1Variants}
        animate="animate"
      />
      <motion.div
        className="hidden md:block absolute top-[25%] right-[10%] w-20 h-[2px] bg-gradient-to-l from-blue-500/40 to-transparent"
        variants={floatingLine2Variants}
        animate="animate"
      />
      <motion.div
        className="hidden md:block absolute top-[40%] right-[5%] w-10 h-10 rounded-full border border-white/10"
        variants={floatingCircle3Variants}
        animate="animate"
      />
      <motion.div
        className="hidden md:block absolute bottom-[30%] right-[15%] w-14 h-14 rounded-full bg-blue-500/10 blur-md"
        variants={floatingCircle1Variants}
        animate="animate"
        style={{ transitionDelay: '3s' }}
      />

      {/* Carousel Navigation Arrows */}
      <button
        onClick={goPrev}
        className="absolute left-3 right-auto md:left-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 md:w-12 md:h-12 min-w-[44px] min-h-[44px] rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center cursor-pointer hover:bg-white/20 transition-all duration-300"
        aria-label="Previous slide"
      >
        <i className="fas fa-chevron-left text-white text-sm md:text-base"></i>
      </button>
      <button
        onClick={goNext}
        className="absolute right-3 left-auto md:right-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 md:w-12 md:h-12 min-w-[44px] min-h-[44px] rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center cursor-pointer hover:bg-white/20 transition-all duration-300"
        aria-label="Next slide"
      >
        <i className="fas fa-chevron-right text-white text-sm md:text-base"></i>
      </button>

      {/* Content with AnimatePresence for crossfade */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlideData.id}
          className="w-full max-w-full px-2 sm:px-4 relative z-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          {currentSlideData.tagline && (
            <motion.p
              className="text-xs sm:text-sm md:text-base font-semibold text-white/90 mb-3 sm:mb-4 uppercase tracking-wider sm:tracking-widest"
              variants={itemVariants}
            >
              {currentSlideData.tagline}
            </motion.p>
          )}
          <motion.h1
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 sm:mb-6 tracking-tight"
            variants={itemVariants}
          >
            {currentSlideData.title}
          </motion.h1>
          <motion.p
            className="text-sm sm:text-base md:text-lg font-medium leading-relaxed mb-6 sm:mb-8 px-0 sm:px-2"
            variants={itemVariants}
          >
            {currentSlideData.description}
          </motion.p>
          <motion.div
            className="flex gap-3 sm:gap-4 justify-center flex-wrap"
            variants={containerVariants}
          >
            <motion.button
              className="w-full sm:w-auto px-6 sm:px-7 py-3 sm:py-3.5 text-sm sm:text-base font-semibold rounded-md bg-blue-600 hover:bg-blue-700 transition-all duration-200 cursor-pointer border-none"
              variants={buttonVariants}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              {currentSlideData.ctaPrimary}
            </motion.button>
            <motion.button
              className="w-full sm:w-auto px-6 sm:px-7 py-3 sm:py-3.5 text-sm sm:text-base font-semibold rounded-md bg-transparent text-white border-2 border-white/60 hover:bg-white/10 hover:border-white transition-all duration-200 cursor-pointer"
              variants={buttonVariants}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              {currentSlideData.ctaSecondary}
            </motion.button>
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation dots/indicators */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2 sm:gap-3">
        {heroSlides.map((slide, index) => (
          <button
            key={slide.id}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 md:w-4 md:h-4 rounded-full cursor-pointer transition-all duration-300 ${index === currentSlide
              ? 'bg-blue-500 w-6 sm:w-8'
              : 'bg-white/40 hover:bg-white/60'
              }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </header>
  );
}