import { useEffect, useState} from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import { HostVanDetailsNav } from "./HostNav";
// import type { vansValue } from "../../App";

// type ContextType = { van:vansValue | null };
export const HostedVanDetails = ()=> {
    const [singleVan,setSingleVan] = useState({
        description:"",
        id:"",
        imageUrl:"",
        name:"",
        price:0,
        type:""
    })
    const params = useParams()
    const fetchData = () =>{
         fetch("/api/vans/"+params['id']).then(res=>res.json()).then(res=>setSingleVan(res['vans']))
    }
    
    useEffect(()=> fetchData(),[])

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
