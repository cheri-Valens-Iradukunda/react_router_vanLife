import { useOutletContext } from "react-router-dom"
import type { vansValue } from "../../../App"

export const Images = () => {

    type singleVanType = {
        singleVan: vansValue
    } 

    const {singleVan}:singleVanType = useOutletContext()
    return <div>
        <img src={singleVan.imageUrl} className="w-1/2" />
    </div>
}