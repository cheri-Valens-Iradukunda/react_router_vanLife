import { useOutletContext } from "react-router-dom"

export const Images = () => {
    const {singleVan} = useOutletContext()
    return <div>
        <img src={singleVan.imageUrl} className="w-1/2" />
    </div>
}