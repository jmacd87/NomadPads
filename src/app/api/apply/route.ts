import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
	try {
		const body = await req.json()

		const {
			fullName,
			email,
			listingTitle,
			listingSlug,
			moveInDate,
			stayDuration,
			nationality,
		} = body

		// Validate required fields
		if (!fullName || !email || !listingSlug || !moveInDate) {
			return NextResponse.json(
				{ error: "Missing required fields" },
				{ status: 400 }
			)
		}

		// TODO: Send email via Resend (or another provider) when configured
		// Example:
		// const resend = new Resend(process.env.RESEND_API_KEY)
		// await resend.emails.send({
		//   from: "Rentista <hello@rentista.mx>",
		//   to: "hello@rentista.mx",
		//   subject: `New Application: ${listingTitle} — ${fullName}`,
		//   html: `...`,
		// })

		// Log for now (replace with your email/CRM integration)
		console.log("New tenant application:", {
			fullName,
			email,
			listingTitle,
			listingSlug,
			moveInDate,
			stayDuration,
			nationality,
		})

		return NextResponse.json({ success: true })
	} catch (err) {
		console.error("Apply route error:", err)
		return NextResponse.json(
			{ error: "Internal server error" },
			{ status: 500 }
		)
	}
}
