import { useContext } from "react"
import { Context } from "../App"
import { useNavigate } from "react-router-dom"

export const Vans = () => {

    const contextData = useContext(Context)
    const navigation = useNavigate()
    
    const colors = ["#bd2f08","#005a5a","#000000","#bd2f08","#005a5a","#000000"]

    const handleClick = (e:string):void => {
        navigation("/vans/"+e)

    }


    return <div className="flex justify-center p-4"> 
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 items-center *:sm:w-1/2 *:md:w-2/3 lg:w-full *:max-sm:w-2/3 *:mx-auto">
            {
                contextData && contextData.map((value,index)=>(
                    
                    <div key={value["id"]} onClick={() =>handleClick(value['id'])}>
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
                    </div>

                ))
            }
        </div>
    </div>
}