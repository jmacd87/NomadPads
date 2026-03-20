import { listings } from "@/src/lib/listings"
import ListingCard from "../components/ListingCard"
import type { Metadata } from "next"

export const metadata: Metadata = {
	title: "Furnished Apartments in Mexico City — No Fiador Required",
	description:
		"Browse furnished apartments in Roma Norte, Condesa, and Polanco. Flexible 30-day minimum terms, no fiador required, international credit accepted.",
}

const ListingsPage = () => {
	const available = listings.filter((l) => l.available)
	const comingSoon = listings.filter((l) => !l.available)

	return (
		<div className="bg-white min-h-screen">
			{/* Header */}
			<section className="bg-stone border-b border-border py-16">
				<div className="max-w-6xl mx-auto px-4 sm:px-6">
					<p className="text-xs font-semibold text-clay uppercase tracking-widest mb-2">
						Mexico City · CDMX
					</p>
					<h1 className="text-5xl font-extrabold text-ink mb-4">
						Current Listings
					</h1>
					<p className="text-smoke max-w-xl leading-relaxed">
						All apartments are fully furnished and available on
						30-day minimum rolling terms. No fiador required.
						International credit accepted.
					</p>
				</div>
			</section>

			<div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
				{/* What's included */}
				<div className="bg-stone border border-border rounded-2xl px-6 py-5 mb-10 flex flex-wrap gap-x-8 gap-y-2 text-sm text-smoke">
					{[
						"Dedicated desk & chair",
						"Full kitchen with essentials",
						"Linens & towels included",
						"Fast symmetric wifi",
						"A/C in all units",
						"Washing machine",
					].map((item) => (
						<span key={item} className="flex items-center gap-2">
							<span className="w-1.5 h-1.5 bg-clay rounded-full flex-shrink-0" />
							{item}
						</span>
					))}
				</div>

				{/* Available now */}
				{available.length > 0 && (
					<div className="mb-14">
						<h2 className="font-bold text-ink text-sm mb-6 flex items-center gap-2">
							<span className="w-2.5 h-2.5 bg-forest rounded-full" />
							Available now
						</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
							{available.map((listing) => (
								<ListingCard
									key={listing.slug}
									listing={listing}
								/>
							))}
						</div>
					</div>
				)}

				{/* Coming soon */}
				{comingSoon.length > 0 && (
					<div className="mb-14">
						<h2 className="font-bold text-ink text-sm mb-6 flex items-center gap-2">
							<span className="w-2.5 h-2.5 bg-ash rounded-full" />
							Coming soon
						</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 opacity-70">
							{comingSoon.map((listing) => (
								<ListingCard
									key={listing.slug}
									listing={listing}
								/>
							))}
						</div>
					</div>
				)}

				{/* Screening */}
				<div className="bg-stone border border-border rounded-2xl p-8 mb-10">
					<h3 className="font-bold text-ink mb-5 text-sm uppercase tracking-widest text-smoke">
						Our screening process at a glance
					</h3>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
						<div>
							<p className="font-bold text-ink mb-2">
								What we check
							</p>
							<ul className="space-y-1.5 text-smoke">
								<li className="flex items-center gap-2">
									<span className="text-forest font-bold">
										✓
									</span>{" "}
									US or international credit score
								</li>
								<li className="flex items-center gap-2">
									<span className="text-forest font-bold">
										✓
									</span>{" "}
									Income ≥ 3× monthly rent
								</li>
								<li className="flex items-center gap-2">
									<span className="text-forest font-bold">
										✓
									</span>{" "}
									Rental history / references
								</li>
							</ul>
						</div>
						<div>
							<p className="font-bold text-ink mb-2">
								Never required
							</p>
							<ul className="space-y-1.5 text-smoke">
								<li className="flex items-center gap-2">
									<span className="text-clay font-bold">
										×
									</span>{" "}
									Fiador or Mexican guarantor
								</li>
								<li className="flex items-center gap-2">
									<span className="text-clay font-bold">
										×
									</span>{" "}
									Póliza de arrendamiento
								</li>
								<li className="flex items-center gap-2">
									<span className="text-clay font-bold">
										×
									</span>{" "}
									Mexican bank account
								</li>
							</ul>
						</div>
						<div>
							<p className="font-bold text-ink mb-2">
								Payment methods
							</p>
							<ul className="space-y-1.5 text-smoke">
								<li>USD wire transfer</li>
								<li>Wise / Revolut</li>
								<li>ACH / international bank transfer</li>
								<li>Mexican SPEI transfer</li>
							</ul>
						</div>
					</div>
				</div>

				{/* WhatsApp CTA */}
				<div className="bg-ink rounded-2xl p-8 flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
					<div>
						<h3 className="text-2xl font-extrabold text-white mb-1">
							Don&apos;t see what you need?
						</h3>
						<p className="text-sm text-white/60">
							We add new properties regularly. Message us on
							WhatsApp with your requirements and move-in date.
						</p>
					</div>
					<a
						href="https://wa.me/5215500000000"
						target="_blank"
						rel="noopener noreferrer"
						className="flex-shrink-0 bg-clay text-white text-sm font-semibold px-6 py-3 rounded-full hover:bg-clay-dark transition-colors"
					>
						Message on WhatsApp
					</a>
				</div>
			</div>
		</div>
	)
}

export default ListingsPage
