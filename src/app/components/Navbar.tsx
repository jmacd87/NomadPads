"use client"
import Image from "next/image"
import Link from "next/link"
import { useEffect } from "react"
import { FaGoogle } from "react-icons/fa"
import { useState } from "react"
import { HiMiniUserCircle } from "react-icons/hi2"
import { usePathname } from "next/navigation"
import {
	signIn,
	signOut,
	useSession,
	getProviders,
	ClientSafeProvider,
} from "next-auth/react"
import { useRouter } from "next/navigation"

const Navbar = () => {
	const { data: session } = useSession()
	const profileImage = session?.user?.image
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false)
	const [isProfileMenuOpen, setIsProfileMenuOpen] = useState<boolean>(false)
	const [providers, setProviders] = useState<ClientSafeProvider[] | null>(null)
	const pathname = usePathname()
	const router = useRouter()
	useEffect(() => {
		const setAuthProviders = async () => {
			const res = await getProviders()
			if (res) {
				setProviders(Object.values(res))
			}
		}
		setAuthProviders()
	}, [])
	const handleSignOut = async () => {
		setIsProfileMenuOpen(false)
		await signOut()
		router.push("/")
	}
	return (
		<nav className="h-16 bg-white border-b border-grey">
			<div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
				<div className="h-full relative flex h-20 items-center justify-between">
					<div className="absolute inset-y-0 left-0 flex items-center md:hidden">
						<button
							type="button"
							id="mobile-dropdown-button"
							className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
							aria-controls="mobile-menu"
							aria-expanded="false"
							onClick={() =>
								setIsMobileMenuOpen((prevState: boolean) => !prevState)
							}
						>
							<span className="absolute -inset-0.5"></span>
							<span className="sr-only">Open main menu</span>
							<svg
								className="block h-6 w-6"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth="1.5"
								stroke="currentColor"
								aria-hidden="true"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
								/>
							</svg>
						</button>
					</div>
					<div className="h-16 flex flex-1 items-center justify-center md:items-stretch md:justify-start">
						<a className="mb-2 md:mt-[5px]" href="/">
							{/* <Image className="h-10 w-auto" src={Logo} alt="Nomad Pads" /> */}
							<svg
								width="104.4"
								height="45"
								viewBox="0 0 350.00000000000006 150.8348376097664"
							>
								<defs id="SvgjsDefs2700"></defs>
								<g
									id="SvgjsG2701"
									transform="matrix(6.379875089891527,0,0,6.379875089891527,-3.8279274876641223,23.23734113571851)"
									fill="#3b82f6"
								>
									<path d="M5.38 1.3200000000000003 l0 18.68 l-1.62 0 l-1.58 -10.26 l0 10.26 l-1.58 0 l0 -18.68 l1.58 0 l1.58 10.1 l0 -10.1 l1.62 0 z M11.36 3.3599999999999994 l0 14.34 q0 2.3 -2.24 2.3 l0.88 0 l-1.18 0 q-1.2 0 -1.72 -0.61 t-0.52 -1.69 l0 -14.34 q0 -1.1 0.52 -1.7 t1.72 -0.6 l0.98 0 l-0.68 0 q2.24 0 2.24 2.3 z M9.700000000000001 3.5799999999999983 q0 -0.4 -0.16 -0.63 t-0.58 -0.23 t-0.57 0.23 t-0.15 0.63 l0 13.9 q0 0.4 0.15 0.63 t0.57 0.23 t0.58 -0.23 t0.16 -0.63 l0 -13.9 z M18.8 20 l0.1 -16.5 l-1.56 16.5 l-1.66 0 l-1.56 -16.5 l0.1 16.5 l-1.66 0 l0 -18.68 l3.12 0 l0.82 11.72 l0.84 -11.72 l3.12 0 l0 18.68 l-1.66 0 z M21.580000000000002 20 l0.98 -18.68 l2.82 0 l0.98 18.68 l-1.54 0 l-0.2 -3.9 l-0.28 0.4 q-0.52 0.72 -0.76 1.16 t-0.32 0.85 t-0.12 1.11 l-0.02 0.38 l-1.54 0 z M24.220000000000002 13.52 q0.18 -0.5 0.18 -1.42 l-0.44 -8.28 l-0.58 11.14 q0.66 -0.94 0.84 -1.44 z M32.34 17.7 q0 2.3 -2.24 2.3 l-2.54 0 l0 -18.68 l2.54 0 q2.24 0 2.24 2.32 l0 14.06 z M30.68 3.84 q0 -0.4 -0.16 -0.63 t-0.58 -0.23 l-0.72 0 l0 15.36 l0.72 0 q0.42 0 0.58 -0.23 t0.16 -0.63 l0 -13.64 z M38.339999999999996 3.6400000000000006 l0 2.8 q0 1.04 -0.16 1.72 t-0.51 1.31 t-1.15 1.75 q-0.82 1.12 -1.07 1.7 t-0.25 1.5 l0 5.58 l-1.66 0 l0 -18.68 l2.56 0 q2.24 0 2.24 2.32 z M35.199999999999996 2.9800000000000004 l0 7.2 q0.18 -0.24 0.2 -0.26 q0.8 -1.1 1.04 -1.7 t0.24 -1.56 l0 -2.82 q0 -0.4 -0.16 -0.63 t-0.58 -0.23 l-0.74 0 z M38.72 20 l0.98 -18.68 l2.82 0 l0.98 18.68 l-1.54 0 l-0.2 -3.9 l-0.28 0.4 q-0.52 0.72 -0.76 1.16 t-0.32 0.85 t-0.12 1.11 l-0.02 0.38 l-1.54 0 z M41.36 13.52 q0.18 -0.5 0.18 -1.42 l-0.44 -8.28 l-0.58 11.14 q0.66 -0.94 0.84 -1.44 z M49.48 17.7 q0 2.3 -2.24 2.3 l-2.54 0 l0 -18.68 l2.54 0 q2.24 0 2.24 2.32 l0 14.06 z M47.81999999999999 3.84 q0 -0.4 -0.16 -0.63 t-0.58 -0.23 l-0.72 0 l0 15.36 l0.72 0 q0.42 0 0.58 -0.23 t0.16 -0.63 l0 -13.64 z M52.58 8.22 q0.24 0.6 1.04 1.7 q0.8 1.12 1.16 1.74 t0.52 1.29 t0.16 1.71 l0 3.04 q0 2.3 -2.24 2.3 l-0.3 0 q-1.2 0 -1.72 -0.61 t-0.52 -1.69 l0 -4.66 l1.66 0 l0 4.44 q0 0.4 0.15 0.63 t0.57 0.23 t0.58 -0.23 t0.16 -0.63 l0 -3.06 q0 -0.92 -0.25 -1.5 t-1.05 -1.7 q-0.8 -1.1 -1.16 -1.74 t-0.51 -1.32 t-0.15 -1.72 l0 -3.08 q0 -1.1 0.52 -1.7 t1.72 -0.6 l0.3 0 q2.24 0 2.24 2.3 l0 4.7 l-1.66 0 l0 -4.48 q0 -0.4 -0.16 -0.63 t-0.58 -0.23 t-0.57 0.23 t-0.15 0.63 l0 3.08 q0 0.96 0.24 1.56 z"></path>
								</g>
							</svg>
						</a>
						<div className="flex h-full items-center md:ml-6 md:block hidden md:flex">
							{/* Add items-center here to vertically center the links */}
							<div className="h-full flex items-center space-x-2">
								<Link
									href="/"
									className={`relative inline-block text-black bg-white px-3 py-2 overflow-hidden ${
										pathname === "/" && "text-blue-500"
									}`}
								>
									Home
								</Link>
								<Link
									href="/properties"
									className={`relative inline-block text-black bg-white px-3 py-2 overflow-hidden ${
										pathname === "/properties" && "text-blue-500"
									}`}
								>
									Properties
								</Link>
								{session && (
									<Link
										href="/properties/add"
										className={`relative inline-block text-black bg-white px-3 py-2 overflow-hidden ${
											pathname === "/properties/add" && "text-blue-500"
										}`}
									>
										Add Property
									</Link>
								)}
							</div>
						</div>
					</div>
					{!session && (
						<div className="hidden md:block md:ml-6">
							<div className="flex items-center">
								{providers &&
									Object.values(providers).map((provider) => (
										<button
											key={provider.id}
											onClick={() => signIn(provider.id)}
											className="flex items-center text-white bg-black hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
										>
											<FaGoogle className="text-white mr-2" />
											<span>Login or Register</span>
										</button>
									))}
							</div>
						</div>
					)}

					<div className="absolute inset-y-0 right-0 flex items-center pr-2 md:static md:inset-auto md:ml-6 md:pr-0">
						{/* {session && (
							<Link href="/messages" className="relative group">
								<button
									type="button"
									className="relative rounded-full bg-black p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
								>
									<span className="absolute -inset-1.6"></span>
									<span className="sr-only">View notifications</span>
									<svg
										className="h-6 w-6"
										fill="none"
										viewBox="0 0 24 24"
										strokeWidth="1.5"
										stroke="currentColor"
										aria-hidden="true"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
										/>
									</svg>
								</button>
								<span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
									2
								</span>
							</Link>
						)} */}
						<div className="relative ml-3">
							{session && (
								<button
									type="button"
									className="relative flex rounded-full bg-black text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-white hover:text-white"
									id="user-menu-button"
									aria-expanded="false"
									aria-haspopup="true"
									onClick={() =>
										setIsProfileMenuOpen((prevState: boolean) => !prevState)
									}
								>
									<span className="absolute -inset-1.5"></span>
									<span className="sr-only">Open user menu</span>
									{profileImage ? (
										<Image
											className="rounded-full h-8 w-8"
											src={profileImage}
											width={40}
											height={40}
											alt="profile image"
										/>
									) : (
										<HiMiniUserCircle className="rounded-full h-8 w-8 text-gray-400 hover:bg-white" />
									)}
								</button>
							)}
							{isProfileMenuOpen && (
								<div
									id="user-menu"
									className=" absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
									role="menu"
									aria-orientation="vertical"
									aria-labelledby="user-menu-button"
									tabIndex={-1}
								>
									<Link
										href="/profile"
										className="block px-4 py-2 text-sm text-gray-700"
										role="menuitem"
										tabIndex={-1}
										id="user-menu-item-0"
										onClick={() => setIsProfileMenuOpen(false)}
									>
										Your Profile
									</Link>
									{/* <Link
										href="/properties/saved"
										className="block px-4 py-2 text-sm text-gray-700"
										role="menuitem"
										tabIndex={-1}
										id="user-menu-item-2"
									>
										Saved Properties
									</Link> */}
									<button
										className="block px-4 py-2 text-sm text-gray-700"
										role="menuitem"
										tabIndex={-1}
										id="user-menu-item-2"
										onClick={handleSignOut}
									>
										Sign Out
									</button>
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
			{isMobileMenuOpen && (
				<div
					id="mobile-menu"
					className="fixed z-50 border border-gray-300 bg-white shadow-lg min-w-[35%]"
				>
					<div className="space-y-1 px-2 pb-3 pt-2">
						<Link
							href="/"
							className={`bg-white text-black block rounded-md px-3 py-2 text-base font-medium hover:text-blue-500 ${
								pathname === "/" && "text-blue-500"
							}`}
							onClick={() => setIsMobileMenuOpen(false)}
						>
							Home
						</Link>
						<Link
							href="/properties"
							className={`bg-white text-black block rounded-md px-3 py-2 text-base font-medium hover:text-blue-500 ${
								pathname === "/properties" && "text-blue-500"
							}`}
							onClick={() => setIsMobileMenuOpen(false)}
						>
							Properties
						</Link>

						<Link
							href="/properties/add"
							className={`bg-white text-black block rounded-md px-3 py-2 text-base font-medium hover:text-blue-500 ${
								pathname === "/properties/add" && "text-blue-500"
							}`}
							onClick={() => setIsMobileMenuOpen(false)}
						>
							Add Property
						</Link>
						{!session &&
							providers &&
							Object.values(providers).map((provider) => (
								<button
									key={provider.id}
									onClick={() => signIn(provider.id)}
									className="flex items-center text-white bg-black hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
								>
									<FaGoogle className="text-white mr-2" />
									<span>Login or Register</span>
								</button>
							))}
					</div>
				</div>
			)}
		</nav>
	)
}

export default Navbar
