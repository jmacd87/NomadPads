import Hero from "./components/Hero"
import InfoBoxes from "./components/InfoBoxes"
import PropertyCard from "./components/PropertyCard"
import Link from "next/link"
import connectDB from "@/config/database"
import Property from "@/models/Property"
import { PropertiesArray } from "@/src/app/types/interfaces"

const HomePage = async () => {
	await connectDB()

	const properties = await Property.find({}).lean<PropertiesArray>()
	return (
		<div className="text-2xl">
			<Hero />
			<InfoBoxes />
			<section className={"px-4 py-6"}>
				<div className="container-xl lg:container m-auto px-4 py06">
					{properties.length === 0 ? (
						<p>No properties found</p>
					) : (
						<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
							{properties.slice(0, 3).map((property) => (
								<PropertyCard key={property._id} property={property} />
							))}
						</div>
					)}
				</div>
			</section>
			<section className="m-auto max-w-md my-6 px-6">
				<Link
					href="/properties"
					className="block bg-blue-500 text-white text-lg text-center py-4 px-4 rounded-xl hover: bg-gray-700"
				>
					View All Properties
				</Link>
			</section>
		</div>
	)
}

export default HomePage
