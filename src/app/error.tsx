"use client"
import Link from "next/link"
import { AlertCircle } from "lucide-react"
import { FC } from "react"

type ErrorPageProps = {
	error: Error
}
const ErrorPage: FC<ErrorPageProps> = ({ error }) => {
	return (
		<section className="bg-stone min-h-screen flex-grow">
			<div className="container m-auto max-w-2xl py-24">
				<div className="bg-white px-6 py-24 mb-4 shadow-sm rounded-2xl border border-border m-4 md:m-0">
					<div className="flex justify-center">
						<AlertCircle className="text-clay w-16 h-16" />
					</div>
					<div className="text-center">
						<h1 className="text-3xl font-bold mt-4 mb-2 text-ink">
							Something went wrong
						</h1>
						<p className="text-smoke text-xl mb-10">{error.toString()}</p>
						<Link href="/" className="btn-primary">
							Go Home
						</Link>
					</div>
				</div>
			</div>
		</section>
	)
}

export default ErrorPage
