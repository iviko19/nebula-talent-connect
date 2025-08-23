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
				/* Company brand color palette */
				brand: {
					cream: {
						50: 'hsl(27 100% 98%)',
						100: 'hsl(27 100% 96%)',
						200: 'hsl(27 80% 92%)',
						300: 'hsl(27 60% 88%)',
						400: 'hsl(27 40% 85%)',
						500: 'hsl(27 30% 80%)'
					},
					orange: {
						400: 'hsl(19 65% 65%)',
						500: 'hsl(19 65% 59%)',
						600: 'hsl(19 65% 55%)',
						700: 'hsl(19 65% 50%)'
					},
					blue: {
						400: 'hsl(204 58% 50%)',
						500: 'hsl(204 58% 46%)',
						600: 'hsl(204 58% 40%)',
						700: 'hsl(204 58% 35%)'
					},
					navy: {
						700: 'hsl(213 46% 25%)',
						800: 'hsl(213 46% 22%)',
						900: 'hsl(213 46% 19%)',
						950: 'hsl(213 46% 15%)'
					}
				}
			},
			backgroundImage: {
				'gradient-cosmic': 'var(--gradient-cosmic)',
				'gradient-nebula': 'var(--gradient-nebula)',
				'gradient-glow': 'var(--gradient-glow)'
			},
			boxShadow: {
				'glow-sm': 'var(--glow-soft)',
				'glow': 'var(--glow-primary)',
				'glow-lg': 'var(--glow-accent)',
				'cosmic': '0 8px 32px hsl(19 65% 59% / 0.1)',
				'cosmic-hover': '0 12px 40px hsl(19 65% 59% / 0.2)'
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			fontFamily: {
				'sans': ['Tomorrow', 'sans-serif'],
				'cosmic': ['Tomorrow', 'sans-serif'],
				'nebula': ['Tomorrow', 'sans-serif']
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
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'float': 'float 3s ease-in-out infinite',
				'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
				'shimmer': 'shimmer 2s linear infinite',
				'fade-in': 'fade-in 0.3s ease-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
