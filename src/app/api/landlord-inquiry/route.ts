import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
	try {
		const body = await req.json()

		const { fullName, email, neighborhood, propertyType } = body

		if (!fullName || !email) {
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
		//   subject: `Landlord inquiry: ${neighborhood} ${propertyType} — ${fullName}`,
		//   html: `...`,
		// })

		console.log("New landlord inquiry:", {
			fullName,
			email,
			neighborhood,
			propertyType,
		})

		return NextResponse.json({ success: true })
	} catch (err) {
		console.error("Landlord inquiry route error:", err)
		return NextResponse.json(
			{ error: "Internal server error" },
			{ status: 500 }
		)
	}
}
