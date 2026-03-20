import Link from "next/link"
import { ArrowRight, CheckCircle, XCircle } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
	title: "How It Works — Rent in Mexico City Without a Fiador",
	description:
		"Understand the Rentista screening process. What we check, what we don't require, timeline from application to move-in, and FAQ for foreign tenants in CDMX.",
}

const steps = [
	{
		num: "01",
		title: "Browse and select a listing",
		copy: "Find an apartment that matches your dates, budget, and neighborhood. Check the availability indicator — 'Available now' means you can apply immediately.",
	},
	{
		num: "02",
		title: "Submit your application",
		copy: "Fill in the application form on the listing page. About 10 minutes. You need: your email, nationality, move-in date, planned duration, income info, and optionally a credit report link.",
	},
	{
		num: "03",
		title: "We review within 24 hours",
		copy: "We assess your credit score, verify your income-to-rent ratio (minimum 3×), and check rental history. We may follow up by WhatsApp if we need clarification.",
	},
	{
		num: "04",
		title: "Receive your approval and lease",
		copy: "If approved, you receive a bilingual (Spanish/English) lease by email. The lease is between you and Rentista — you never deal directly with the Mexican landlord.",
	},
	{
		num: "05",
		title: "Sign and pay",
		copy: "Sign the lease electronically. Pay first month plus one-month refundable deposit via bank transfer, Wise, or Revolut. We accept USD and MXN.",
	},
	{
		num: "06",
		title: "Keys and welcome guide",
		copy: "Within 24 hours of payment, we coordinate key handoff. You receive wifi passwords, building codes, emergency contacts, and neighborhood recommendations.",
	},
]

const faqs = [
	{
		q: "I'm on a tourist visa (FMM). Can I still apply?",
		a: "Yes. Tourist visa holders are welcome. CDMX does not require residency to rent. Our screening uses US or international financial credentials, not Mexican immigration status. Many of our tenants are on 180-day tourist visas.",
	},
	{
		q: "I don't have a US credit score. What do you accept?",
		a: "We accept credit reports from any major market: Canada, UK, Germany, Australia, and most EU countries. If you have limited credit history, we put more weight on income verification and rental references.",
	},
	{
		q: "What income-to-rent ratio do you require?",
		a: "Your monthly income must be at least 3× the monthly rent. For a $2,100/mo apartment, we need to see at least $6,300/mo in verifiable income.",
	},
	{
		q: "How do I prove my income?",
		a: "Acceptable documentation includes: recent pay stubs or employment letter, last 3 months of bank statements, freelance contracts, or a letter from your employer.",
	},
	{
		q: "What does the deposit cover?",
		a: "One month's rent, refundable after a property inspection at lease end. Returned in full within 10 business days if the property is in the condition received.",
	},
	{
		q: "What are my payment options?",
		a: "We accept USD or MXN via: international bank wire, Wise, Revolut, or Mexican SPEI. Rent is due on the same date each month.",
	},
	{
		q: "What happens if I need to leave early?",
		a: "Leases are month-to-month with 30 days notice. No long-term lock-in. If you need to leave before the 30-day minimum, we discuss on a case-by-case basis.",
	},
	{
		q: "Is the apartment registered? Will I have a proper lease?",
		a: "Yes. You receive a formal bilingual contrato de arrendamiento signed by Rentista as the legal tenant-operator. Rentista is a Mexican SAPI de CV registered in CDMX.",
	},
	{
		q: "What utilities and services are included?",
		a: "All apartments include high-speed internet, electricity, water, and gas in the monthly rent. No hidden utility bills. Cleaning is available at additional cost on request.",
	},
	{
		q: "Can I extend my stay?",
		a: "Yes, anytime with 15 days notice before your current term ends. Same rate unless market conditions require an adjustment, communicated 30 days in advance.",
	},
]

