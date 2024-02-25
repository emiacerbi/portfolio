/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				main: '#e5e5e5',
				accent: '#a78bfa'
			}, 
			screens: {
				'xs': '480px',
				'sm': '768px',
				'lg': '1024px',
				'xl': '1280px',
				'2xl': '1536px',
			  }
		},
	},
	plugins: [],
}
