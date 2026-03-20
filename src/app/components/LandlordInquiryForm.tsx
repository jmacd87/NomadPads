"use client"
import { useState } from "react"
import { CheckCircle, Loader2 } from "lucide-react"

interface FormData {
	fullName: string
	email: string
	phone: string
	neighborhood: string
	propertyType: string
	bedrooms: string
	sqm: string
	currentRent: string
	furnished: string
	availability: string
	notes: string
}

const initial: FormData = {
	fullName: "",
	email: "",
	phone: "",
	neighborhood: "",
	propertyType: "",
	bedrooms: "",
	sqm: "",
	currentRent: "",
	furnished: "",
	availability: "",
	notes: "",
}

const LandlordInquiryForm = () => {
	const [form, setForm] = useState<FormData>(initial)
	const [loading, setLoading] = useState(false)
	const [submitted, setSubmitted] = useState(false)
	const [error, setError] = useState("")

	const handleChange = (
		e: React.ChangeEvent<
			HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
		>
	) => {
		setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
	}

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()
		setLoading(true)
		setError("")
		try {
			const res = await fetch("/api/landlord-inquiry", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(form),
			})
			if (!res.ok) throw new Error()
			setSubmitted(true)
		} catch {
			setError(
				"Something went wrong. Contact us at hello@rentista.mx"
			)
		} finally {
			setLoading(false)
		}
	}

	if (submitted) {
		return (
			<div className="bg-white rounded-2xl p-8 border border-border text-center shadow-sm">
				<div className="w-14 h-14 bg-forest/10 rounded-full flex items-center justify-center mx-auto mb-4">
					<CheckCircle size={28} className="text-forest" />
				</div>
				<h3 className="text-2xl font-extrabold text-ink mb-2">
					Inquiry received
				</h3>
				<p className="text-sm text-smoke leading-relaxed">
					We&apos;ll be in touch within 48 hours to discuss your
					property and our terms.
				</p>
			</div>
		)
	}

	const inputCls =
		"w-full bg-stone border border-border rounded-xl px-4 py-2.5 text-sm text-ink placeholder:text-ash focus:outline-none focus:border-ink transition-colors"
	const labelCls = "block text-xs font-semibold text-smoke mb-1.5"

	return (
		<div className="bg-white rounded-2xl p-6 border border-border shadow-sm">
			<h3 className="text-xl font-extrabold text-ink mb-1">
				Submit your property
			</h3>
			<p className="text-sm text-smoke mb-5">
				We&apos;ll reach out within 48 hours to discuss terms.
			</p>

			<form onSubmit={handleSubmit} className="space-y-4">
				<div className="grid grid-cols-2 gap-3">
					<div>
						<label className={labelCls}>Full name *</label>
						<input
							type="text"
							name="fullName"
							required
							value={form.fullName}
							onChange={handleChange}
							className={inputCls}
						/>
					</div>
					<div>
						<label className={labelCls}>Email *</label>
						<input
							type="email"
							name="email"
							required
							value={form.email}
							onChange={handleChange}
							className={inputCls}
						/>
					</div>
				</div>

				<div>
					<label className={labelCls}>Phone / WhatsApp</label>
					<input
						type="tel"
						name="phone"
						value={form.phone}
						onChange={handleChange}
						placeholder="+52 55 0000 0000"
						className={inputCls}
					/>
				</div>

				<div className="grid grid-cols-2 gap-3">
					<div>
						<label className={labelCls}>Neighborhood *</label>
						<select
							name="neighborhood"
							required
							value={form.neighborhood}
							onChange={handleChange}
							className={inputCls}
						>
							<option value="">Select...</option>
							<option>Roma Norte</option>
							<option>Roma Sur</option>
							<option>La Condesa</option>
							<option>Polanco</option>
							<option>Juárez</option>
							<option>Narvarte</option>
							<option>Santa Fe</option>
							<option>Other CDMX</option>
						</select>
					</div>
					<div>
						<label className={labelCls}>Property type *</label>
						<select
							name="propertyType"
							required
							value={form.propertyType}
							onChange={handleChange}
							className={inputCls}
						>
							<option value="">Select...</option>
							<option>Studio</option>
							<option>Apartment</option>
							<option>Penthouse</option>
							<option>House</option>
						</select>
					</div>
				</div>

				<div className="grid grid-cols-3 gap-3">
					<div>
						<label className={labelCls}>Bedrooms</label>
						<select
							name="bedrooms"
							value={form.bedrooms}
							onChange={handleChange}
							className={inputCls}
						>
							<option value="">Select...</option>
							<option>Studio</option>
							<option>1</option>
							<option>2</option>
							<option>3+</option>
						</select>
					</div>
					<div>
						<label className={labelCls}>Size (m²)</label>
						<input
							type="text"
							name="sqm"
							value={form.sqm}
							onChange={handleChange}
							placeholder="e.g. 65"
							className={inputCls}
						/>
					</div>
					<div>
						<label className={labelCls}>Rent (MXN/mo)</label>
						<input
							type="text"
							name="currentRent"
							value={form.currentRent}
							onChange={handleChange}
							placeholder="18,000"
							className={inputCls}
						/>
					</div>
				</div>

				<div className="grid grid-cols-2 gap-3">
					<div>
						<label className={labelCls}>Currently furnished?</label>
						<select
							name="furnished"
							value={form.furnished}
							onChange={handleChange}
							className={inputCls}
						>
							<option value="">Select...</option>
							<option>Yes, fully furnished</option>
							<option>Partially furnished</option>
							<option>No — unfurnished</option>
						</select>
					</div>
					<div>
						<label className={labelCls}>When available?</label>
						<input
							type="text"
							name="availability"
							value={form.availability}
							onChange={handleChange}
							placeholder="Immediately, March 2026..."
							className={inputCls}
						/>
					</div>
				</div>

				<div>
					<label className={labelCls}>Additional notes</label>
					<textarea
						name="notes"
						value={form.notes}
						onChange={handleChange}
						rows={3}
						placeholder="Any details about the property or building."
						className={inputCls}
					/>
				</div>

				{error && (
					<p className="text-sm text-red-600">{error}</p>
				)}

				<button
					type="submit"
					disabled={loading}
					className="w-full bg-clay text-white py-3.5 rounded-full text-sm font-semibold hover:bg-clay-dark transition-colors flex items-center justify-center gap-2 disabled:opacity-60"
				>
					{loading && (
						<Loader2 size={15} className="animate-spin" />
					)}
					{loading ? "Submitting..." : "Submit Inquiry"}
				</button>
			</form>
		</div>
	)
}

export default LandlordInquiryForm
