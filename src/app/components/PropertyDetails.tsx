import { FaBath, FaBed, FaCheck, FaRulerCombined } from "react-icons/fa"
import { PropertyCardProps } from "@/src/app/types/interfaces"
import PropertyImages from "./PropertyImages"
import PropertyMap from "./PropertyMap"
const PropertyInfo = ({ property }: PropertyCardProps) => {
	console.log("property detail props", property)
	return (
		<section className="bg-blue-50">
			<div className="container m-auto py-10 px-6">
				<div className="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
					<main>
						<div className="bg-white p-6 rounded-lg shadow-md text-center md:text-left">
							<div className="text-gray-500 mb-4">{property.type}</div>
							<h1 className="text-3xl font-bold mb-4">{property.name}</h1>
							<div className="text-gray-500 mb-4 flex align-middle justify-center md:justify-start">
								<i className="fa-solid fa-location-dot text-lg text-orange-700 mr-2"></i>
								<p className="text-orange-700">
									{`${property.location.street} ${property.location.city} ${property.location.state} ${property.location.zipcode}`}
								</p>
							</div>

							<h3 className="text-lg font-bold my-6 bg-gray-800 text-white p-2">
								Rates & Options
							</h3>
							<div className="flex flex-col md:flex-row justify-around">
								{property.rates.nightly && (
									<div className="flex items-center justify-center mb-4 border-b border-gray-200 md:border-b-0 pb-4 md:pb-0">
										<div className="text-gray-500 mr-2 font-bold">Nightly</div>
										<div className="text-2xl font-bold">
											{property.rates.nightly}
											<i className="fa fa-xmark text-red-700"></i>
										</div>
									</div>
								)}
								{property.rates.weekly && (
									<div className="flex items-center justify-center mb-4 border-b border-gray-200 md:border-b-0 pb-4 md:pb-0">
										<div className="text-gray-500 mr-2 font-bold">Weekly</div>
										<div className="text-2xl font-bold text-blue-500">
											{property.rates.weekly}
										</div>
									</div>
								)}
								{property.rates.monthly && (
									<div className="flex items-center justify-center mb-4 pb-4 md:pb-0">
										<div className="text-gray-500 mr-2 font-bold">Monthly</div>
										<div className="text-2xl font-bold text-blue-500">
											{property.rates.monthly}
										</div>
									</div>
								)}
							</div>
						</div>

						<div className="bg-white p-6 rounded-lg shadow-md mt-6">
							<h3 className="text-lg font-bold mb-6">Description & Details</h3>
							<div className="flex justify-center gap-4 text-blue-500 mb-4 text-xl space-x-9">
								<p>
									<FaBed className="inline-block mr-2" />
									{property.beds}
									<span className="hidden sm:inline">Beds</span>
								</p>
								<p>
									<FaBath className="inline-block mr-2" />
									<span className="hidden sm:inline">Baths</span>
								</p>
								<p>
									<FaRulerCombined className="inline-block mr-2" />
									{property.square_feet}{" "}
									<span className="hidden sm:inline">sqft</span>
								</p>
							</div>
							<p className="text-gray-500 mb-4">{property.description}</p>
						</div>

						<div className="bg-white p-6 rounded-lg shadow-md mt-6">
							<h3 className="text-lg font-bold mb-6">Amenities</h3>

							<ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 list-none">
								{property.amenities.map((amenity: string, index: number) => (
									<li key={index}>
										<FaCheck className="inline-block mr-2 text-green-600" />
										{amenity}
									</li>
								))}
							</ul>
						</div>

						{/* <!-- Map --> */}
						<div className="bg-white p-6 shadow-md mt-6">
							<div id="map">
								<PropertyMap property={property} />
							</div>
						</div>
						<PropertyImages images={property.images} />
					</main>
				</div>
			</div>
		</section>
	)
}

export default PropertyInfo
