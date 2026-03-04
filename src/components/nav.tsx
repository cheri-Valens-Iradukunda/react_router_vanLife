import type React from "react"
import { NavLink } from "react-router-dom"

export const Nav = ():React.ReactElement => {
    return (
        <nav className="flex justify-between p-10 items-center">
            <h2 className="uppercase text-2xl font-bold">#vanlife</h2>
            <ul className="flex gap-5 font-semibold text-gray-600 *:hover:underline *:hover:text-gray-300">
                <NavLink className={({isActive}) => isActive? "text-black underline": ""} to="about">About</NavLink>
                <NavLink className={({isActive}) => isActive? "text-black underline": ""} to="vans">Vans</NavLink>
                <NavLink className={({isActive}) => isActive? "text-black underline": ""} to="host">Host</NavLink>
            </ul>
        </nav>
    )
}