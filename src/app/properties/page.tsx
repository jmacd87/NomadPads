// import properties from "@/properties.json"
import PropertyCard from "../components/PropertyCard"
import connectDB from "@/config/database"
import Property from "@/models/Property"
import { PropertiesArray } from "@/src/app/types/interfaces"

const PropertiesPage = async () => {
	await connectDB()
	const properties = await Property.find({}).lean<PropertiesArray>()

	return (
		<section className={"px-4 py-6"}>
			<div className="container-xl lg:container m-auto px-4 py06">
				{properties.length === 0 ? (
					<p>No properties found</p>
				) : (
					<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
						{properties.map((property) => (
							<PropertyCard key={property._id} property={property} />
						))}
					</div>
				)}
			</div>
		</section>
	)
}

export default PropertiesPage
