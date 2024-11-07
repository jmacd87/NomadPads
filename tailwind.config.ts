import type { Config } from "tailwindcss"

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Poppins", "san-serif"],
				mono: ["Mona-Sans", "sans-serif"],
			},
			gridTemplateColumns: {
				"70/30": "70% 28%",
			},
			colors: {
				background: "var(--background)",
				foreground: "var(--foreground)",
			},
		},
	},
	plugins: [],
}
export default config
