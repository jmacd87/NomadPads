"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Menu, X } from "lucide-react"

const NAV_LINKS = [
	{ href: "/listings", label: "Listings" },
	{ href: "/how-it-works", label: "How It Works" },
	{ href: "/neighborhoods", label: "Neighborhoods" },
	{ href: "/for-landlords", label: "For Landlords" },
]

const Navbar = () => {
	const pathname = usePathname()
	const [isOpen, setIsOpen] = useState(false)

	return (
		<nav className="bg-ink border-b border-white/10 sticky top-0 z-50">
			<div className="max-w-6xl mx-auto px-4 sm:px-6">
				<div className="flex items-center justify-between h-16">
					{/* Logo */}
					<Link
						href="/"
						className="text-xl font-bold tracking-tight text-white"
						style={{ fontFamily: "var(--font-display)" }}
					>
						Rent<span className="text-clay">ista</span>
					</Link>

					{/* Desktop nav */}
					<div className="hidden md:flex items-center gap-1">
						{NAV_LINKS.map(({ href, label }) => (
							<Link
								key={href}
								href={href}
								className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
									pathname === href ||
									pathname.startsWith(href + "/")
										? "text-white bg-white/10"
										: "text-white/60 hover:text-white hover:bg-white/10"
								}`}
							>
								{label}
							</Link>
						))}
					</div>

					{/* Desktop CTA */}
					<div className="hidden md:flex items-center gap-3">
						<a
							href="https://wa.me/5215500000000"
							target="_blank"
							rel="noopener noreferrer"
							className="text-sm font-medium text-white/60 hover:text-white transition-colors"
						>
							WhatsApp
						</a>
						<Link
							href="/listings"
							className="bg-clay text-white text-sm font-semibold px-5 py-2 rounded-full hover:bg-clay-dark transition-colors"
						>
							Browse Listings
						</Link>
					</div>

					{/* Mobile hamburger */}
					<button
						className="md:hidden text-white p-1"
						onClick={() => setIsOpen((v) => !v)}
						aria-label="Toggle menu"
					>
						{isOpen ? <X size={20} /> : <Menu size={20} />}
					</button>
				</div>
			</div>

			{/* Mobile menu */}
			{isOpen && (
				<div className="md:hidden bg-ink border-t border-white/10">
					<div className="px-4 py-4 space-y-1">
						{NAV_LINKS.map(({ href, label }) => (
							<Link
								key={href}
								href={href}
								className={`block px-3 py-2.5 text-sm font-medium rounded-lg ${
									pathname === href
										? "text-white bg-white/10"
										: "text-white/60 hover:text-white hover:bg-white/10"
								}`}
								onClick={() => setIsOpen(false)}
							>
								{label}
							</Link>
						))}
						<div className="pt-3 border-t border-white/10 mt-3 flex flex-col gap-2">
							<a
								href="https://wa.me/5215500000000"
								target="_blank"
								rel="noopener noreferrer"
								className="block px-3 py-2 text-sm text-white/60"
							>
								WhatsApp: +52 55 0000 0000
							</a>
							<Link
								href="/listings"
								className="bg-clay text-white text-sm font-semibold px-4 py-2.5 rounded-full text-center hover:bg-clay-dark transition-colors"
								onClick={() => setIsOpen(false)}
							>
								Browse Listings
							</Link>
						</div>
					</div>
				</div>
			)}
		</nav>
	)
}

export default Navbar
