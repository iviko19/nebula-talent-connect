import { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';
import type { Engine } from 'tsparticles-engine';

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
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <div className="particles-container">
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
              value: ['#4F46E5', '#7C3AED', '#0EA5E9', '#E2E8F0'],
            },
            links: {
              color: '#4F46E5',
              distance: 120,
              enable: true,
              opacity: 0.15,
              width: 0.8,
            },
            collisions: {
              enable: false,
            },
            move: {
              direction: 'none',
              enable: true,
              outModes: {
                default: 'out',
              },
              random: true,
              speed: 0.3,
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
              value: 0.3,
              random: {
                enable: true,
                minimumValue: 0.05,
              },
              animation: {
                enable: true,
                speed: 0.5,
                minimumValue: 0.05,
                sync: false,
              },
            },
            shape: {
              type: ['circle', 'triangle'],
            },
            size: {
              value: { min: 0.5, max: 3 },
              animation: {
                enable: true,
                speed: 1,
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