import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface TypingAnimationProps {
  text: string;
  className?: string;
  typingSpeed?: number;
  initialDelay?: number;
}

const TypingAnimation = ({ 
  text, 
  className = '', 
  typingSpeed = 80,
  initialDelay = 800
}: TypingAnimationProps) => {
  const [displayText, setDisplayText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [isTyping, setIsTyping] = useState(false);
  const [showInitialDots, setShowInitialDots] = useState(true);

  useEffect(() => {
    // Initial delay with blinking cursor and dots
    const initialTimer = setTimeout(() => {
      setShowInitialDots(false);
      setIsTyping(true);
      
      // Start typing animation
      let currentIndex = 0;
      const typingTimer = setInterval(() => {
        if (currentIndex < text.length) {
          setDisplayText(text.slice(0, currentIndex + 1));
          currentIndex++;
        } else {
          clearInterval(typingTimer);
          setIsTyping(false);
          // Hide cursor after typing is complete
          setTimeout(() => setShowCursor(false), 500);
        }
      }, typingSpeed);

      return () => clearInterval(typingTimer);
    }, initialDelay);

    return () => clearTimeout(initialTimer);
  }, [text, typingSpeed, initialDelay]);

  return (
    <span className={className}>
      {showInitialDots ? (
        <span className="flex items-center">
          <span className="mr-1">...</span>
          <motion.span
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
            className="text-primary"
          >
            |
          </motion.span>
        </span>
      ) : (
        <>
          {displayText}
          {showCursor && (
            <motion.span
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 0.8, repeat: Infinity }}
              className="text-primary ml-1"
            >
              |
            </motion.span>
          )}
        </>
      )}
    </span>
  );
};

export default TypingAnimation;