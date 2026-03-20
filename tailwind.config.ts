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
				display: ["var(--font-display)", "system-ui", "sans-serif"],
				sans: ["var(--font-body)", "system-ui", "sans-serif"],
			},
			colors: {
				// Belong-inspired clean palette
				sand: "#FFFFFF",          // pure white backgrounds
				stone: "#F8FAFC",         // subtle off-white for alternating sections
				clay: {
					DEFAULT: "#E55B2E",   // brand coral — confident, warm
					dark: "#C4401A",
					light: "#F4916F",
				},
				forest: {
					DEFAULT: "#059669",   // emerald — available / trust signals
					dark: "#047857",
					light: "#6EE7B7",
				},
				ink: "#0F172A",           // near-black text
				smoke: "#64748B",         // secondary text
				ash: "#94A3B8",           // placeholder / tertiary text
				border: "#E2E8F0",        // light border
			},
			gridTemplateColumns: {
				"70/30": "70% 28%",
			},
			borderRadius: {
				pill: "9999px",
			},
		},
	},
	plugins: [],
}
export default config
