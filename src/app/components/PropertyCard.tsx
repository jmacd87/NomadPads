import Image from "next/image"
import { PropertyCardProps } from "../types/interfaces"
import Link from "next/link"
import {
	FaBed,
	FaBath,
	FaRulerCombined,
	FaMoneyBill,
	FaMapMarker,
} from "react-icons/fa"

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
	const getRatesDisplay = () => {
		const { rates } = property
		if (rates.monthly) {
			return `$${rates.monthly.toLocaleString()}/mo`
		} else if (rates.weekly) {
			return `$${rates.weekly.toLocaleString()}/wk`
		} else if (rates.nightly) {
			return `$${rates.nightly.toLocaleString()}/night`
		}
	}
	return (
		<Link href={`/properties/${property._id}`}>
			<div className="rounded-xl shadow-md relative">
				{property?.images[0] && (
					<Image
						src={property.images[0]}
						alt=""
						width={0}
						height={0}
						sizes="100vw"
						className="w-full h-auto rounded-t-xl"
					/>
				)}
				<div className="p-4">
					<div className="text-left md:text-center lg:text-left mb-6">
						<div className="text-gray-600">{property.type}</div>
						<h3 className="text-lg font-bold">{property.name}</h3>
					</div>
					<h3 className="absolute top-[10px] right-[10px] bg-white px-2 py-2 rounded-lg text-sm text-blue-500 font-bold text-right md:text-center lg:text-right text-lg">
						{getRatesDisplay()}
					</h3>

					<div className="flex text-lg justify-center gap-4 text-gray-500 mb-4">
						<p>
							<FaBed /> {property.beds}
							<span className="md:hidden lg:inline"> Bed</span>
						</p>
						<p>
							<FaBath /> {property.baths}
							<span className="md:hidden lg:inline"> Bath</span>
						</p>
						<p>
							<FaRulerCombined />
							{property.square_feet}
							<span className="md:hidden lg:inline">sqft</span>
						</p>
					</div>

					<div className="flex justify-center gap-4 text-green-900 text-base mb-4">
						{property.rates.weekly && (
							<p>
								<FaMoneyBill /> ${property.rates.weekly} Weekly
							</p>
						)}
						{property.rates.monthly && (
							<p>
								<FaMoneyBill /> ${property.rates.monthly} Monthly
							</p>
						)}
					</div>

					<div className="border border-gray-100 mb-5"></div>

					<div className="flex flex-col lg:flex-row justify-between mb-4">
						<div className="flex align-middle gap-2 mb-4 lg:mb-0">
							<FaMapMarker />
							<span className="text-orange-700 text-lg">
								{" "}
								{property.location.city}, {property.location.state}
							</span>
						</div>
					</div>
				</div>
			</div>
		</Link>
	)
}

export default PropertyCard
