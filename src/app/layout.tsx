import "@/assets/styles/globals.css"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import AuthProvider from "./components/AuthProvider"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { Metadata } from "next"

export const metadata: Metadata = {
	title: "Buenos Aires Rentals",
	keywords: "rental, property, buenos Aires, real estate",
	description: "find the perfect long term rental property",
}

interface Props {
	children: React.ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {
	return (
		<AuthProvider>
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
