import "@/assets/styles/globals.css"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Script from "next/script"
import { Outfit } from "next/font/google"
import type { Metadata } from "next"

const outfit = Outfit({
	subsets: ["latin"],
	variable: "--font-display",
	weight: ["400", "500", "600", "700", "800"],
	display: "swap",
})

export const metadata: Metadata = {
	title: {
		default:
			"Rentista — Furnished Apartments in Mexico City, No Fiador Required",
		template: "%s | Rentista",
	},
	description:
		"Furnished medium-term rentals in CDMX for digital nomads, remote workers and expats. Flexible 30-day terms, no fiador, no poliza. Roma Norte, Condesa, Polanco.",
	keywords: [
		"furnished apartments Mexico City no fiador",
		"medium term rental CDMX digital nomad",
		"rent Mexico City without fiador",
		"furnished apartment Roma Norte monthly",
		"furnished apartment Condesa monthly",
		"furnished apartment Polanco monthly",
		"CDMX expat rental",
		"Mexico City remote work apartment",
	],
	openGraph: {
		title:
			"Rentista — Furnished Apartments in Mexico City, No Fiador Required",
		description:
			"Furnished medium-term rentals in CDMX for digital nomads, remote workers and expats. No fiador. No poliza.",
		siteName: "Rentista",
		locale: "en_US",
		type: "website",
	},
}

interface Props {
	children: React.ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {
	const GAID = process.env.NEXT_PUBLIC_GA_TRACKING_ID || ""

	return (
		<html
			lang="en"
			className={outfit.variable}
			style={
				{
					"--font-body": "var(--font-display)",
				} as React.CSSProperties
			}
		>
			<body className="min-h-screen flex flex-col bg-white text-ink antialiased">
				<Navbar />
				<main className="flex-1">{children}</main>
				<Footer />
			</body>

			{GAID && (
				<>
					<Script
						src={`https://www.googletagmanager.com/gtag/js?id=${GAID}`}
						strategy="afterInteractive"
					/>
					<Script
						id="google-analytics"
						strategy="afterInteractive"
						dangerouslySetInnerHTML={{
							__html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GAID}');
              `,
						}}
					/>
				</>
			)}
		</html>
	)
}

export default Layout
