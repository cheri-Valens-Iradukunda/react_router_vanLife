import type { JSX } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { Nav } from "../nav";
import { Footer } from "../Footer";

export const Layout = ():JSX.Element => {

    const isLogin = true

    // if(!isLogin) return <Navigate to="login" />

    return <div>
        
        <Nav />
        <Outlet />
        
        <Footer />
    </div>
}