import "@/assets/styles/globals.css"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import AuthProvider from "./components/AuthProvider"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import Script from "next/script"

export const metadata = {
	title: "Buenos Aires Rentals",
	keywords: "rental, property, buenos Aires, real estate",
	description: "find the perfect long term rental property",
}

interface Props {
	children: React.ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {
	const GAID = process.env.NEXT_PUBLIC_GA_TRACKING_ID || ""

	return (
		<AuthProvider>
			<html>
				<head>
					<link
						href="https://fonts.cdnfonts.com/css/mona-sans"
						rel="stylesheet"
					/>
				</head>
				<body className={"min-h-screen flex flex-col"}>
					<Navbar />
					<main>{children}</main>
					<Footer />
					<ToastContainer />
				</body>

				{/* Google Analytics Script */}
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
		</AuthProvider>
	)
}

export default Layout
