"use client"
import { useState } from "react"
import { CheckCircle, Loader2 } from "lucide-react"

interface Props {
	listingTitle: string
	listingSlug: string
}

interface FormData {
	fullName: string
	email: string
	phone: string
	nationality: string
	moveInDate: string
	stayDuration: string
	monthlyIncome: string
	employer: string
	creditReportLink: string
	visaStatus: string
	message: string
}

const initialForm: FormData = {
	fullName: "",
	email: "",
	phone: "",
	nationality: "",
	moveInDate: "",
	stayDuration: "",
	monthlyIncome: "",
	employer: "",
	creditReportLink: "",
	visaStatus: "",
	message: "",
}

const ApplicationForm = ({ listingTitle, listingSlug }: Props) => {
	const [form, setForm] = useState<FormData>(initialForm)
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
			const res = await fetch("/api/apply", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ ...form, listingTitle, listingSlug }),
			})
			if (!res.ok) throw new Error()
			setSubmitted(true)
		} catch {
			setError(
				"Something went wrong. Email us at hello@rentista.mx"
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
					Application received
				</h3>
				<p className="text-sm text-smoke leading-relaxed">
					We review applications within 24 hours. You&apos;ll hear
					from us at{" "}
					<span className="font-semibold text-ink">{form.email}</span>{" "}
					with next steps.
				</p>
				<p className="text-xs text-ash mt-4">
					Questions?{" "}
					<a
						href="https://wa.me/5215500000000"
						className="underline hover:text-smoke"
					>
						WhatsApp us
					</a>
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
				Apply for this apartment
			</h3>
			<p className="text-sm text-smoke mb-5">
				Takes ~10 min. No Mexican documents required.
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
							placeholder="Jane Smith"
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
							placeholder="jane@example.com"
							className={inputCls}
						/>
					</div>
				</div>

				<div className="grid grid-cols-2 gap-3">
					<div>
						<label className={labelCls}>Phone / WhatsApp</label>
						<input
							type="tel"
							name="phone"
							value={form.phone}
							onChange={handleChange}
							placeholder="+1 555 000 0000"
							className={inputCls}
						/>
					</div>
					<div>
						<label className={labelCls}>Nationality *</label>
						<input
							type="text"
							name="nationality"
							required
							value={form.nationality}
							onChange={handleChange}
							placeholder="US, Canadian..."
							className={inputCls}
						/>
					</div>
				</div>

				<div className="grid grid-cols-2 gap-3">
					<div>
						<label className={labelCls}>Move-in date *</label>
						<input
							type="date"
							name="moveInDate"
							required
							value={form.moveInDate}
							onChange={handleChange}
							className={inputCls}
						/>
					</div>
					<div>
						<label className={labelCls}>Stay duration *</label>
						<select
							name="stayDuration"
							required
							value={form.stayDuration}
							onChange={handleChange}
							className={inputCls}
						>
							<option value="">Select...</option>
							<option value="1-2 months">1–2 months</option>
							<option value="3-6 months">3–6 months</option>
							<option value="6-12 months">6–12 months</option>
							<option value="12+ months">12+ months</option>
						</select>
					</div>
				</div>

				<div>
					<label className={labelCls}>Visa / immigration status *</label>
					<select
						name="visaStatus"
						required
						value={form.visaStatus}
						onChange={handleChange}
						className={inputCls}
					>
						<option value="">Select...</option>
						<option>Tourist visa (FMM)</option>
						<option>Temporary resident</option>
						<option>Permanent resident</option>
						<option>Digital nomad visa</option>
						<option>Other</option>
					</select>
				</div>

				<div className="grid grid-cols-2 gap-3">
					<div>
						<label className={labelCls}>Monthly income (USD) *</label>
						<input
							type="text"
							name="monthlyIncome"
							required
							value={form.monthlyIncome}
							onChange={handleChange}
							placeholder="e.g. $6,000"
							className={inputCls}
						/>
					</div>
					<div>
						<label className={labelCls}>Employer / income source *</label>
						<input
							type="text"
							name="employer"
							required
							value={form.employer}
							onChange={handleChange}
							placeholder="Company or freelance"
							className={inputCls}
						/>
					</div>
				</div>

				<div>
					<label className={labelCls}>
						Credit report link{" "}
						<span className="text-ash font-normal">
							(optional — speeds approval)
						</span>
					</label>
					<input
						type="url"
						name="creditReportLink"
						value={form.creditReportLink}
						onChange={handleChange}
						placeholder="Experian, Credit Karma share link..."
						className={inputCls}
					/>
				</div>

				<div>
					<label className={labelCls}>Anything else?</label>
					<textarea
						name="message"
						value={form.message}
						onChange={handleChange}
						rows={3}
						placeholder="Your situation, questions, or notes."
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
					{loading ? "Submitting..." : "Submit Application"}
				</button>

				<p className="text-xs text-ash text-center">
					We respond within 24 hours. No fiador required. Tourist visa
					accepted.
				</p>
			</form>
		</div>
	)
}

export default ApplicationForm
