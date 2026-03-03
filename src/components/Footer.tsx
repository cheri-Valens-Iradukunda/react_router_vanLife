import type { JSX } from "react";

export const Footer = (): JSX.Element => {

    return <div className="uppercase bg-black text-gray-400 p-5">
        <p className="text-center">&copy;{new Date().getFullYear()} #vanlife</p>
    </div>
}