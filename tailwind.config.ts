import type { Config } from 'tailwindcss'

const config: Config = {
	darkMode: ['selector', '[data-theme="dark"]'],
	content: ['./src/**/*.{js,ts,jsx,tsx}'],
}

export default config
