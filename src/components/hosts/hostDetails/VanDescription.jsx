import { useOutletContext } from "react-router-dom"

export const VanDescription = () => {

    const {singleVan} = useOutletContext()

    return <div className="space-y-5">
        
        <h4>Name: {singleVan.name}</h4>
            <h4>Category: {singleVan.type}</h4>
            <h4>Description: {singleVan.description}</h4>
            <h4>Visibility: public</h4>

    </div>

}