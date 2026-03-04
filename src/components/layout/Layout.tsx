import type { JSX } from "react";
import { Outlet } from "react-router-dom";
import { Nav } from "../nav";
import { Footer } from "../Footer";

export const Layout = ():JSX.Element => {

    return <div>
        
        <Nav />
        <Outlet />
        
        <Footer />
    </div>
}