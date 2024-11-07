"use server"
import connectDB from "@/config/database"
import Property from "@/models/Property"
import { getSessionUser } from "@/src/app/utils/getSessionUser"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

async function updateProperty(propertyId: string, formData: FormData) {
	await connectDB()

	const sessionUser = await getSessionUser()
	if (!sessionUser || !sessionUser.userId) {
		throw new Error(
			"User id is required, if you are not signed in, sign in and try again"
		)
	}
	const { userId } = sessionUser
	const amenities = formData.getAll("amenities") as string[]
	const existingProperty = await Property.findById(propertyId)
	if (existingProperty.owner.toString() !== userId) {
		throw new Error("Current user does not own this property")
	}
	const propertyData = {
		owner: userId as string, // Typecast to string if userId is ensured to be a string
		type: formData.get("type") as string,
		name: formData.get("name") as string,
		description: formData.get("description") as string,
		location: {
			street: formData.get("location.street") as string,
			city: formData.get("location.city") as string,
			state: formData.get("location.state") as string,
			zipcode: formData.get("location.zipcode") as string,
		},
		beds: Number(formData.get("beds")), // Convert to number
		baths: Number(formData.get("baths")), // Convert to number
		square_feet: Number(formData.get("square_feet")), // Convert to number
		amenities, // Ensure amenities is an array of strings
		rates: {
			nightly: formData.get("rates.nightly")
				? Number(formData.get("rates.nightly"))
				: undefined,
			weekly: formData.get("rates.weekly")
				? Number(formData.get("rates.weekly"))
				: undefined,
			monthly: formData.get("rates.monthly")
				? Number(formData.get("rates.monthly"))
				: undefined,
		},
		seller_info: {
			name: formData.get("seller_info.name") as string,
			email: formData.get("seller_info.email") as string,
			phone: formData.get("seller_info.phone")
				? (formData.get("seller_info.phone") as string)
				: "",
		},
		is_featured: false, // Initialize with default value
		createdAt: new Date().toISOString(), // Or set according to your needs
		updatedAt: new Date().toISOString(), // Or set according to your needs
	}
	const updatedProperty = await Property.findByIdAndUpdate(
		propertyId,
		propertyData
	)
	revalidatePath("/", "layout")
	redirect(`/properties/${updatedProperty._id}`)
}

export default updateProperty
