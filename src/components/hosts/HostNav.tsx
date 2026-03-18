import {  NavLink, Outlet } from "react-router-dom";

export const HostNav = () => {
    const destinations:string[] = [".","income","vans","review"]
    const texts:string[] = ["Dashboard","Income","vans","Review"]
    
    return <div>
        <nav className="flex gap-3 *:hover:underline *:hover:text-gray-300 text-gray-700">
            {
                texts.map((elem,index)=>{
                    return NavLinks(elem,destinations[index])
                })
            }
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

function NavLinks(texts:string,destinations:string){

    return <NavLink key={texts} className={({isActive}) => isActive ? "text-black underline":""} end to={destinations}>{texts}</NavLink>
    
}

export const loader = async () => {
    const user = {
        name:"John Doe",
        email:"john.doe@example.com"
    }
    return user

}