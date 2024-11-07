'use client'
import Image from "next/image";
import Link from 'next/link'
import { useState } from "react";
import deleteProperty from "@/src/app/actions/deleteProperty";
import { toast } from "react-toastify";

const ProfileProperties = ({properties: initialProperties}) => {
    const [properties, setProperties] = useState(initialProperties)

    const handleDeleteProperty = async(propertyId) => {
        const confirmed = window.confirm("Are you sure you want to delete this property?")
        if(!confirmed) return
        await deleteProperty(propertyId)

        const updatedProperties = properties.filter((property)=> property.id !== propertyId)

        setProperties(updatedProperties)
        toast.success('Property successfully deleted')
    }
    return ( 
    <section>
{properties.length === 0 && <h3>There are no listings</h3>}
{properties.map((property, index)=>(
    <div className="mb-10" key={index}>
    <Link href={`/properties/${property._id}`}>
        <Image
            className="h-45 w-full max-w-md rounded-md object-cover"
            src={property.images[index]}
            width={400}
            height={400}
            alt="Property 1"
        />
    </Link>
    <div className="mt-2">
        <p className="text-lg font-semibold">{property.name}</p>
        <p className="text-gray-600">{`${property.location.city}, ${property.location.state}` }</p>
    </div>
    <div className="mt-2">
        <Link
            href={`/properties/${property._id}/edit`}
            className="bg-blue-500 text-white px-3 py-3 rounded-md mr-2 hover:bg-blue-600"
        >
            Edit
        </Link>
        <button
            className="bg-red-500 text-white px-3 py-2 rounded-md hover:bg-red-600"
            type="button"
            onClick={() => handleDeleteProperty(property._id)}
        >
            Delete
        </button>
    </div>
    </div>))} </section>);
}
 
export default ProfileProperties;