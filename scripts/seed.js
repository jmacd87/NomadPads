/**
 * Rentista — Database seed script
 *
 * Clears the existing properties collection and inserts CDMX listings.
 * Also creates a placeholder admin owner user if one does not already exist.
 *
 * Usage:
 *   node scripts/seed.js
 *
 * Requires MONGODB_URI to be set in .env.local (read automatically).
 */

const fs = require("fs")
const path = require("path")
const mongoose = require("mongoose")

// ── Env loader ────────────────────────────────────────────────────────────────
// Reads .env.local without requiring the dotenv package.
function loadEnv() {
	const envPath = path.join(__dirname, "..", ".env.local")
	if (!fs.existsSync(envPath)) {
		console.warn("No .env.local found — falling back to process.env")
		return
	}
	const lines = fs.readFileSync(envPath, "utf-8").split("\n")
	for (const line of lines) {
		const trimmed = line.trim()
		if (!trimmed || trimmed.startsWith("#")) continue
		const eqIdx = trimmed.indexOf("=")
		if (eqIdx === -1) continue
		const key = trimmed.slice(0, eqIdx).trim()
		const val = trimmed.slice(eqIdx + 1).trim().replace(/^["']|["']$/g, "")
		if (!process.env[key]) process.env[key] = val
	}
}

loadEnv()

// ── Mongoose models ───────────────────────────────────────────────────────────
const UserSchema = new mongoose.Schema(
	{
		email: { type: String, unique: true, required: true },
		username: { type: String, required: true },
		image: String,
		bookmarks: [{ type: mongoose.Schema.Types.ObjectId, ref: "Property" }],
	},
	{ timestamps: true }
)

const PropertySchema = new mongoose.Schema(
	{
		owner: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
			required: true,
		},
		name: { type: String, required: true },
		type: { type: String, required: true },
		description: String,
		location: {
			street: String,
			city: String,
			state: String,
			zipcode: String,
		},
		beds: { type: Number, required: true },
		baths: { type: Number, required: true },
		square_feet: { type: Number, required: true },
		amenities: [String],
		rates: {
			nightly: Number,
			weekly: Number,
			monthly: Number,
		},
		seller_info: {
			name: String,
			email: String,
			phone: String,
		},
		images: [String],
		isFeatured: Boolean,
	},
	{ timestamps: true }
)

const User =
	mongoose.models.User || mongoose.model("User", UserSchema)
const Property =
	mongoose.models.Property || mongoose.model("Property", PropertySchema)

// ── Seed data ─────────────────────────────────────────────────────────────────
const LISTINGS = [
	{
		name: "Top-Floor Studio with Terrace",
		type: "Studio",
		description:
			"A bright, well-designed studio on the top floor of a boutique building in the heart of Roma Norte. The open layout makes excellent use of 55m² — a dedicated work area by the window, a full kitchen with everything you need, and a comfortable queen bed. The building has a shared rooftop terrace with views toward Chapultepec. Álvaro Obregón is two minutes on foot.",
		location: {
			street: "Álvaro Obregón 123",
			city: "Mexico City",
			state: "Roma Norte",
			zipcode: "06700",
		},
		beds: 0,
		baths: 1,
		square_feet: 592, // 55 m²
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
		rates: {
			monthly: 1650,
		},
		seller_info: {
			name: "Rentista",
			email: "hello@rentista.mx",
			phone: "+52 55 0000 0000",
		},
		images: [
			"https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200&auto=format&fit=crop&q=80",
			"https://images.unsplash.com/photo-1554995207-c18c203602cb?w=1200&auto=format&fit=crop&q=80",
			"https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&auto=format&fit=crop&q=80",
		],
		isFeatured: true,
	},
	{
		name: "One-Bedroom on Tamaulipas",
		type: "Apartment",
		description:
			"A proper one-bedroom apartment on one of Condesa's best streets. The separate bedroom has blackout curtains and a firm king bed. The living area has a spacious desk setup, and the kitchen has a full-sized fridge, gas stovetop, oven, and dishwasher. A small balcony overlooks the tree-lined sidewalk below. Parque España is one block away.",
		location: {
			street: "Tamaulipas 204",
			city: "Mexico City",
			state: "La Condesa",
			zipcode: "06140",
		},
		beds: 1,
		baths: 1,
		square_feet: 732, // 68 m²
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
		rates: {
			monthly: 2100,
		},
		seller_info: {
			name: "Rentista",
			email: "hello@rentista.mx",
			phone: "+52 55 0000 0000",
		},
		images: [
			"https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200&auto=format&fit=crop&q=80",
			"https://images.unsplash.com/photo-1484154218962-a197022b5858?w=1200&auto=format&fit=crop&q=80",
			"https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&auto=format&fit=crop&q=80",
		],
		isFeatured: true,
	},
	{
		name: "Two-Bedroom near Parque Lincoln",
		type: "Apartment",
		description:
			"A spacious two-bedroom in a modern building one block from Parque Lincoln. Each bedroom has its own desk setup — ideal for couples who both work remotely, or for a longer arrangement needing a dedicated office. The building has a well-equipped gym and a pool. Two full bathrooms, a full kitchen, and a real living room. Masaryk is a short walk.",
		location: {
			street: "Presidente Masaryk 45",
			city: "Mexico City",
			state: "Polanco",
			zipcode: "11560",
		},
		beds: 2,
		baths: 2,
		square_feet: 1055, // 98 m²
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
		rates: {
			monthly: 2800,
		},
		seller_info: {
			name: "Rentista",
			email: "hello@rentista.mx",
			phone: "+52 55 0000 0000",
		},
		images: [
			"https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=1200&auto=format&fit=crop&q=80",
			"https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=1200&auto=format&fit=crop&q=80",
			"https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=1200&auto=format&fit=crop&q=80",
		],
		isFeatured: true,
	},
]

// ── Main ──────────────────────────────────────────────────────────────────────
async function seed() {
	const uri = process.env.MONGODB_URI
	if (!uri) {
		console.error(
			"❌  MONGODB_URI is not set. Add it to .env.local and retry."
		)
		process.exit(1)
	}

	console.log("Connecting to MongoDB...")
	await mongoose.connect(uri)
	console.log("Connected.\n")

	// 1. Upsert admin owner user
	let owner = await User.findOne({ email: "hello@rentista.mx" })
	if (!owner) {
		owner = await User.create({
			email: "hello@rentista.mx",
			username: "Rentista Admin",
			image: null,
		})
		console.log("Created admin user:", owner.email)
	} else {
		console.log("Admin user already exists:", owner.email)
	}

	// 2. Clear existing properties
	const deleted = await Property.deleteMany({})
	console.log(`Cleared ${deleted.deletedCount} existing properties.`)

	// 3. Insert new listings
	const docs = LISTINGS.map((l) => ({ ...l, owner: owner._id }))
	const inserted = await Property.insertMany(docs)
	console.log(`\n✅  Inserted ${inserted.length} properties:`)
	inserted.forEach((p) =>
		console.log(`   - ${p.name} (${p.location.state}) — $${p.rates.monthly}/mo`)
	)

	await mongoose.disconnect()
	console.log("\nDone. Database disconnected.")
}

seed().catch((err) => {
	console.error("Seed failed:", err)
	process.exit(1)
})
