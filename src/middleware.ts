export { default } from "next-auth/middleware"
export const config = {
	matcher: ["/properties/add", "/profile", "/messages"], // Add other protected routes as needed
}
