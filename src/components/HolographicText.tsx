import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface HolographicTextProps {
  text: string;
  className?: string;
}

const HolographicText = ({ text, className = '' }: HolographicTextProps) => {
  const textRef = useRef<HTMLDivElement>(null);
  const scanLineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const textElement = textRef.current;
    const scanLine = scanLineRef.current;
    
    if (!textElement || !scanLine) return;

    // Initial glitch effect
    const glitchTl = gsap.timeline({ repeat: -1, repeatDelay: 3 });
    
    glitchTl
      .to(textElement, {
        duration: 0.1,
        skewX: 10,
        ease: "power2.inOut"
      })
      .to(textElement, {
        duration: 0.04,
        skewX: 0,
        opacity: 0.8,
        ease: "power2.inOut"
      })
      .to(textElement, {
        duration: 0.04,
        opacity: 1,
        ease: "power2.inOut"
      })
      .to(textElement, {
        duration: 0.1,
        skewX: -5,
        ease: "power2.inOut"
      })
      .to(textElement, {
        duration: 0.04,
        skewX: 0,
        ease: "power2.inOut"
      });

    // Continuous scanning effect
    const scanTl = gsap.timeline({ repeat: -1, repeatDelay: 2 });
    
    scanTl
      .set(scanLine, { left: '-100%', opacity: 0 })
      .to(scanLine, {
        duration: 1.5,
        left: '100%',
        opacity: 1,
        ease: "power2.out"
      })
      .to(scanLine, {
        duration: 0.2,
        opacity: 0,
        ease: "power2.out"
      });

    return () => {
      glitchTl.kill();
      scanTl.kill();
    };
  }, []);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div
        ref={textRef}
        className="relative z-10 bg-gradient-nebula bg-clip-text text-transparent text-glow-lg"
        style={{
          filter: 'drop-shadow(0 0 10px hsl(var(--primary) / 0.5))',
        }}
      >
        {text}
      </div>
      
      {/* Holographic scan line */}
      <div
        ref={scanLineRef}
        className="absolute top-0 w-1 h-full bg-gradient-to-b from-transparent via-primary to-transparent opacity-0 z-20"
        style={{
          boxShadow: '0 0 20px hsl(var(--primary))',
        }}
      />
      
      {/* Glitch layers */}
      <div 
        className="absolute inset-0 bg-gradient-nebula bg-clip-text text-transparent opacity-20 z-0"
        style={{
          transform: 'translate(-2px, 1px)',
          filter: 'hue-rotate(180deg)',
        }}
      >
        {text}
      </div>
      <div 
        className="absolute inset-0 bg-gradient-nebula bg-clip-text text-transparent opacity-20 z-0"
        style={{
          transform: 'translate(2px, -1px)',
          filter: 'hue-rotate(90deg)',
        }}
      >
        {text}
      </div>
    </div>
  );
};

export default HolographicText;