import type { JSX } from "react";
import { NavLink, Outlet } from "react-router-dom";

export const HostNav = ():JSX.Element => {

    return <div>
        <nav className="flex gap-3 *:hover:underline *:hover:text-gray-300 text-gray-700">
            <NavLink className={({isActive}) => isActive ? "text-black underline":""} end to=".">Dashboard</NavLink>
            <NavLink className={({isActive}) => isActive ? "text-black underline":""} to="income">Income</NavLink>
            <NavLink className={({isActive}) => isActive ? "text-black underline":""} to="vans">Vans</NavLink>
            <NavLink className={({isActive}) => isActive ? "text-black underline":""} to="review">Review</NavLink>
        </nav>
        <Outlet />
    </div>
}

export const HostVanDetailsNav = () => {
    return <div>
        <nav className="flex gap-3 *:hover:underline *:hover:text-gray-300 text-gray-700">
            <NavLink className={({isActive}) => isActive ? "text-black underline":""} end to=".">Details</NavLink>
            <NavLink className={({isActive}) => isActive ? "text-black underline":""} to="price">Pricing</NavLink>
            <NavLink className={({isActive}) => isActive ? "text-black underline":""} to="images">Photos</NavLink>
        </nav>
    </div>
}