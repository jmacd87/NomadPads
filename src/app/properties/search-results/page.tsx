import { redirect } from "next/navigation"

export default function SearchResultsRedirect() {
	redirect("/listings")
}
