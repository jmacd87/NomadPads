import connectDB from "@/config/database"
import Property from "@/models/Property"
import { PropertiesArray } from "../../types/interfaces"
import Link from "next/link"
import PropertyCard from "../../components/PropertyCard"
import PropertySearchForm from "../../components/PropertySearch"
import { FaArrowAltCircleLeft } from "react-icons/fa"

interface SearchParams {
	location?: string
	propertyType?: string
}

interface SearchResultsPageProps {
	searchParams: SearchParams
}
interface LocationFields {
	name?: RegExp
	type?: RegExp
	description?: RegExp
	"location.street"?: RegExp
	"location.city"?: RegExp
	"location.state"?: RegExp
	"location.zipcode"?: RegExp
}

const SearchResultsPage: React.FC<SearchResultsPageProps> = async ({
	searchParams: { location = "", propertyType = "All" },
}) => {
	await connectDB()

	// Pattern to match the location, case-insensitive
	const locationPattern = new RegExp(location, "i")

	// Define the query object
	const query: { $or: LocationFields[]; type?: RegExp } = {
		$or: [
			{ name: locationPattern },
			{ description: locationPattern },
			{ "location.street": locationPattern },
			{ "location.city": locationPattern },
			{ "location.state": locationPattern },
			{ "location.zipcode": locationPattern },
		],
	}

	if (propertyType && propertyType !== "All") {
		const typePattern = new RegExp(propertyType, "i")
		query.type = typePattern
	}
	// Fetch the properties based on the query
	let properties: PropertiesArray = []
	try {
		properties = await Property.find(query)
	} catch (error) {
		console.error("Error fetching properties:", error)
	}

	return (
		<>
			<section className="bg-gray-700 py-4">
				<div className="max-w-7xl mx-auto px-4 flex flex-col items-center sm:px-6 lg:px-8">
					<PropertySearchForm />
				</div>
			</section>
			<section className="px-4 py-6">
				<div className="container-xl lg:container m-auto px-4 py-6">
					<Link
						href="/properties"
						className="flex items-center text-blue-500 hover:underline mb-3"
					>
						<FaArrowAltCircleLeft className="mr-2 mb-1" /> Back to Properties
					</Link>
					<h1 className="text-2xl mb-4">Search Results</h1>
					{/* Render the properties or an empty message if no results */}
					{properties.length ? (
						properties.map((property) => (
							<div
								className="grid grid-cols-1 md: grid-cols-3 gap-6"
								key={property._id.toString()}
							>
								<PropertyCard property={property} />
							</div>
						))
					) : (
						<p>No results found.</p>
					)}
				</div>
			</section>
		</>
	)
}

export default SearchResultsPage
