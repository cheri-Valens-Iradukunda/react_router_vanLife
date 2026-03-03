import type React from "react"
import { Link } from "react-router-dom"

export const Nav = ():React.ReactElement => {
    return (
        <nav className="flex justify-between p-10 items-center">
            <h2 className="uppercase text-2xl font-bold">#vanlife</h2>
            <ul className="flex gap-5 font-semibold text-gray-600">
                <Link to="/about">About</Link>
                <Link to="/vans">Vans</Link>
            </ul>
        </nav>
    )
}