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
              value: 0.5,
              random: {
                enable: true,
                minimumValue: 0.1,
              },
              animation: {
                enable: true,
                speed: 0.5,
                minimumValue: 0.1,
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
                speed: 0.8,
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