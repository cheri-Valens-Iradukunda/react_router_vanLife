import { NavLink, Outlet } from "react-router-dom";

export const HostNav = () => {

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
    let texts = ["Details","pricing","Photos"]
    let destinations = [".", "price","images"]
    return <div>
        <nav className="flex gap-3 *:hover:underline *:hover:text-gray-300 text-gray-700">

            {
                texts.map((elem,index) => {
                    return NavLinks(elem,destinations[index])
                })
            }

        </nav>
    </div>
}

export function NavLinks(texts,destinations){

    return <NavLink className={({isActive}) => isActive ? "text-black underline":""} end to={destinations}>{texts}</NavLink>
    
}
