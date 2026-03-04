import type { JSX } from "react";
import { Outlet } from "react-router-dom";

export const Dashboard = (): JSX.Element => {
    return <>
        <h2>This is dashboard page</h2>
        <Outlet />
    </>
}