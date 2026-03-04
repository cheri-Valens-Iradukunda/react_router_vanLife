import { useOutletContext } from "react-router-dom"

export const Description = () => {
    const {singleVan} = useOutletContext()
    console.log(singleVan)

    return <div></div>
}