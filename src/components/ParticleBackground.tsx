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
                value: ['#00D4FF', '#AD5FDF', '#FF2E97', '#FFFFFF', '#E6F3FF'],
              },
              links: {
                color: '#00D4FF',
                distance: 120,
                enable: true,
                opacity: 0.15,
                width: 0.8,
                triangles: {
                  enable: true,
                  color: '#AD5FDF',
                  opacity: 0.05,
                },
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
                speed: 0.2,
                straight: false,
                drift: 0.1,
              },
              number: {
                density: {
                  enable: true,
                  area: 900,
                },
                value: density,
              },
              opacity: {
                value: { min: 0.1, max: 0.8 },
                random: {
                  enable: true,
                  minimumValue: 0.05,
                },
                animation: {
                  enable: true,
                  speed: 0.3,
                  minimumValue: 0.05,
                  sync: false,
                },
              },
              shape: {
                type: ['circle', 'star', 'polygon'],
                options: {
                  star: {
                    sides: 5,
                  },
                  polygon: {
                    sides: 6,
                  },
                },
              },
              size: {
                value: { min: 0.5, max: 3 },
                random: {
                  enable: true,
                  minimumValue: 0.2,
                },
                animation: {
                  enable: true,
                  speed: 0.4,
                  minimumValue: 0.2,
                  sync: false,
                },
              },
              twinkle: {
                particles: {
                  enable: true,
                  frequency: 0.05,
                  opacity: 1,
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