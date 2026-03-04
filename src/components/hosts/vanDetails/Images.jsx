import { useOutletContext } from "react-router-dom"

export const ImagesPart = () => {
    const {singleVan} = useOutletContext()
    console.log(singleVan)

    return <div></div>
}