import type { JSX } from "react";
import { NavLink } from "react-router-dom";

export const PageNotFound = ():JSX.Element => {

    return <div className="mx-20 my-10 space-y-10">
        <h2 className="text-3xl">Ooops! Page not found.</h2>
        <NavLink to="/" className="w-1/5 bg-black text-white px-7 py-2 rounded-full font-semibold text-xl" >Go to home page</NavLink>
    </div>
}