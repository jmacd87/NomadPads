export interface Listing {
	slug: string
	title: string
	neighborhood: string
	city: string
	type: string
	bedrooms: number
	bathrooms: number
	sqm: number
	price: number
	minStay: number
	available: boolean
	availableDate?: string
	floor: string
	wifiSpeed: string
	amenities: string[]
	description: string
	highlights: string[]
	images: string[]
	featured: boolean
}

export const listings: Listing[] = [
	{
		slug: "top-floor-studio-roma-norte",
		title: "Top-Floor Studio with Terrace",
		neighborhood: "Roma Norte",
		city: "Mexico City",
		type: "Studio",
		bedrooms: 0,
		bathrooms: 1,
		sqm: 55,
		price: 1650,
		minStay: 30,
		available: true,
		floor: "6th floor",
		wifiSpeed: "300 Mbps symmetric",
		amenities: [
			"Dedicated desk",
			"Full kitchen",
			"Smart TV",
			"Linens & towels included",
			"A/C + heating",
			"Washing machine",
			"Rooftop terrace access",
			"Elevator",
		],
		description:
			"A bright, well-designed studio on the top floor of a boutique building in the heart of Roma Norte. The open layout makes excellent use of 55m² — a dedicated work area by the window, a full kitchen with everything you need, and a comfortable queen bed. The building has a shared rooftop terrace with views toward Chapultepec. Álvaro Obregón is two minutes on foot, with a dozen good cafes and restaurants in between.",
		highlights: [
			"2 min walk to Álvaro Obregón",
			"5 min walk to Parque México",
			"Building has elevator",
			"Doorman / concierge",
		],
		images: [
			"https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200&auto=format&fit=crop&q=80",
			"https://images.unsplash.com/photo-1554995207-c18c203602cb?w=1200&auto=format&fit=crop&q=80",
			"https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&auto=format&fit=crop&q=80",
		],
		featured: true,
	},
	{
		slug: "one-bedroom-condesa",
		title: "One-Bedroom on Tamaulipas",
		neighborhood: "La Condesa",
		city: "Mexico City",
		type: "Apartment",
		bedrooms: 1,
		bathrooms: 1,
		sqm: 68,
		price: 2100,
		minStay: 30,
		available: true,
		floor: "3rd floor",
		wifiSpeed: "500 Mbps symmetric",
		amenities: [
			"Dedicated desk",
			"Full kitchen",
			"Smart TV",
			"Linens & towels included",
			"A/C + ceiling fans",
			"Dishwasher",
			"Balcony",
			"Washing machine",
		],
		description:
			"A proper one-bedroom apartment on one of Condesa's best streets. The separate bedroom has blackout curtains and a firm king bed. The living area has a spacious desk setup, and the kitchen has a full-sized fridge, gas stovetop, oven, and dishwasher. A small balcony overlooks the tree-lined sidewalk below — good light in the mornings. Parque España is one block away.",
		highlights: [
			"1 block to Parque España",
			"Multiple cafes within 5 min walk",
			"Quiet tree-lined street",
			"24-hr security desk in building",
		],
		images: [
			"https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200&auto=format&fit=crop&q=80",
			"https://images.unsplash.com/photo-1484154218962-a197022b5858?w=1200&auto=format&fit=crop&q=80",
			"https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&auto=format&fit=crop&q=80",
		],
		featured: true,
	},
	{
		slug: "two-bedroom-polanco",
		title: "Two-Bedroom near Parque Lincoln",
		neighborhood: "Polanco",
		city: "Mexico City",
		type: "Apartment",
		bedrooms: 2,
		bathrooms: 2,
		sqm: 98,
		price: 2800,
		minStay: 30,
		available: false,
		availableDate: "April 1, 2026",
		floor: "8th floor",
		wifiSpeed: "500 Mbps symmetric",
		amenities: [
			"2 dedicated desks",
			"Full kitchen",
			"Smart TV in each room",
			"Linens & towels included",
			"A/C + heating",
			"Dishwasher",
			"Building gym",
			"Building pool",
			"Parking spot included",
			"Elevator",
		],
		description:
			"A spacious two-bedroom in a modern building one block from Parque Lincoln. Each bedroom has its own desk setup — ideal for couples who both work remotely, or for a longer arrangement needing a second room as a dedicated office. The building has a well-equipped gym and a pool. Two full bathrooms, a full kitchen, and a living room large enough to actually live in. Masaryk is a short walk.",
		highlights: [
			"1 block to Parque Lincoln",
			"Walking distance to Masaryk",
			"Building pool & gym",
			"Parking included",
		],
		images: [
			"https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=1200&auto=format&fit=crop&q=80",
			"https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=1200&auto=format&fit=crop&q=80",
			"https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=1200&auto=format&fit=crop&q=80",
		],
		featured: true,
	},
]

export const getListing = (slug: string): Listing | undefined =>
	listings.find((l) => l.slug === slug)
