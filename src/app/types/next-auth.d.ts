import { DefaultSession } from "next-auth"

declare module "next-auth" {
	interface User {
		id: string // Add the id property to User
	}

	interface Session {
		user: {
			id: string // Ensure the id property is included here
		} & DefaultSession["user"] // Include other properties from the default user
	}
}
