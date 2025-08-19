import { useCallback, useEffect, useRef } from 'react';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';
import type { Engine } from 'tsparticles-engine';
import { gsap } from 'gsap';

interface ParticleBackgroundProps {
  id?: string;
  density?: number;
  interactive?: boolean;
}

const ParticleBackground = ({ 
  id = 'tsparticles', 
  density = 80,
  interactive = true 
}: ParticleBackgroundProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mousePos = useRef({ x: 0, y: 0 });

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { 
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1
      };
    };

    // Add parallax effect to container
    const handleMouseMoveParallax = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      
      const deltaX = (clientX - centerX) * 0.01;
      const deltaY = (clientY - centerY) * 0.01;
      
      gsap.to(container, {
        duration: 1,
        x: deltaX,
        y: deltaY,
        ease: "power2.out"
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousemove', handleMouseMoveParallax);

    // Data flow animation
    const animateDataFlow = () => {
      const particles = container.querySelectorAll('canvas');
      particles.forEach(canvas => {
        gsap.to(canvas, {
          duration: 2,
          opacity: Math.random() * 0.3 + 0.7,
          repeat: -1,
          yoyo: true,
          ease: "power2.inOut",
          delay: Math.random() * 2
        });
      });
    };

    const intervalId = setInterval(animateDataFlow, 3000);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousemove', handleMouseMoveParallax);
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div ref={containerRef} className="particles-container">
      <Particles
        id={id}
        init={particlesInit}
        options={{
          background: {
            opacity: 0,
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: interactive,
                mode: 'push',
              },
              onHover: {
                enable: interactive,
                mode: 'repulse',
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: ['#00D4FF', '#9D4EDD', '#FFFFFF'],
            },
            links: {
              color: '#00D4FF',
              distance: 150,
              enable: true,
              opacity: 0.2,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: 'none',
              enable: true,
              outModes: {
                default: 'bounce',
              },
              random: false,
              speed: 0.5,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: density,
            },
            opacity: {
              value: 0.6,
              random: {
                enable: true,
                minimumValue: 0.2,
              },
              animation: {
                enable: true,
                speed: 2,
                minimumValue: 0.2,
                sync: false,
              },
            },
            shape: {
              type: ['circle', 'triangle'],
            },
            size: {
              value: { min: 1, max: 5 },
              animation: {
                enable: true,
                speed: 2,
                minimumValue: 0.1,
                sync: false,
              },
            },
          },
          detectRetina: true,
        }}
      />
    </div>
  );
};

export default ParticleBackground;