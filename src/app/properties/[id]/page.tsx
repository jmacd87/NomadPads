import connectDB from "@/config/database"
import Property from "@/models/Property"
import PropertyHeaderImage from "@/src/app/components/PropertyHeaderImage"
import Link from "next/link"
import { FaArrowLeft } from "react-icons/fa"
import PropertyDetails from "@/src/app/components/PropertyDetails"
import { PropertyPageParams } from "@/src/app/types/interfaces"
import { convertToSerializableObject } from "@/src/app/utils/convertToObject"

const PropertyPage = async ({ params }: PropertyPageParams) => {
	await connectDB()
	const properties = await Property.findById(params.id)

	return (
		<div>
			<PropertyHeaderImage image={properties.images[0]} />
			<section>
				<div className="container m-auto py-6 px-6">
					<Link
						href="/properties"
						className="text-blue-500 hover:text-blue-600 flex items-center"
					>
						<FaArrowLeft className="mr-2" />
						Back to Properties
					</Link>
				</div>
			</section>
			<PropertyDetails property={properties} />
		</div>
	)
}

export default PropertyPage
