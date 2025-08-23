import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				/* Deep Space Color Palette */
				space: {
					50: 'hsl(210 50% 98%)',
					100: 'hsl(210 40% 95%)',
					200: 'hsl(210 35% 90%)',
					300: 'hsl(210 30% 80%)',
					400: 'hsl(215 25% 65%)',
					500: 'hsl(220 20% 50%)',
					600: 'hsl(225 30% 35%)',
					700: 'hsl(225 50% 25%)',
					800: 'hsl(225 70% 15%)',
					900: 'hsl(225 90% 8%)',
					950: 'hsl(225 95% 5%)'
				},
				stellar: {
					cyan: 'hsl(190 100% 60%)',      /* Electric starlight */
					purple: 'hsl(270 80% 60%)',     /* Nebula purple */
					magenta: 'hsl(320 100% 70%)',   /* Cosmic magenta */
					silver: 'hsl(210 50% 85%)',     /* Starlight silver */
					void: 'hsl(225 95% 5%)'         /* Deep space void */
				}
			},
			backgroundImage: {
				'gradient-cosmic': 'var(--gradient-cosmic)',
				'gradient-nebula': 'var(--gradient-nebula)',
				'gradient-stellar': 'var(--gradient-stellar)',
				'gradient-aurora': 'var(--gradient-aurora)'
			},
			boxShadow: {
				'glow-sm': 'var(--glow-soft)',
				'glow': 'var(--glow-primary)',
				'glow-lg': 'var(--glow-accent)',
				'glow-nebula': 'var(--glow-nebula)',
				'stellar': '0 12px 50px hsl(190 100% 60% / 0.2)',
				'stellar-hover': '0 20px 70px hsl(190 100% 60% / 0.3)',
				'cosmic': '0 8px 32px hsl(190 100% 60% / 0.15)',
				'cosmic-hover': '0 15px 50px hsl(190 100% 60% / 0.25)'
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			fontFamily: {
				'sans': ['Poppins', 'sans-serif'],
				'cosmic': ['Poppins', 'sans-serif'],
				'stellar': ['Poppins', 'sans-serif']
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'pulse-glow': {
					'0%, 100%': { 
						opacity: '1',
						boxShadow: 'var(--glow-soft)'
					},
					'50%': { 
						opacity: '0.8',
						boxShadow: 'var(--glow-primary)'
					}
				},
				'shimmer': {
					'0%': { backgroundPosition: '-200px 0' },
					'100%': { backgroundPosition: 'calc(200px + 100%) 0' }
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(10px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'twinkle': {
					'0%, 100%': { 
						opacity: '0.3',
						transform: 'scale(1)'
					},
					'50%': { 
						opacity: '1',
						transform: 'scale(1.2)'
					}
				},
				'cosmic-pulse': {
					'0%, 100%': { 
						opacity: '0.8',
						boxShadow: 'var(--glow-soft)'
					},
					'50%': { 
						opacity: '1',
						boxShadow: 'var(--glow-primary)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'float': 'float 3s ease-in-out infinite',
				'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
				'shimmer': 'shimmer 2s linear infinite',
				'fade-in': 'fade-in 0.3s ease-out',
				'twinkle': 'twinkle 4s ease-in-out infinite alternate',
				'cosmic-pulse': 'cosmic-pulse 3s ease-in-out infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
