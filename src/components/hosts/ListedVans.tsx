import { useEffect, useState, type JSX } from "react";
import type { vansValue } from "../../App";
import { Link, useLoaderData } from "react-router-dom";
import { getHostVans } from "../Api";
import { RequireAuth } from "../Layout/utils";

export const LoadHostedVans = async() => {
    await RequireAuth()
    return getHostVans()
}

export const HostedVans = ():JSX.Element => {

    const vans = useLoaderData() as vansValue[]

    return <div className="space-y-5 mx-10 mt-10">
        
        {
            vans && vans.map((van: vansValue, key:number)=>(
                <Link  key={key} to={van["id"]}>
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