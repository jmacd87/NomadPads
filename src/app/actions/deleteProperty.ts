"use server"
import cloudinary from "@/config/cloudinary"
import Property from "@/models/Property"
import { getSessionUser } from "../utils/getSessionUser"
import { revalidatePath } from "next/cache"

async function deleteProperty(propertyId: string) {
	const sessionUser = await getSessionUser()
	if (!sessionUser || !sessionUser?.userId) {
		throw new Error("User ID is required")
	}
	const { userId } = sessionUser
	const property = await Property.findById(propertyId)
	if (!property) throw new Error("Property Not Found")
	if (property.owner.toString() !== userId) {
		throw new Error("Unauthorized")
	}
	//extract public ids from image URLs
	const publicIds = property.images.map((imageUrl: string) => {
		const parts = imageUrl.split("/")
		const lastPart = parts.at(-1)
		return lastPart?.split(".")[0] || "" // Fallback to an empty string if undefined
	})
	// Delete images from Cloudinary

	if (publicIds.length > 0) {
		for (const publicId of publicIds) {
			await cloudinary.uploader.destroy("nomadpads/" + publicId)
		}
	}
	await property.deleteOne()
	revalidatePath("/", "layout")
}

export default deleteProperty
