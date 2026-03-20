import LandlordInquiryForm from "../components/LandlordInquiryForm"
import { Shield, RefreshCw, Users, FileText, Wrench, Clock } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
	title: "For Landlords — Reliable Institutional Tenant in Mexico City",
	description:
		"Rentista master-leases your CDMX property, furnishes it, and manages everything. You receive monthly rent as a single institutional tenant. No foreign tenant uncertainty.",
}

const benefits = [
	{
		icon: Shield,
		title: "We become your single tenant",
		copy: "Rentista signs your lease as a Mexican SAPI de CV. One counterparty — a registered company — not an individual foreigner you can't reference-check.",
	},
	{
		icon: Clock,
		title: "Rent paid reliably, every month",
		copy: "We pay on the agreed date regardless of whether our end tenants pay us. You are completely insulated from collection risk.",
	},
	{
		icon: Users,
		title: "We screen the end tenants",
		copy: "We apply rigorous international screening: credit score, income verification, and rental history. You never assess a foreign tenant's creditworthiness.",
	},
	{
		icon: Wrench,
		title: "We handle all operations",
		copy: "Maintenance, turnover cleaning, small repairs, and tenant management are handled by us. Your property has one point of contact: Rentista.",
	},
	{
		icon: RefreshCw,
		title: "We furnish the unit",
		copy: "We invest in furnishing the apartment to a professional standard. At lease end, you receive the property back in agreed condition.",
	},
	{
		icon: FileText,
		title: "Clean legal structure",
		copy: "Standard arrendamiento contract, signed by Rentista. Monthly rent receipts. We can coordinate with your contador.",
	},
]

const faqsLandlord = [
	{
		q: "What term do you sign the master lease for?",
		a: "We typically propose a 2-year initial term with option to extend. We prefer longer commitments because they justify our furnishing investment.",
	},
	{
		q: "What rent do you pay?",
		a: "We negotiate a fair market rate — you're trading some upside for certainty and zero management. We are transparent about our model and the spread we're making.",
	},
	{
		q: "What happens at the end of the lease?",
		a: "Joint inspection. The apartment is professionally cleaned and returned in agreed condition. We cover anything beyond normal wear and tear. We remove our furnishings unless agreed otherwise.",
	},
	{
		q: "Do I ever interact with the end tenants?",
		a: "No. Your legal relationship is exclusively with Rentista. End tenants have a separate agreement with us. You never deal with them directly.",
	},
	{
		q: "What if there is damage?",
		a: "Rentista is responsible during the master lease term. We hold a security deposit from each end tenant and carry operational reserves. You are not exposed to end-tenant damage claims.",
	},
	{
		q: "What neighborhoods do you cover?",
		a: "Currently Roma Norte, La Condesa, and Polanco. Properties in Juárez, Narvarte, or Santa Fe are evaluated case-by-case.",
	},
	{
		q: "What condition does the property need to be in?",
		a: "We prefer unfurnished properties in good condition so we can furnish to our standard. Working plumbing, electrical, and ideally A/C.",
	},
]

