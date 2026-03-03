import { useContext } from "react"
import { Context } from "../App"
import { Link } from "react-router-dom"

export const Vans = () => {

    const contextData = useContext(Context)
    const colors = ["#FF8C38","#005a5a","#000000","#bd2f08","#005a5a","#000000"]

    


    return <div className="flex justify-center p-4"> 
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 items-center *:sm:w-1/2 *:md:w-2/3 lg:w-full *:max-sm:w-2/3 *:mx-auto">
            {
                contextData && contextData.map((value,index)=>(
                    
                    <Link 
                    aria-label={`View details for ${value["name"]}, 
                             priced at $${ value["price"]} per day`}
                    to={`/vans/${value["id"]}`} 
                    key={value["id"]}>
                        <img src={value['imageUrl']} alt="" className="w-full" />
                        <div className="flex justify-between">
                            <p className="font-bold">{value['name']}</p>
                            <div>
                                <p className="font-bold">${value['price']}</p>
                                <p>/day</p>
                            </div>
                        </div>
                        <button
                            style={{ backgroundColor: colors[index % colors.length] }}
                            className="text-sm capitalize py-0.5 px-2 rounded text-white"
                            >
                            {value["type"]}
                        </button>
                    </Link>

                ))
            }
        </div>
    </div>
}