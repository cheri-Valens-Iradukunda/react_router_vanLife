import { useOutletContext } from "react-router-dom"

export const Prices = () => {

    const {singleVan} = useOutletContext()
    // console.log(s)
    return <div>
         <h3 className="font-bold">${singleVan.price}<span>/day</span></h3>
    </div>
}