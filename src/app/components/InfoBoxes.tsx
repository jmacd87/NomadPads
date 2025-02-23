const InfoBoxes = () => {
	return (
		<section>
			<div className="container-lg lg:container m-auto">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 rounded-lg">
					<div className="bg-gray-100 p-6 rounded-lg shadow-md">
						<h2 className="text-2xl font-bold">For Renters</h2>
						<p className="mt-2 mb-4 text-lg">
							Find your dream rental property. Bookmark properties and contact
							owners.
						</p>
						<a
							href="/properties"
							className="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700 text-lg"
						>
							Browse Properties
						</a>
					</div>
					<div className="bg-blue-100 p-6 rounded-lg shadow-md">
						<h2 className="text-2xl font-bold">For Property Owners</h2>
						<p className="mt-2 mb-4 text-lg">
							List your properties and reach potential tenants. Rent without the
							fees.
						</p>
						<a
							href="/properties/add"
							className="inline-block bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-blue-600 text-lg"
						>
							Add Property
						</a>
					</div>
				</div>
			</div>
		</section>
	)
}

export default InfoBoxes
