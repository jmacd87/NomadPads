export interface Neighborhood {
	slug: string
	name: string
	tagline: string
	description: string
	bestFor: string[]
	walkability: string
	quietRating: string
	image: string
	priceRange: string
	notesForNomads: string
}

export const neighborhoods: Neighborhood[] = [
	{
		slug: "roma-norte",
		name: "Roma Norte",
		tagline: "The creative heartbeat of CDMX",
		description:
			"Roma Norte is where most digital nomads land first, and many never leave. It's dense with independent cafes that understand laptops and long mornings, walkable to nearly everything, and has enough architectural character — art nouveau facades, leafy streets, good taco spots — to stay interesting for months. Álvaro Obregón is the main artery: lined with restaurants, bookshops, and coffee that takes itself seriously. The streets are safe and active day and night. Parque México is the social center.",
		bestFor: [
			"Digital nomads",
			"First-timers to CDMX",
			"Cafe workers",
			"Walkability prioritizers",
		],
		walkability: "Excellent — nearly everything reachable on foot",
		quietRating: "Moderate — busy but not loud",
		image:
			"https://images.unsplash.com/photo-1518638150340-f706e86654de?w=1200&auto=format&fit=crop&q=80",
		priceRange: "$1,500 – $2,200 / mo",
		notesForNomads:
			"The highest concentration of good cafes with reliable wifi. Expect to compete for outlets at peak hours. The neighborhood has a mix of locals and international residents, so English is commonly spoken in service contexts. Uber and Metro both work well.",
	},
	{
		slug: "condesa",
		name: "La Condesa",
		tagline: "Tree-lined boulevards and a slower pace",
		description:
			"Condesa is slightly quieter than Roma Norte but just as walkable. The defining feature is the circular park system — Parque México and Parque España sit at its center, ringed by art deco apartment buildings. It's a neighborhood that rewards living slowly: morning runs in the park, brunch on Amsterdam, an afternoon working from one of the many good cafes. Dog density is extremely high. The housing stock tends to be larger apartments in older buildings — good value for the space.",
		bestFor: [
			"Longer stays of 60+ days",
			"People who value parks and green space",
			"Couples",
			"Those who prefer a quieter feel",
		],
		walkability: "Excellent — flat, bikeable, great sidewalks",
		quietRating: "Quieter — residential feel with low traffic noise",
		image:
			"https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=1200&auto=format&fit=crop&q=80",
		priceRange: "$1,800 – $2,400 / mo",
		notesForNomads:
			"Fewer cafes than Roma Norte, but the ones that exist are excellent. Amsterdam and Tamaulipas are the main commercial streets. The neighborhood feels a bit more residential and settled — great if you want to feel like you actually live somewhere, not just visiting.",
	},
	{
		slug: "polanco",
		name: "Polanco",
		tagline: "Business-ready with a quiet residential core",
		description:
			"Polanco is CDMX's most polished neighborhood — the address of choice for corporate relocators, embassy staff, and people who want a proper apartment building with a gym and concierge. Masaryk is lined with high-end restaurants and global brands; Parque Lincoln is excellent for morning walks. It's quieter than Roma and Condesa, more organized, and has the highest proportion of international residents. If you're here for work rather than adventure, Polanco is the easiest adjustment from a North American or European city.",
		bestFor: [
			"Corporate relocators",
			"Those who prefer quieter residential streets",
			"Families",
			"Business travelers on longer stays",
		],
		walkability: "Good — less dense, some blocks require walking further",
		quietRating: "Quiet — low foot traffic, primarily residential",
		image:
			"https://images.unsplash.com/photo-1602941525421-8f8b81d3f526?w=1200&auto=format&fit=crop&q=80",
		priceRange: "$2,200 – $3,500 / mo",
		notesForNomads:
			"The least nomad-dense of the three, but this is often a plus. Excellent building quality and security. Most buildings have gyms, concierge, and underground parking. The Antara mall has a Starbucks and several co-working options if you need alternatives to cafes.",
	},
]

export const getNeighborhood = (slug: string): Neighborhood | undefined =>
	neighborhoods.find((n) => n.slug === slug)
