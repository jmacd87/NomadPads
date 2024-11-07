import connectDB from "@/config/database"
import User from "@/models/User"
import { NextAuthOptions } from "next-auth"
import GoogleProvider from "next-auth/providers/google"

export const authOptions: NextAuthOptions = {
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID || "",
			clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
			authorization: {
				params: {
					prompt: "consent",
					access_type: "offline",
					response_type: "code",
				},
			},
		}),
		// ...add more providers here
	],
	callbacks: {
		async signIn({ profile }) {
			await connectDB()
			const userExists = await User.findOne({ email: profile?.email })
			if (!userExists) {
				const username = profile?.name?.slice(0, 20)

				await User.create({
					email: profile?.email,
					username,
					image: profile?.image,
				})
			}
			return true // Must return a boolean to continue with sign-in
		},
		async session({ session }) {
			const user = await User.findOne({ email: session?.user?.email })
			if (user && session.user) {
				// Return a new session object with the updated user id
				return {
					...session,
					user: {
						...session.user,
						id: user._id.toString(),
					},
				}
			}
			return session
		},
	},
}
