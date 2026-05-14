import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { servicesData } from '../../data/content/servicesData';

const cardVariants = {
  hidden: (direction) => ({
    opacity: 0,
    x: direction === 'left' ? -50 : 50,
    y: 50,
  }),
  visible: (i) => ({
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
};

const cardHoverVariants = {
  rest: {
    scale: 1,
    boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
  },
  hover: {
    scale: 1.05,
    boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
    transition: { duration: 0.3, ease: 'easeOut' },
  },
};

const iconVariants = {
  rest: { scale: 1, rotate: 0 },
  hover: {
    scale: 1.2,
    rotate: [0, -10, 10, -10, 10, 0],
    transition: { duration: 0.5, ease: 'easeInOut' },
  },
};

const overlayVariants = {
  rest: { opacity: 0.3 },
  hover: { opacity: 0.5, transition: { duration: 0.3 } },
};

function HighlightCard({ image, imageAlt, title, description, index }) {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: '-50px' });

  // Alternate slide direction for visual interest
  const direction = index % 2 === 0 ? 'left' : 'right';

  // Parallax effect using motion values (disabled on touch devices)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 100, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 100, damping: 30 });

  const handleMouseMove = (e) => {
    // Only apply parallax on non-touch devices
    if (window.matchMedia('(hover: hover)').matches) {
      const rect = e.currentTarget.getBoundingClientRect();
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      mouseX.set((e.clientX - rect.left - centerX) / 20);
      mouseY.set((e.clientY - rect.top - centerY) / 20);
    }
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      custom={index}
      variants={cardVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      className="h-full"
    >
      <motion.div
        className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl p-5 sm:p-6 border-2 border-blue-200 hover:border-blue-400 shadow-md hover:shadow-xl relative overflow-hidden min-h-[380px] sm:min-h-[400px] flex flex-col cursor-pointer transition-all duration-300 w-full"
        variants={cardHoverVariants}
        initial="rest"
        whileHover="hover"
      >
        {/* Gradient overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-blue-100/40 to-blue-200/30 pointer-events-none"
          variants={overlayVariants}
          initial="rest"
          whileHover="hover"
        />

        {/* Image wrapper with overflow-hidden */}
        <div className="relative overflow-hidden rounded-lg mb-3 md:mb-4 w-full min-w-0">
          <motion.img
            src={image}
            alt={imageAlt}
            className="w-full aspect-video object-cover rounded-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, delay: 0.2 + index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            whileHover={{ scale: 1.1, transition: { duration: 0.4, ease: 'easeOut' } }}
          />
        </div>

        <div className="text-center relative z-10 flex-grow flex flex-col justify-center min-w-0">
          <motion.div
            variants={iconVariants}
            initial="rest"
            whileHover="hover"
            className="inline-block mb-2 md:mb-3"
          >
            <h3 className="text-base md:text-lg font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-700 line-clamp-2">
              {title}
            </h3>
          </motion.div>
          <p className="text-sm font-semibold text-gray-700 leading-relaxed line-clamp-3">{description}</p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function HighlightCards() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-50px' });

  return (
    <motion.section
      ref={sectionRef}
      className="py-10 md:py-16 px-4 sm:px-6 md:px-8 bg-gradient-to-br from-white to-blue-50/30 overflow-hidden min-w-0"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container-responsive">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 min-w-0">
          {servicesData.map((service, index) => (
            <Link
              to={`/service/${service.id}`}
              key={service.id}
              className="block w-full min-w-0 h-full"
            >
              <HighlightCard {...service} index={index} />
            </Link>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
