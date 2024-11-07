import Image from "next/image"

interface ImageProps {
	image: string
}

const PropertyHeaderImage: React.FC<ImageProps> = ({ image }) => {
	return (
		<section>
			<div className="container-xl m-auto">
				<div className="grid grid-cols-1">
					<Image
						src={image}
						alt=""
						height="0"
						width="0"
						className="object-cover h-[400px] w-full"
						sizes={"100vw"}
					/>
				</div>
			</div>
		</section>
	)
}

export default PropertyHeaderImage
