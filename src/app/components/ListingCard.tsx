import Link from "next/link"
import Image from "next/image"
import { Wifi } from "lucide-react"
import { Listing } from "@/src/lib/listings"

interface Props {
	listing: Listing
}

const ListingCard = ({ listing }: Props) => {
	const bedroomLabel =
		listing.bedrooms === 0 ? "Studio" : `${listing.bedrooms} BR`

	return (
		<Link href={`/listings/${listing.slug}`} className="group block">
			<div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-stone">
				<Image
					src={listing.images[0]}
					alt={listing.title}
					fill
					className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
					sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
				/>
				<div className="absolute top-3 right-3">
					<span
						className={`text-xs font-semibold px-3 py-1 rounded-full ${
							listing.available
								? "bg-forest text-white"
								: "bg-ink/80 text-white"
						}`}
					>
						{listing.available
							? "Available now"
							: `Available ${listing.availableDate}`}
					</span>
				</div>
			</div>

			<div className="mt-4 space-y-1">
				<div className="flex items-center justify-between gap-2">
					<p className="text-xs font-medium text-smoke">
						{listing.neighborhood} &middot; {bedroomLabel} &middot;{" "}
						{listing.bathrooms} BA
					</p>
					<p className="text-xs text-ash">{listing.sqm}m²</p>
				</div>
				<h3 className="font-bold text-ink group-hover:text-clay transition-colors">
					{listing.title}
				</h3>
				<div className="flex items-center justify-between pt-0.5">
					<p className="text-lg font-extrabold text-ink">
						${listing.price.toLocaleString()}
						<span className="text-smoke font-normal text-sm">
							{" "}
							/ mo
						</span>
					</p>
					<p className="text-xs text-smoke">
						{listing.minStay}-day min
					</p>
				</div>
				<div className="flex items-center gap-1.5 text-xs text-smoke">
					<Wifi size={11} className="text-ash" />
					<span>{listing.wifiSpeed}</span>
				</div>
			</div>
		</Link>
	)
}

export default ListingCard
