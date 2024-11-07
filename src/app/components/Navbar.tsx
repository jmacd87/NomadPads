"use client"
import Logo from "@/assets/images/Nomadpads.png"
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
						<a className="h-16 flex flex-shrink-0 items-center" href="/">
							<Image className="h-[90%] w-auto" src={Logo} alt="Nomad Pads" />
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
						{session && (
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
						)}
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
									>
										Your Profile
									</Link>
									<Link
										href="/properties/saved"
										className="block px-4 py-2 text-sm text-gray-700"
										role="menuitem"
										tabIndex={-1}
										id="user-menu-item-2"
									>
										Saved Properties
									</Link>
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
						>
							Home
						</Link>
						<Link
							href="/properties"
							className={`bg-white text-black block rounded-md px-3 py-2 text-base font-medium hover:text-blue-500 ${
								pathname === "/properties" && "text-blue-500"
							}`}
						>
							Properties
						</Link>

						<Link
							href="/properties/add"
							className={`bg-white text-black block rounded-md px-3 py-2 text-base font-medium hover:text-blue-500 ${
								pathname === "/properties/add" && "text-blue-500"
							}`}
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
