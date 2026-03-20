import Link from "next/link"

const Footer = () => {
	return (
		<footer className="bg-ink text-white/70 py-14 mt-auto">
			<div className="max-w-6xl mx-auto px-4 sm:px-6">
				<div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-10 border-b border-white/10">
					{/* Brand */}
					<div className="md:col-span-2">
						<Link
							href="/"
							className="text-xl font-bold text-white"
							style={{ fontFamily: "var(--font-display)" }}
						>
							Rent<span className="text-clay">ista</span>
						</Link>
						<p className="mt-3 text-sm text-white/50 max-w-xs leading-relaxed">
							Furnished medium-term rentals in Mexico City for
							foreign professionals. No fiador. No poliza.
							Flexible from 30 days.
						</p>
						<div className="mt-5 space-y-0.5 text-xs text-white/30">
							<p>Rentista Operations SAPI de CV</p>
							<p>Ciudad de México, México</p>
						</div>
					</div>

					{/* Tenants */}
					<div>
						<h3 className="text-xs font-semibold text-white/30 uppercase tracking-widest mb-4">
							For Tenants
						</h3>
						<ul className="space-y-2.5 text-sm">
							<li>
								<Link
									href="/listings"
									className="hover:text-white transition-colors"
								>
									Browse Listings
								</Link>
							</li>
							<li>
								<Link
									href="/how-it-works"
									className="hover:text-white transition-colors"
								>
									How It Works
								</Link>
							</li>
							<li>
								<Link
									href="/neighborhoods"
									className="hover:text-white transition-colors"
								>
									Neighborhoods
								</Link>
							</li>
							<li>
								<Link
									href="/how-it-works#faq"
									className="hover:text-white transition-colors"
								>
									FAQ
								</Link>
							</li>
						</ul>
					</div>

					{/* Landlords + Contact */}
					<div>
						<h3 className="text-xs font-semibold text-white/30 uppercase tracking-widest mb-4">
							For Landlords
						</h3>
						<ul className="space-y-2.5 text-sm mb-7">
							<li>
								<Link
									href="/for-landlords"
									className="hover:text-white transition-colors"
								>
									Our Model
								</Link>
							</li>
							<li>
								<Link
									href="/for-landlords#inquiry"
									className="hover:text-white transition-colors"
								>
									Submit Property
								</Link>
							</li>
						</ul>
						<h3 className="text-xs font-semibold text-white/30 uppercase tracking-widest mb-4">
							Contact
						</h3>
						<div className="space-y-1.5 text-sm">
							<a
								href="https://wa.me/5215500000000"
								target="_blank"
								rel="noopener noreferrer"
								className="hover:text-white transition-colors block"
							>
								WhatsApp: +52 55 0000 0000
							</a>
							<a
								href="mailto:hello@rentista.mx"
								className="hover:text-white transition-colors block"
							>
								hello@rentista.mx
							</a>
						</div>
					</div>
				</div>

				<div className="pt-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-3 text-xs text-white/30">
					<p>
						&copy; {new Date().getFullYear()} Rentista. All rights
						reserved.
					</p>
					<div className="flex gap-5">
						<Link
							href="/terms"
							className="hover:text-white/60 transition-colors"
						>
							Terms of Service
						</Link>
						<Link
							href="/privacy"
							className="hover:text-white/60 transition-colors"
						>
							Privacy Policy
						</Link>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
