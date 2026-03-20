import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { neighborhoods } from "@/src/lib/neighborhoods"
import { listings } from "@/src/lib/listings"
import ListingCard from "../components/ListingCard"
import type { Metadata } from "next"

export const metadata: Metadata = {
	title: "Neighborhoods — Roma Norte, Condesa & Polanco | Mexico City",
	description:
		"Honest guides to Roma Norte, La Condesa, and Polanco for foreign professionals moving to Mexico City.",
}

const NeighborhoodsPage = () => {
	return (
		<div className="bg-white min-h-screen">
			{/* Header */}
			<section className="bg-stone border-b border-border py-16">
				<div className="max-w-6xl mx-auto px-4 sm:px-6">
					<p className="text-xs font-semibold text-clay uppercase tracking-widest mb-2">
						Where to Live
					</p>
					<h1 className="text-5xl font-extrabold text-ink mb-4">
						Neighborhood guides
					</h1>
					<p className="text-smoke max-w-xl leading-relaxed">
						Three neighborhoods that work well for foreign
						professionals. All walkable, all with strong rental
						markets — each with a distinct feel.
					</p>
				</div>
			</section>

			{/* Neighborhood sections */}
			{neighborhoods.map((hood, i) => {
				const neighborhoodListings = listings.filter(
					(l) => l.neighborhood === hood.name
				)
				return (
					<section
						key={hood.slug}
						className={`py-16 ${i % 2 === 0 ? "bg-white" : "bg-stone"} border-b border-border`}
					>
						<div className="max-w-6xl mx-auto px-4 sm:px-6">
							<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
								<div className={i % 2 === 1 ? "lg:order-2" : ""}>
									<div className="relative aspect-[3/2] rounded-2xl overflow-hidden shadow-lg">
										<Image
											src={hood.image}
											alt={hood.name}
											fill
											className="object-cover"
										/>
									</div>
								</div>

								<div className={i % 2 === 1 ? "lg:order-1" : ""}>
									<p className="text-xs font-semibold text-clay uppercase tracking-widest mb-2">
										{hood.priceRange}
									</p>
									<h2 className="text-4xl font-extrabold text-ink mb-1">
										{hood.name}
									</h2>
									<p className="text-smoke text-sm italic mb-5">
										{hood.tagline}
									</p>
									<p className="text-sm text-smoke leading-relaxed mb-6">
										{hood.description}
									</p>

									<div className="grid grid-cols-2 gap-3 mb-6">
										<div className="bg-white rounded-2xl p-4 border border-border">
											<p className="text-xs text-ash mb-1">Walkability</p>
											<p className="text-sm font-semibold text-ink">
												{hood.walkability}
											</p>
										</div>
										<div className="bg-white rounded-2xl p-4 border border-border">
											<p className="text-xs text-ash mb-1">Noise level</p>
											<p className="text-sm font-semibold text-ink">
												{hood.quietRating}
											</p>
										</div>
									</div>

									<div className="mb-5">
										<p className="text-xs font-semibold text-smoke uppercase tracking-widest mb-2">
											Best for
										</p>
										<div className="flex flex-wrap gap-2">
											{hood.bestFor.map((tag) => (
												<span
													key={tag}
													className="text-xs px-3 py-1 bg-stone border border-border rounded-full text-smoke"
												>
													{tag}
												</span>
											))}
										</div>
									</div>

									<div className="bg-forest/5 border border-forest/20 rounded-2xl p-4 mb-5">
										<p className="text-xs font-semibold text-forest mb-2">
											Notes for nomads
										</p>
										<p className="text-xs text-smoke leading-relaxed">
											{hood.notesForNomads}
										</p>
									</div>

									{neighborhoodListings.length > 0 && (
										<div>
											<p className="text-xs font-semibold text-smoke uppercase tracking-widest mb-3">
												Our listings in {hood.name}
											</p>
											<div className="space-y-2">
												{neighborhoodListings.map((listing) => (
													<Link
														key={listing.slug}
														href={`/listings/${listing.slug}`}
														className="flex items-center justify-between bg-white border border-border rounded-xl px-4 py-3 hover:border-clay transition-colors group"
													>
														<div>
															<p className="text-sm font-semibold text-ink group-hover:text-clay transition-colors">
																{listing.title}
															</p>
															<p className="text-xs text-smoke">
																$
																{listing.price.toLocaleString()}
																/mo ·{" "}
																{listing.available
																	? "Available now"
																	: `Available ${listing.availableDate}`}
															</p>
														</div>
														<ArrowRight
															size={14}
															className="text-ash group-hover:text-clay transition-colors"
														/>
													</Link>
												))}
											</div>
										</div>
									)}
								</div>
							</div>
						</div>
					</section>
				)
			})}

			{/* Comparison table */}
			<section className="py-16 bg-stone border-b border-border">
				<div className="max-w-6xl mx-auto px-4 sm:px-6">
					<h2 className="text-3xl font-extrabold text-ink mb-8">
						Quick comparison
					</h2>
					<div className="overflow-x-auto">
						<table className="w-full text-sm bg-white rounded-2xl border border-border overflow-hidden">
							<thead>
								<tr className="border-b border-border bg-stone">
									<th className="text-left py-4 px-5 text-xs font-semibold text-smoke uppercase tracking-widest">
										&nbsp;
									</th>
									{neighborhoods.map((n) => (
										<th
											key={n.slug}
											className="text-left py-4 px-5 font-bold text-ink"
										>
											{n.name}
										</th>
									))}
								</tr>
							</thead>
							<tbody className="divide-y divide-border">
								{[
									{
										label: "Price range",
										values: neighborhoods.map((n) => n.priceRange),
									},
									{
										label: "Noise level",
										values: neighborhoods.map((n) => n.quietRating),
									},
									{
										label: "Walkability",
										values: ["Excellent", "Excellent", "Good"],
									},
									{
										label: "Nomad cafes",
										values: ["Many", "Several", "Fewer"],
									},
									{
										label: "International residents",
										values: ["High", "High", "Very High"],
									},
									{
										label: "Vibe",
										values: ["Creative, busy", "Residential, leafy", "Polished, quiet"],
									},
								].map(({ label, values }) => (
									<tr key={label} className="hover:bg-stone/50">
										<td className="py-3.5 px-5 text-smoke text-xs font-medium">
											{label}
										</td>
										{values.map((val, i) => (
											<td key={i} className="py-3.5 px-5 text-ink">
												{val}
											</td>
										))}
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</div>
			</section>

			{/* CTA */}
			<section className="py-16 bg-white">
				<div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
					<h2 className="text-3xl font-extrabold text-ink mb-3">
						Ready to find your apartment?
					</h2>
					<p className="text-smoke mb-8 max-w-lg mx-auto">
						Browse current listings across all three neighborhoods.
						No fiador required.
					</p>
					<div className="flex flex-col sm:flex-row gap-3 justify-center mb-12">
						<Link
							href="/listings"
							className="inline-flex items-center justify-center gap-2 bg-clay text-white px-7 py-3.5 rounded-full text-sm font-semibold hover:bg-clay-dark transition-colors"
						>
							Browse Listings <ArrowRight size={15} />
						</Link>
						<Link
							href="/how-it-works"
							className="inline-flex items-center justify-center border-2 border-border text-ink px-7 py-3.5 rounded-full text-sm font-semibold hover:border-ink transition-colors"
						>
							How It Works
						</Link>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto text-left">
						{listings.map((l) => (
							<ListingCard key={l.slug} listing={l} />
						))}
					</div>
				</div>
			</section>
		</div>
	)
}

export default NeighborhoodsPage
