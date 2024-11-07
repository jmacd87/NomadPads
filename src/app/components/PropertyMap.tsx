"use client"
import { useEffect, useState } from "react"
import { setDefaults, fromAddress } from "react-geocode"
import { Property as PropertyType } from "../types/interfaces"
import Map, { Marker } from "react-map-gl"
import "mapbox-gl/dist/mapbox-gl.css"
import Image from "next/image"
import pin from "@/assets/images/pin.svg"
import Spinner from "./Spinner"

// Set up Google Geocode API defaults
setDefaults({
	key: process.env.NEXT_PUBLIC_GOOGLE_GEOCODING_API_KEY as string,
	language: "en",
	region: "us",
})

// Define the interface for the viewport state
interface ViewportProps {
	latitude: number
	longitude: number
	zoom: number
	width: string
	height: string
}

const PropertyMap: React.FC<{ property: PropertyType }> = ({ property }) => {
	const [lat, setLat] = useState<number | null>(null)
	const [lng, setLng] = useState<number | null>(null)
	const [viewport, setViewport] = useState<ViewportProps>({
		latitude: 0,
		longitude: 0,
		zoom: 12,
		width: "100%",
		height: "500px",
	})
	const [loading, setLoading] = useState<boolean>(true)
	const [geocodeError, setGeocodeError] = useState<boolean>(false)

	useEffect(() => {
		const fetchCoords = async () => {
			try {
				const res = await fromAddress(
					`${property.location.street} ${property.location.city} ${property.location.state} ${property.location.zipcode}`
				)

				if (res.results.length === 0) {
					setGeocodeError(true)
					return
				}
				const { lat, lng } = res.results[0]?.geometry?.location

				setLat(lat)
				setLng(lng)
				setViewport({
					...viewport,
					latitude: lat,
					longitude: lng,
				})
			} catch (error) {
				console.error("Geocode error:", error)
				setGeocodeError(true)
			} finally {
				setLoading(false)
			}
		}
		fetchCoords()
	}, []) // Fetch coordinates when property.location changes

	if (loading) return <Spinner />
	if (geocodeError)
		return <div className="text-3xl">No location data found</div>

	return (
		lat &&
		lng && (
			<Map
				mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
				mapLib={import("mapbox-gl")}
				initialViewState={{
					longitude: lng,
					latitude: lat,
					zoom: 12,
				}}
				style={{ width: "100%", height: 300 }}
				mapStyle="mapbox://styles/mapbox/streets-v9"
			>
				<Marker longitude={lng} latitude={lat} anchor="bottom">
					<Image src={pin} alt="location" width={40} height={40} />
				</Marker>
			</Map>
		)
	)
}

export default PropertyMap
