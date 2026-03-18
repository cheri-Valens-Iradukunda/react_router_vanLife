import { Link, Outlet, useLoaderData } from "react-router-dom";
import { HostVanDetailsNav } from "./HostNav";



export const HostedVanDetails = ()=> {
    
    const singleVan = useLoaderData()

    return <div className="p-10 space-y-5">
        <Link
                to=".."
                relative="path"// this makes button goes back based on path not relative of route
                className="back-button"
            >&larr; <span>Back to all vans</span></Link>
        <img src={singleVan['imageUrl']} alt=" van image" className="rounded-xl" />
        
        <HostVanDetailsNav />
        <Outlet context = {{singleVan}} />
        </div>
}
