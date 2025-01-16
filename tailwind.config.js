// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     './src/**/*.{js,jsx,ts,tsx}',  // Ensure paths include your React files
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }
/** @type {import('tailwindcss').Config} */
export default {
	darkMode: "class",
	content: [
		"./index.html",
		"./src/**/*.{ts,tsx,js,jsx}",
	],
	theme: {
		extend: {
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
			},
			colors: {
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				card: {
					DEFAULT: 'hsl(var(--card))',
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				chart: {
					1: 'hsl(var(--chart-1))',
					2: 'hsl(var(--chart-2))',
					3: 'hsl(var(--chart-3))',
				},
			},
			spacing: {
				18: '4.5rem',
				22: '5.5rem',
			},
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
				mono: ['Fira Code', 'monospace'],
			},
			animation: {
				fadeIn: 'fadeIn 0.5s ease-in-out',
				slideIn: 'slideIn 0.5s ease-in-out',
				moveLogos: 'moveLogos 15s linear infinite',
				hoverZigzag: 'hoverZigzag 2s ease-in-out infinite',
			},
			keyframes: {
				fadeIn: {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' },
				},
				slideIn: {
					'0%': { transform: 'translateX(-100%)' },
					'100%': { transform: 'translateX(0)' },
				},
				moveLogos: {
					'0%': { transform: 'translateX(100%)' },
					'100%': { transform: 'translateX(-100%)' },
				},
				hoverZigzag: {
					'0%, 100%': { transform: 'translateY(0)' },
					'20%': { transform: 'translateY(-10px)' },
					'40%': { transform: 'translateY(10px)' },
					'60%': { transform: 'translateY(-10px)' },
					'80%': { transform: 'translateY(10px)' },
				},
			},
		},
	},
	
};
