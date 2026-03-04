import { useEffect, useState, type JSX } from "react";
import type { vansValue } from "../../App";
import { Link } from "react-router-dom";

export const HostedVans = ():JSX.Element => {

    const [vans,setVans]: any = useState([])

    useEffect(()=>{
        fetch("/api/host/vans").then(res=>res.json()).then(res=>setVans(res['vans']))
    },[])
    console.log(vans)
    return <div className="space-y-5 mx-10 mt-10">
        
        {
            vans && vans.map((van: vansValue, key:number)=>(
                <Link  key={key} to={`/host/vans/${van["id"]}`}>
                    <div className="flex gap-5 items-center ">
                        
                        <img src={van.imageUrl} className=" max-sm:w-1/2 sm:w-1/4 rounded" alt="" />
                        <div>
                            <h3 className="font-bold max-sm:text-xl sm:text-2xl">{van.name}</h3>
                            <p  className="font-semibold">${van.price}/day</p>
                        </div>
                    </div>
                </Link>
            ))
        }
    </div>
}