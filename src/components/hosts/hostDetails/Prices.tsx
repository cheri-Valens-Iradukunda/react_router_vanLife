import { useOutletContext } from "react-router-dom"
import type { vansValue } from "../../../App"

export const Prices = () => {

    type singleVanType = {
        singleVan: vansValue
    } 

    const {singleVan}:singleVanType = useOutletContext()
    return <div>
         <h3 className="font-bold">${singleVan.price}<span>/day</span></h3>
    </div>
}