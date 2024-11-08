import "@/assets/styles/globals.css"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import AuthProvider from "./components/AuthProvider"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { Metadata } from "next"
import Script from "next/script"

export const metadata: Metadata = {
	title: "Buenos Aires Rentals",
	keywords: "rental, property, buenos Aires, real estate",
	description: "find the perfect long term rental property",
}

interface Props {
	children: React.ReactNode
}

const GA_TRACKING_ID = "G-62WC2FS3TV" // Your Google Analytics ID

const Layout: React.FC<Props> = ({ children }) => {
	return (
		<AuthProvider>
			{/* Google Analytics Script */}
			{process.env.NODE_ENV === "production" && (
				<>
					<Script
						src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
						strategy="afterInteractive"
					/>
					<Script id="google-analytics" strategy="afterInteractive">
						{`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_TRACKING_ID}');
            `}
					</Script>
				</>
			)}

			{/* Custom font */}
			<link href="https://fonts.cdnfonts.com/css/mona-sans" rel="stylesheet" />

			<div className="min-h-screen flex flex-col">
				<Navbar />
				<main className="flex-grow">{children}</main>
				<Footer />
				<ToastContainer />
			</div>
		</AuthProvider>
	)
}

export default Layout
