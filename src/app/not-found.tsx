import Link from "next/link"
import { AlertTriangle } from "lucide-react"

const NotFound = () => {
	return (
		<section className="bg-stone min-h-screen flex-grow">
			<div className="container m-auto max-w-2xl py-24">
				<div className="bg-white px-6 py-24 mb-4 shadow-sm rounded-2xl border border-border m-4 md:m-0">
					<div className="flex justify-center">
						<AlertTriangle className="text-clay w-16 h-16" />
					</div>
					<div className="text-center">
						<h1 className="text-3xl font-bold mt-4 mb-2 text-ink">Page Not Found</h1>
						<p className="text-smoke text-xl mb-10">
							The page you are looking for does not exist.
						</p>
						<Link href="/" className="btn-primary">
							Go Home
						</Link>
					</div>
				</div>
			</div>
		</section>
	)
}

export default NotFound
