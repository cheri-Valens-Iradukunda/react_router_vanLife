import type { JSX } from "react";
import { useRouteError } from "react-router-dom";

export const Error = (): JSX.Element => {

    const error:any = useRouteError()
    console.log(error)

    return <div className="text-center my-30">
        <h2 className="text-2xl font-bold ">Oooops! this page has some errors</h2>
        <p>Error: {error["message"]}</p>
    </div>
    
}