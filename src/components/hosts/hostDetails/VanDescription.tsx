import { useOutletContext } from "react-router-dom"
import type { vansValue } from "../../../App"

export const VanDescription = () => {

    type singleVanType = {
        singleVan: vansValue
    } 

    const {singleVan}:singleVanType = useOutletContext()

    return <div className="space-y-5">
        
        <h4>Name: {singleVan.name}</h4>
            <h4>Category: {singleVan.type}</h4>
            <h4>Description: {singleVan.description}</h4>
            <h4>Visibility: public</h4>

    </div>

}