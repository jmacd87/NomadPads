import rentalsImage from "/assets/images/rental2.jpg"
import PropertySearchForm from "./PropertySearch"
const Hero = () => {
	return (
		<>
			<section
				className="relative bg-white py-20 mb-4 h-64 w-full bg-cover bg-center"
				style={{ backgroundImage: `url(${rentalsImage.src})` }}
			>
				<div className="absolute inset-0 bg-gray-800 opacity-50"></div>
				<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center md:mb-8">
					<div className="text-center">
						<h1 className="text-4xl font-extrabold font-mono sm:text-5xl md:text-6xl text-sky-400">
							Find The Perfect Rental
						</h1>
						<p className="my-4 text-xl text-white">
							Discover the perfect property that suits your needs
						</p>
					</div>
				</div>
			</section>
			<section className="mt-3 m-4">
				<PropertySearchForm />
			</section>
		</>
	)
}

export default Hero
