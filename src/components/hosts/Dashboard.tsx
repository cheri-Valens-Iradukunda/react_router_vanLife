import type { JSX } from "react";
import { Outlet } from "react-router-dom";

export const Dashboard = (): JSX.Element => {
    return <>
        <h2 className="text-2xl font-bold p-10">This is dashboard page</h2>
        <Outlet />
    </>
}