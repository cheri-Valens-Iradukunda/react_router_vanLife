import { type JSX } from "react";
import { Link, useLoaderData, useLocation } from "react-router-dom";
import { getVans } from "./Api";
import type { vansValue } from "../App";
import { RequireAuth } from "./Layout/utils";

export async function LoadVanDetails({ params }:any) {
    await RequireAuth()
    return getVans(params["id"])
}

export const VanDetails = (): JSX.Element => {
    
    const location = useLocation()
    const singleVan = useLoaderData() as vansValue
    
    const search = location.state?.state || ""

    return <div className="p-10 space-y-5">
        <Link
            to={`/vans${search ? `?${search}` : ""}`}
            relative="path"
            className="underline bg-gray-300 rounded px-3 py-1"
        >Go Back</Link>
        <img src={singleVan['imageUrl']} alt=" van image" className="rounded-xl mt-3" />
        <p className="bg-[#FF8C38] px-3 py-1 w-fit text-white rounded">{singleVan["type"]}</p>
        <h3 className="font-bold text-3xl">{singleVan["name"]}</h3>
        <p className="text-xl"><span className="font-bold">${singleVan["price"]}</span> /day</p>
        <p>{singleVan["description"]}</p>
        <button className="bg-[#FF8C38] w-full text-white py-3 rounded">Rent this van</button>

    </div>
}