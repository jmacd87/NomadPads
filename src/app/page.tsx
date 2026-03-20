import Link from "next/link"
import Image from "next/image"
import { ArrowRight, CheckCircle, XCircle } from "lucide-react"
import { listings } from "@/src/lib/listings"
import ListingCard from "./components/ListingCard"
import type { Metadata } from "next"

export const metadata: Metadata = {
	title: "Rentista — Furnished Apartments in Mexico City, No Fiador Required",
	description:
		"Furnished medium-term rentals in CDMX for digital nomads, remote workers and expats. Flexible 30-day terms, no fiador, no poliza. Roma Norte, Condesa, Polanco.",
}

const HomePage = () => {
	const featured = listings.filter((l) => l.featured).slice(0, 3)

	return (
		<div>
			{/* ── HERO ── */}
			<section className="bg-white py-20 lg:py-28">
				<div className="max-w-6xl mx-auto px-4 sm:px-6">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
						{/* Left */}
						<div>
							<div className="inline-flex items-center gap-2 bg-clay/10 text-clay text-xs font-semibold px-4 py-1.5 rounded-full mb-6">
								<span className="w-1.5 h-1.5 bg-clay rounded-full" />
								Mexico City · Furnished · Month-to-Month
							</div>

							<h1 className="text-5xl sm:text-6xl font-extrabold text-ink leading-[1.08] tracking-tight mb-6">
								Live in Mexico City.{" "}
								<span className="text-clay">No fiador.</span>{" "}
								No poliza.
							</h1>

							<p className="text-lg text-smoke leading-relaxed mb-8 max-w-lg">
								Furnished apartments on flexible 30-day terms —
								built for digital nomads, remote workers, and
								expats. We handle the lease. You just show up.
							</p>

							<div className="flex flex-col sm:flex-row gap-3 mb-6">
								<Link
									href="/listings"
									className="inline-flex items-center justify-center gap-2 bg-clay text-white px-7 py-3.5 rounded-full text-sm font-semibold hover:bg-clay-dark transition-colors"
								>
									Browse Listings{" "}
									<ArrowRight size={16} />
								</Link>
								<Link
									href="/how-it-works"
									className="inline-flex items-center justify-center gap-2 border-2 border-border text-ink px-7 py-3.5 rounded-full text-sm font-semibold hover:border-ink transition-colors"
								>
									How It Works
								</Link>
							</div>

							<div className="flex flex-wrap gap-x-6 gap-y-2">
								{[
									{
										ok: true,
										text: "International credit accepted",
									},
									{
										ok: true,
										text: "Tourist visa welcome",
									},
									{
										ok: false,
										text: "No fiador required",
									},
								].map(({ ok, text }) => (
									<span
										key={text}
										className="flex items-center gap-1.5 text-sm text-smoke"
									>
										{ok ? (
											<CheckCircle
												size={15}
												className="text-forest"
											/>
										) : (
											<XCircle
												size={15}
												className="text-clay"
											/>
										)}
										{text}
									</span>
								))}
							</div>
						</div>

						{/* Right: photo */}
						<div className="hidden lg:block">
							<div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
								<Image
									src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1000&auto=format&fit=crop&q=80"
									alt="Furnished apartment in Mexico City"
									fill
									className="object-cover"
									priority
								/>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* ── STATS BAR ── */}
			<section className="bg-stone border-y border-border py-10">
				<div className="max-w-6xl mx-auto px-4 sm:px-6">
					<div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
						{[
							{ value: "30 days", label: "Minimum stay" },
							{
								value: "No fiador",
								label: "No guarantor required",
							},
							{
								value: "24 hrs",
								label: "Application review time",
							},
							{
								value: "3 neighborhoods",
								label: "Roma · Condesa · Polanco",
							},
						].map(({ value, label }) => (
							<div key={value}>
								<p className="text-3xl font-extrabold text-ink">
									{value}
								</p>
								<p className="text-sm text-smoke mt-1">
									{label}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* ── FEATURED LISTINGS ── */}
			<section className="py-20 bg-white">
				<div className="max-w-6xl mx-auto px-4 sm:px-6">
					<div className="flex items-end justify-between mb-10">
						<div>
							<p className="text-xs font-semibold text-clay uppercase tracking-widest mb-2">
								Current Availability
							</p>
							<h2 className="text-4xl font-extrabold text-ink">
								Featured Listings
							</h2>
						</div>
						<Link
							href="/listings"
							className="hidden md:flex items-center gap-1.5 text-sm font-semibold text-clay hover:text-clay-dark transition-colors"
						>
							View all <ArrowRight size={14} />
						</Link>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
						{featured.map((listing) => (
							<ListingCard key={listing.slug} listing={listing} />
						))}
					</div>

					<div className="mt-8 text-center md:hidden">
						<Link
							href="/listings"
							className="text-sm font-semibold text-clay"
						>
							View all listings &rarr;
						</Link>
					</div>
				</div>
			</section>

			{/* ── HOW IT WORKS ── */}
			<section className="py-20 bg-stone">
				<div className="max-w-6xl mx-auto px-4 sm:px-6">
					<div className="text-center max-w-2xl mx-auto mb-16">
						<p className="text-xs font-semibold text-clay uppercase tracking-widest mb-3">
							How It Works
						</p>
						<h2 className="text-4xl font-extrabold text-ink mb-4">
							From application to keys in under a week
						</h2>
						<p className="text-smoke">
							No fiador. No poliza. No Mexican credit history
							required. Just a simple international process.
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						{[
							{
								num: "1",
								title: "Apply online",
								copy: "Submit income verification and a credit report link. Takes about 10 minutes. Tourist visa accepted. No Mexican documentation required.",
							},
							{
								num: "2",
								title: "We review within 24 hours",
								copy: "We check US or international credit score, income-to-rent ratio (3× minimum), and rental history. You receive a decision by email.",
							},
							{
								num: "3",
								title: "Sign and move in",
								copy: "Sign a bilingual lease online. Pay first month plus one-month deposit. Keys transferred within 24 hours of payment.",
							},
						].map(({ num, title, copy }) => (
							<div
								key={num}
								className="bg-white rounded-2xl p-8 shadow-sm border border-border"
							>
								<div className="w-12 h-12 rounded-full bg-clay/10 flex items-center justify-center mb-5">
									<span className="text-xl font-extrabold text-clay">
										{num}
									</span>
								</div>
								<h3 className="text-lg font-bold text-ink mb-3">
									{title}
								</h3>
								<p className="text-sm text-smoke leading-relaxed">
									{copy}
								</p>
							</div>
						))}
					</div>

					<div className="mt-10 text-center">
						<Link
							href="/how-it-works"
							className="inline-flex items-center gap-2 border-2 border-ink text-ink px-7 py-3 rounded-full text-sm font-semibold hover:bg-ink hover:text-white transition-colors"
						>
							Full guide + FAQ <ArrowRight size={14} />
						</Link>
					</div>
				</div>
			</section>

			{/* ── WHO IT'S FOR ── */}
			<section className="py-20 bg-white">
				<div className="max-w-6xl mx-auto px-4 sm:px-6">
					<div className="text-center max-w-2xl mx-auto mb-14">
						<p className="text-xs font-semibold text-clay uppercase tracking-widest mb-3">
							Who We Serve
						</p>
						<h2 className="text-4xl font-extrabold text-ink">
							Built for foreign professionals in CDMX
						</h2>
					</div>

					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
						{[
							{
								title: "Digital Nomads",
								copy: "Reliable wifi, a real desk, and a lease that matches your travel pattern — 30, 60, or 90 days with rolling extensions.",
							},
							{
								title: "Remote Workers",
								copy: "Set up a proper home office in one of the world's great cities, at a fraction of what Airbnb charges.",
							},
							{
								title: "Expats",
								copy: "A stable base while you navigate the city and figure out your longer-term situation. No fiador stress, ever.",
							},
							{
								title: "Corporate Relocators",
								copy: "For companies bringing employees to CDMX. We handle the apartment, onboarding, and ongoing support.",
							},
						].map(({ title, copy }) => (
							<div
								key={title}
								className="bg-stone rounded-2xl p-6 border border-border hover:shadow-md transition-shadow"
							>
								<h3 className="font-bold text-ink mb-2.5">
									{title}
								</h3>
								<p className="text-sm text-smoke leading-relaxed">
									{copy}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* ── WHAT WE DON'T REQUIRE ── */}
			<section className="py-20 bg-stone">
				<div className="max-w-6xl mx-auto px-4 sm:px-6">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
						<div>
							<p className="text-xs font-semibold text-clay uppercase tracking-widest mb-3">
								The Rentista Difference
							</p>
							<h2 className="text-4xl font-extrabold text-ink mb-5">
								The traditional rental market wasn&apos;t built
								for you.{" "}
								<span className="text-clay">We were.</span>
							</h2>
							<p className="text-smoke leading-relaxed mb-8">
								CDMX landlords require a fiador or a póliza de
								arrendamiento — guarantees that foreigners on
								tourist visas simply cannot provide. We remove
								that barrier entirely.
							</p>
							<Link
								href="/how-it-works"
								className="inline-flex items-center gap-2 bg-clay text-white px-7 py-3.5 rounded-full text-sm font-semibold hover:bg-clay-dark transition-colors"
							>
								See our screening process{" "}
								<ArrowRight size={15} />
							</Link>
						</div>
						<div className="grid grid-cols-1 gap-4">
							{[
								{
									label: "What we check",
									items: [
										"US or international credit score",
										"Income ≥ 3× monthly rent",
										"Previous rental references",
									],
									accent: "forest",
									icon: "✓",
								},
								{
									label: "What we never require",
									items: [
										"Fiador or Mexican guarantor",
										"Póliza de arrendamiento",
										"Mexican credit history or CURP",
									],
									accent: "clay",
									icon: "×",
								},
							].map(({ label, items, accent, icon }) => (
								<div
									key={label}
									className={`bg-white rounded-2xl p-6 border ${accent === "forest" ? "border-forest/20" : "border-clay/20"}`}
								>
									<p
										className={`text-xs font-semibold uppercase tracking-widest mb-3 ${accent === "forest" ? "text-forest" : "text-clay"}`}
									>
										{label}
									</p>
									<ul className="space-y-2">
										{items.map((item) => (
											<li
												key={item}
												className="flex items-center gap-2.5 text-sm text-ink"
											>
												<span
													className={`font-bold ${accent === "forest" ? "text-forest" : "text-clay"}`}
												>
													{icon}
												</span>
												{item}
											</li>
										))}
									</ul>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* ── NEIGHBORHOODS TEASER ── */}
			<section className="py-16 bg-white border-y border-border">
				<div className="max-w-6xl mx-auto px-4 sm:px-6">
					<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
						<div>
							<p className="text-xs font-semibold text-clay uppercase tracking-widest mb-2">
								Where to Live
							</p>
							<h2 className="text-3xl font-extrabold text-ink">
								Roma Norte · La Condesa · Polanco
							</h2>
							<p className="text-smoke mt-2 max-w-lg text-sm">
								Three neighborhoods, three different feels.
								Honest guides to help you pick the right one
								before you arrive.
							</p>
						</div>
						<Link
							href="/neighborhoods"
							className="flex-shrink-0 inline-flex items-center gap-2 border-2 border-border text-ink px-6 py-3 rounded-full text-sm font-semibold hover:border-ink transition-colors"
						>
							Read neighborhood guides{" "}
							<ArrowRight size={14} />
						</Link>
					</div>
				</div>
			</section>

			{/* ── LANDLORD CTA ── */}
			<section className="py-20 bg-ink">
				<div className="max-w-6xl mx-auto px-4 sm:px-6">
					<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-10">
						<div className="max-w-lg">
							<p className="text-xs font-semibold text-white/40 uppercase tracking-widest mb-3">
								For Property Owners
							</p>
							<h2 className="text-4xl font-extrabold text-white leading-tight mb-4">
								Own property in CDMX? We become your single
								reliable tenant.
							</h2>
							<p className="text-white/60 text-sm leading-relaxed">
								We sign the master lease as a Mexican entity,
								furnish the unit, and manage everything. You
								receive monthly rent on time. You never deal
								with foreign tenant uncertainty.
							</p>
						</div>
						<div className="flex-shrink-0">
							<Link
								href="/for-landlords"
								className="inline-flex items-center gap-2 bg-clay text-white px-7 py-3.5 rounded-full text-sm font-semibold hover:bg-clay-dark transition-colors"
							>
								Learn how it works <ArrowRight size={15} />
							</Link>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}

export default HomePage
