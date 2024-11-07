import "@/assets/styles/globals.css"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import AuthProvider from "./components/AuthProvider"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

export const metadata = {
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
			<html>
				<body className={"min-h-screen flex flex-col"}>
					<Navbar />
					<main>{children}</main>
					<Footer />
					<ToastContainer />
				</body>
			</html>
		</AuthProvider>
	)
}

export default Layout
