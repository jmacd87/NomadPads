import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { getListing, listings } from "@/src/lib/listings"
import ApplicationForm from "../../components/ApplicationForm"
import { ArrowLeft, Wifi, MapPin, BedDouble, Bath, Maximize } from "lucide-react"
import type { Metadata } from "next"

interface Props {
	params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
	return listings.map((l) => ({ slug: l.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const { slug } = await params
	const listing = getListing(slug)
	if (!listing) return {}
	return {
		title: `${listing.title} — ${listing.neighborhood} | Rentista`,
		description: `${listing.type} in ${listing.neighborhood}, Mexico City. $${listing.price.toLocaleString()}/mo, ${listing.minStay}-day minimum. ${listing.wifiSpeed} wifi. No fiador required.`,
	}
}

const ListingDetailPage = async ({ params }: Props) => {
	const { slug } = await params
	const listing = getListing(slug)
	if (!listing) notFound()

	const bedroomLabel =
		listing.bedrooms === 0 ? "Studio" : `${listing.bedrooms} BR`

	return (
		<div className="bg-white min-h-screen">
			{/* Back nav */}
			<div className="max-w-6xl mx-auto px-4 sm:px-6 pt-8">
				<Link
					href="/listings"
					className="inline-flex items-center gap-1.5 text-sm font-medium text-smoke hover:text-ink transition-colors"
				>
					<ArrowLeft size={14} /> Back to listings
				</Link>
			</div>

			{/* Image gallery */}
			<div className="max-w-6xl mx-auto px-4 sm:px-6 mt-6">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-2 rounded-2xl overflow-hidden h-[400px] md:h-[500px]">
					<div className="md:col-span-2 relative">
						<Image
							src={listing.images[0]}
							alt={listing.title}
							fill
							className="object-cover"
							priority
						/>
					</div>
					<div className="hidden md:grid grid-rows-2 gap-2">
						{listing.images.slice(1, 3).map((img, i) => (
							<div key={i} className="relative">
								<Image
									src={img}
									alt={`${listing.title} — photo ${i + 2}`}
									fill
									className="object-cover"
								/>
							</div>
						))}
					</div>
				</div>
			</div>

			{/* Content grid */}
			<div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
				<div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-12">
					{/* Left: details */}
					<div>
						<div className="mb-8">
							<span
								className={`inline-flex text-xs font-semibold px-3 py-1 rounded-full mb-4 ${
									listing.available
										? "bg-forest/10 text-forest"
										: "bg-stone text-smoke border border-border"
								}`}
							>
								{listing.available
									? "Available now"
									: `Available ${listing.availableDate}`}
							</span>
							<h1 className="text-4xl font-extrabold text-ink mb-2">
								{listing.title}
							</h1>
							<div className="flex items-center gap-1.5 text-smoke text-sm mb-5">
								<MapPin size={13} />
								<span>
									{listing.neighborhood}, Mexico City &middot;{" "}
									{listing.floor}
								</span>
							</div>
							<div className="flex flex-wrap items-center gap-5 text-sm text-smoke">
								<span className="flex items-center gap-1.5">
									<BedDouble size={15} className="text-ash" />
									{bedroomLabel}
								</span>
								<span className="flex items-center gap-1.5">
									<Bath size={15} className="text-ash" />
									{listing.bathrooms} Bath
								</span>
								<span className="flex items-center gap-1.5">
									<Maximize size={15} className="text-ash" />
									{listing.sqm}m²
								</span>
								<span className="flex items-center gap-1.5">
									<Wifi size={15} className="text-ash" />
									{listing.wifiSpeed}
								</span>
							</div>
						</div>

						{/* Price */}
						<div className="bg-stone rounded-2xl p-6 border border-border mb-8 flex items-center justify-between">
							<div>
								<p className="text-3xl font-extrabold text-ink">
									${listing.price.toLocaleString()}
									<span className="text-smoke text-base font-normal">
										{" "}
										/ month
									</span>
								</p>
								<p className="text-xs text-smoke mt-1">
									{listing.minStay}-day minimum · all
									utilities included
								</p>
							</div>
							<div className="text-right text-sm text-smoke">
								<p className="font-medium text-ink">
									1 month deposit
								</p>
								<p className="text-xs text-ash">
									refunded at lease end
								</p>
							</div>
						</div>

						{/* Description */}
						<div className="mb-8">
							<h2 className="font-bold text-ink mb-3">
								About this apartment
							</h2>
							<p className="text-smoke leading-relaxed text-sm">
								{listing.description}
							</p>
						</div>

						{/* Highlights */}
						<div className="mb-8">
							<h2 className="font-bold text-ink mb-3">
								Location highlights
							</h2>
							<ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
								{listing.highlights.map((h) => (
									<li
										key={h}
										className="flex items-start gap-2 text-sm text-smoke"
									>
										<span className="w-1.5 h-1.5 bg-clay rounded-full mt-1.5 flex-shrink-0" />
										{h}
									</li>
								))}
							</ul>
						</div>

						{/* Amenities */}
						<div className="mb-8">
							<h2 className="font-bold text-ink mb-3">
								What&apos;s included
							</h2>
							<div className="grid grid-cols-2 gap-y-2 gap-x-4">
								{listing.amenities.map((a) => (
									<div
										key={a}
										className="flex items-center gap-2 text-sm text-smoke"
									>
										<span className="text-forest font-bold text-xs">
											✓
										</span>
										{a}
									</div>
								))}
							</div>
						</div>

						{/* Screening */}
						<div className="bg-stone rounded-2xl p-6 border border-border">
							<h3 className="font-bold text-ink mb-4">
								Screening process
							</h3>
							<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
								<div>
									<p className="font-semibold text-ink text-xs mb-2">
										We check:
									</p>
									<ul className="space-y-1 text-smoke">
										<li>US or international credit</li>
										<li>Income ≥ 3× monthly rent</li>
										<li>Rental references</li>
									</ul>
								</div>
								<div>
									<p className="font-semibold text-ink text-xs mb-2">
										Not required:
									</p>
									<ul className="space-y-1 text-smoke">
										<li>Fiador</li>
										<li>Póliza de arrendamiento</li>
										<li>Permanent residency</li>
									</ul>
								</div>
							</div>
						</div>
					</div>

					{/* Right: form */}
					<div>
						<div className="sticky top-24">
							<ApplicationForm
								listingTitle={listing.title}
								listingSlug={listing.slug}
							/>
							<div className="mt-4 text-center">
								<p className="text-xs text-ash">
									Prefer to talk first?{" "}
									<a
										href="https://wa.me/5215500000000"
										target="_blank"
										rel="noopener noreferrer"
										className="underline hover:text-smoke"
									>
										WhatsApp us
									</a>
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ListingDetailPage
