import Image from "next/image"
import profileDefault from "@/assets/images/profile.png"
import connectDB from "@/config/database"
import { getSessionUser } from "@/src/app/utils/getSessionUser"
import Property from "@/models/Property"
import ProfileProperties from "@/src/app/components/ProfileProperties"

const ProfilePage = async () => {
	await connectDB()
	const sessionUser = await getSessionUser()
	if (!sessionUser || !sessionUser.userId) {
		throw new Error("User ID is required")
	}

	const properties = await Property.find({
		owner: sessionUser.userId,
	})
	return (
		<section className="bg-blue-50">
			<div className="container m-auto py-24">
				<div className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
					<div className="flex flex-col md:flex-row">
						<h1 className="text-xl font-bold mb-4">Profile</h1>
						<div className="md:w-1/2 mt-10">
							<div className="mb-4">
								<Image
									className="rounded-full mx-auto md:mx-0"
									src={sessionUser.user.image || profileDefault}
									alt="User"
									width={80}
									height={80}
									priority
								/>
							</div>

							<h2 className="text-lg mb-4">
								<span className="font-bold block">Name: </span>{" "}
								{sessionUser.user.name}
							</h2>
							<h2 className="text-lg">
								<span className="font-bold block">Email: </span>{" "}
								{sessionUser.user.email}
							</h2>
						</div>

						<div className="md:w-3/4 md:pl-4">
							<h2 className="text-xl font-semibold mb-4">Your Listings</h2>

							<ProfileProperties properties={properties} />
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default ProfilePage
