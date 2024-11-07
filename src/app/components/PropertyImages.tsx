import React from "react"
import Image from "next/image"

interface PropertyImagesProps {
	images: string[] // Define the type of images as an array of strings
}

const PropertyImages: React.FC<PropertyImagesProps> = ({ images }) => {
	return (
		<section className="bg-blue-50 p-4">
			<div className="container mx-auto">
				<div className="grid grid-cols-2 gap-4">
					{images.map((image, index) => (
						<div key={index} className="col-span-1">
							<Image
								key={index}
								src={image}
								alt={`Property image ${index + 1}`}
								width={1800} // Set an appropriate width
								height={400} // Set an appropriate height
								className="w-full h-auto"
								priority={true}
							/>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default PropertyImages
