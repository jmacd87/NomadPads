import PropertyEditForm from "@/src/app/components/PropertyEditForm"
import { PropertyPageParams } from "@/src/app/types/interfaces"
import connectDB from "@/config/database"
import Property from "@/models/Property"

const PropertyEditPage = async ({ params }: PropertyPageParams) => {
	await connectDB()

	const property = await Property.findById(params.id)

	return (
		<section className="bg-blue-50">
			<div className="container m-auto max-w-2xl py-24">
				<div className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
					<PropertyEditForm property={property} />
				</div>
			</div>
		</section>
	)
}

export default PropertyEditPage