const HowItWorksPage = () => {
	return (
		<div className="bg-white min-h-screen">
			{/* Hero */}
			<section className="bg-stone border-b border-border py-16">
				<div className="max-w-6xl mx-auto px-4 sm:px-6">
					<p className="text-xs font-semibold text-clay uppercase tracking-widest mb-2">
						For Tenants
					</p>
					<h1 className="text-5xl font-extrabold text-ink mb-4 max-w-2xl">
						How renting with Rentista works
					</h1>
					<p className="text-smoke max-w-xl leading-relaxed">
						A transparent look at our screening process, what we
						check, what we don&apos;t require, and the timeline from
						application to move-in.
					</p>
				</div>
			</section>

			{/* We check / We don't require */}
			<section className="py-16 bg-white">
				<div className="max-w-6xl mx-auto px-4 sm:px-6">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl">
						<div className="bg-forest/5 border border-forest/20 rounded-2xl p-6">
							<h2 className="font-bold text-ink mb-4 flex items-center gap-2">
								<CheckCircle size={16} className="text-forest" />
								What we check
							</h2>
							<ul className="space-y-3 text-sm">
								{[
									"US or international credit score",
									"Income-to-rent ratio (minimum 3×)",
									"Previous rental history and references",
									"Identity verification (passport or ID)",
									"Proof of income",
								].map((item) => (
									<li
										key={item}
										className="flex items-start gap-2 text-smoke"
									>
										<span className="text-forest font-bold mt-0.5">✓</span>
										{item}
									</li>
								))}
							</ul>
						</div>

						<div className="bg-clay/5 border border-clay/20 rounded-2xl p-6">
							<h2 className="font-bold text-ink mb-4 flex items-center gap-2">
								<XCircle size={16} className="text-clay" />
								What we do not require
							</h2>
							<ul className="space-y-3 text-sm">
								{[
									"Fiador (Mexican guarantor)",
									"Póliza de arrendamiento",
									"Mexican bank account",
									"Mexican credit history",
									"Permanent or temporary residency",
									"CURP or RFC (Mexican tax ID)",
								].map((item) => (
									<li
										key={item}
										className="flex items-start gap-2 text-smoke"
									>
										<span className="text-clay font-bold mt-0.5">×</span>
										{item}
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</section>

			{/* Steps */}
			<section className="py-16 bg-stone border-y border-border">
				<div className="max-w-6xl mx-auto px-4 sm:px-6">
					<h2 className="text-3xl font-extrabold text-ink mb-12">
						Step by step
					</h2>
					<div className="space-y-0 max-w-3xl">
						{steps.map((step, i) => (
							<div
								key={step.num}
								className="flex gap-6 pb-10 relative"
							>
								{i < steps.length - 1 && (
									<div className="absolute left-5 top-10 bottom-0 w-px bg-border" />
								)}
								<div className="flex-shrink-0 w-10 h-10 rounded-full bg-clay/10 flex items-center justify-center z-10">
									<span className="text-sm font-extrabold text-clay">
										{i + 1}
									</span>
								</div>
								<div className="flex-1 pt-1.5">
									<h3 className="font-bold text-ink mb-1.5">
										{step.title}
									</h3>
									<p className="text-sm text-smoke leading-relaxed">
										{step.copy}
									</p>
								</div>
							</div>
						))}
					</div>

					<Link
						href="/listings"
						className="inline-flex items-center gap-2 bg-clay text-white px-7 py-3.5 rounded-full text-sm font-semibold hover:bg-clay-dark transition-colors"
					>
						Browse available listings <ArrowRight size={15} />
					</Link>
				</div>
			</section>

			{/* Timeline */}
			<section className="py-16 bg-white">
				<div className="max-w-6xl mx-auto px-4 sm:px-6">
					<h2 className="text-3xl font-extrabold text-ink mb-8">
						Typical timeline
					</h2>
					<div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
						{[
							{ day: "Day 1", action: "You submit application" },
							{ day: "Day 1–2", action: "We review and decide" },
							{ day: "Day 2–3", action: "Lease sent for signature" },
							{ day: "Day 3–4", action: "Payment received, keys handed over" },
						].map(({ day, action }) => (
							<div
								key={day}
								className="bg-stone border border-border rounded-2xl p-5"
							>
								<p className="text-sm font-extrabold text-clay mb-1">
									{day}
								</p>
								<p className="text-sm text-ink">{action}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* FAQ */}
			<section
				id="faq"
				className="py-16 bg-stone border-t border-border"
			>
				<div className="max-w-6xl mx-auto px-4 sm:px-6">
					<h2 className="text-3xl font-extrabold text-ink mb-12">
						Frequently asked questions
					</h2>
					<div className="space-y-7 max-w-3xl">
						{faqs.map(({ q, a }) => (
							<div
								key={q}
								className="border-b border-border pb-7"
							>
								<h3 className="font-bold text-ink mb-2">{q}</h3>
								<p className="text-sm text-smoke leading-relaxed">
									{a}
								</p>
							</div>
						))}
					</div>

					<div className="mt-12 bg-ink rounded-2xl p-8 max-w-3xl">
						<h3 className="text-2xl font-extrabold text-white mb-2">
							Still have questions?
						</h3>
						<p className="text-sm text-white/60 mb-5">
							Message us on WhatsApp or email. We reply within a
							few hours during business days.
						</p>
						<div className="flex flex-col sm:flex-row gap-3">
							<a
								href="https://wa.me/5215500000000"
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center justify-center bg-clay text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-clay-dark transition-colors"
							>
								WhatsApp us
							</a>
							<a
								href="mailto:hello@rentista.mx"
								className="inline-flex items-center justify-center border border-white/20 text-white/80 px-6 py-3 rounded-full text-sm hover:border-white/50 transition-colors"
							>
								hello@rentista.mx
							</a>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}

export default HowItWorksPage
