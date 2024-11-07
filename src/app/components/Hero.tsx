import rentalsImage from "/assets/images/rental2.jpg"
import PropertySearchForm from "./PropertySearch"
const Hero = () => {
	return (
		<>
			<section
				className="bg-white py-20 mb-4 h-64 w-full bg-cover bg-center"
				style={{ backgroundImage: `url(${rentalsImage.src})` }}
			>
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center md:mb-8">
					<div className="text-center">
						<h1 className="text-4xl font-extrabold sm:text-5xl md:text-6xl bg-gradient-to-r from-blue-500 to-black bg-clip-text text-transparent">
							Find The Perfect Rental
						</h1>
						<p className="my-4 text-xl text-white">
							Discover the perfect property that suits your needs.
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
