import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface CounterAnimationProps {
  end: number;
  duration?: number;
  suffix?: string;
  className?: string;
}

const CounterAnimation = ({ 
  end, 
  duration = 2000, 
  suffix = '', 
  className = '' 
}: CounterAnimationProps) => {
  const [current, setCurrent] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    const startTime = Date.now();
    const endTime = startTime + duration;

    const updateCounter = () => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const value = Math.floor(easeOutQuart * end);
      
      setCurrent(value);

      if (now < endTime) {
        requestAnimationFrame(updateCounter);
      } else {
        setCurrent(end);
      }
    };

    updateCounter();
  }, [end, duration, isInView]);

  return (
    <motion.span
      ref={ref}
      className={`font-cosmic font-bold text-glow ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
    >
      {current.toLocaleString()}{suffix}
    </motion.span>
  );
};

export default CounterAnimation;