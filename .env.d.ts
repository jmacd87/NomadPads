declare namespace NodeJS {
	interface ProcessEnv {
		MONGODB_URI: string // Server-side only
		NEXT_PUBLIC_DOMAIN: string // Public (client and server-side)
		NEXT_PUBLIC_API_DOMAIN: string // Public (client and server-side)
		NEXTAUTH_URL: string // Public (client and server-side)
		NEXTAUTH_URL_INTERNAL: string // Public (client and server-side)
		NEXTAUTH_SECRET: string // Public (client and server-side)
		CLOUDINARY_CLOUD_NAME: string
		CLOUDINARY_API_KEY: string
		CLOUDINARY_API_SECRET: string
		GOOGLE_CLIENT_ID: string
		GOOGLE_CLIENT_SECRET: string
		NEXT_PUBLIC_GOOGLE_GEOCODING_API_KEY: string
		NEXT_PUBLIC_MAPBOX_TOKEN: string
		NEXT_PUBLIC_GA_TRACKING_ID: string
	}
}