const ForLandlordsPage = () => {
	return (
		<div className="bg-white min-h-screen">
			{/* Hero */}
			<section className="bg-ink py-20">
				<div className="max-w-6xl mx-auto px-4 sm:px-6">
					<p className="text-xs font-semibold text-white/40 uppercase tracking-widest mb-3">
						For Property Owners
					</p>
					<h1 className="text-5xl sm:text-6xl font-extrabold text-white leading-tight mb-5 max-w-2xl">
						We become your single, reliable tenant.
					</h1>
					<p className="text-white/65 max-w-xl leading-relaxed">
						Rentista master-leases your property, furnishes it, and
						manages everything — including the foreign tenants who
						actually live there. You interact with us. Not with them.
					</p>
				</div>
			</section>

			{/* Problem / Solution */}
			<section className="py-16 bg-stone border-b border-border">
				<div className="max-w-6xl mx-auto px-4 sm:px-6">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
						<div>
							<h2 className="text-3xl font-extrabold text-ink mb-4">
								The problem with foreign tenants
							</h2>
							<div className="space-y-4 text-sm text-smoke leading-relaxed">
								<p>
									CDMX&apos;s rental market has a structural
									mismatch. Demand from digital nomads, remote
									workers, and expats has grown dramatically —
									but the traditional screening system was
									built for Mexican residents with local credit
									history, a fiador, or an arrendamiento
									póliza.
								</p>
								<p>
									Foreigners on tourist visas can&apos;t
									provide a fiador. They have no Mexican credit
									history. Landlords are left choosing between
									Airbnb&apos;s high fees or declining foreign
									tenants altogether.
								</p>
								<p className="font-semibold text-ink">
									We replace that uncertainty with certainty.
									You sign with a company, not an unknown
									individual.
								</p>
							</div>
						</div>

						<div className="space-y-4">
							<div className="bg-white border border-border rounded-2xl p-6">
								<p className="text-xs font-semibold text-smoke uppercase tracking-widest mb-3">
									Traditional model
								</p>
								<ul className="space-y-2 text-sm text-smoke">
									{[
										"Individual foreign tenant, unknown creditworthiness",
										"No fiador, no póliza available",
										"Uncertain payment reliability",
										"You manage maintenance and complaints",
										"No legal recourse if they default",
									].map((item) => (
										<li
											key={item}
											className="flex items-start gap-2"
										>
											<span className="text-ash font-bold">×</span>
											{item}
										</li>
									))}
								</ul>
							</div>
							<div className="bg-forest/5 border border-forest/20 rounded-2xl p-6">
								<p className="text-xs font-semibold text-forest uppercase tracking-widest mb-3">
									The Rentista model
								</p>
								<ul className="space-y-2 text-sm text-smoke">
									{[
										"Rentista SAPI de CV signs your lease",
										"We are a verifiable Mexican legal entity",
										"Rent paid reliably on the contracted date",
										"We handle all operations",
										"Standard arrendamiento contract",
									].map((item) => (
										<li
											key={item}
											className="flex items-start gap-2"
										>
											<span className="text-forest font-bold">✓</span>
											{item}
										</li>
									))}
								</ul>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Benefits */}
			<section className="py-16 bg-white">
				<div className="max-w-6xl mx-auto px-4 sm:px-6">
					<div className="text-center mb-12">
						<p className="text-xs font-semibold text-clay uppercase tracking-widest mb-3">
							What You Get
						</p>
						<h2 className="text-4xl font-extrabold text-ink">
							Everything handled. Always.
						</h2>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
						{benefits.map(({ icon: Icon, title, copy }, i) => (
							<div
								key={title}
								className="bg-stone border border-border rounded-2xl p-6 hover:shadow-md transition-shadow"
							>
								<div className="w-10 h-10 rounded-full bg-clay/10 flex items-center justify-center mb-4">
									<span className="text-sm font-extrabold text-clay">
										{i + 1}
									</span>
								</div>
								<h3 className="font-bold text-ink mb-2">
									{title}
								</h3>
								<p className="text-sm text-smoke leading-relaxed">
									{copy}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Trust signals */}
			<section className="py-12 bg-stone border-y border-border">
				<div className="max-w-6xl mx-auto px-4 sm:px-6">
					<div className="flex flex-col md:flex-row gap-10 md:gap-16">
						<div>
							<p className="text-xs font-semibold text-clay uppercase tracking-widest mb-4">
								About Rentista
							</p>
							<div className="space-y-1.5 text-sm text-smoke">
								<p>
									<span className="font-semibold text-ink">Legal entity:</span>{" "}
									Rentista Operations SAPI de CV
								</p>
								<p>
									<span className="font-semibold text-ink">Registered in:</span>{" "}
									Ciudad de México, México
								</p>
								<p>
									<span className="font-semibold text-ink">Contract:</span>{" "}
									Standard contrato de arrendamiento
								</p>
							</div>
						</div>
						<div className="md:border-l md:border-border md:pl-16">
							<p className="text-xs font-semibold text-clay uppercase tracking-widest mb-4">
								What we look for
							</p>
							<ul className="space-y-1.5 text-sm text-smoke">
								{[
									"Roma Norte, La Condesa, or Polanco",
									"50m² minimum for studios, 65m²+ for 1BR+",
									"Good natural light and ventilation",
									"A/C or strong ceiling fans",
									"Building security",
									"Preferably unfurnished",
								].map((item) => (
									<li key={item} className="flex items-center gap-2">
										<span className="w-1 h-1 bg-clay rounded-full flex-shrink-0" />
										{item}
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</section>

			{/* FAQ */}
			<section className="py-16 bg-white">
				<div className="max-w-6xl mx-auto px-4 sm:px-6">
					<h2 className="text-3xl font-extrabold text-ink mb-10">
						Common questions from landlords
					</h2>
					<div className="space-y-7 max-w-3xl">
						{faqsLandlord.map(({ q, a }) => (
							<div key={q} className="border-b border-border pb-7">
								<h3 className="font-bold text-ink mb-2">{q}</h3>
								<p className="text-sm text-smoke leading-relaxed">{a}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Inquiry form */}
			<section
				id="inquiry"
				className="py-16 bg-stone border-t border-border"
			>
				<div className="max-w-6xl mx-auto px-4 sm:px-6">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
						<div>
							<p className="text-xs font-semibold text-clay uppercase tracking-widest mb-3">
								Get Started
							</p>
							<h2 className="text-4xl font-extrabold text-ink mb-4">
								Tell us about your property
							</h2>
							<p className="text-smoke text-sm leading-relaxed mb-5">
								Fill in the form and we&apos;ll reach out within
								48 hours to discuss your property, our proposed
								terms, and any questions you have.
							</p>
							<p className="text-sm text-smoke">
								Prefer to call?{" "}
								<a
									href="https://wa.me/5215500000000"
									target="_blank"
									rel="noopener noreferrer"
									className="font-semibold text-clay hover:text-clay-dark"
								>
									WhatsApp us at +52 55 0000 0000
								</a>
							</p>
						</div>
						<LandlordInquiryForm />
					</div>
				</div>
			</section>
		</div>
	)
}

export default ForLandlordsPage
