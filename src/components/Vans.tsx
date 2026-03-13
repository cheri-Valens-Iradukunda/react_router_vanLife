import { type JSX } from "react"
import { Link, useLoaderData, useSearchParams } from "react-router-dom"
import type { vansValue } from "../App"

export const Vans = ():JSX.Element => {
    
    const [params,setParams] = useSearchParams()
    const paramType = params.get("type")
    const filterButtons: string[] = ["simple","luxury","rugged", "clear"]
    const vans = useLoaderData() as vansValue[]
    
    const fetchedContextData = paramType ? vans.filter(
        (elem:any)=>elem["type"].toLowerCase() == paramType): 
        vans;
    // another way of rewriting the url
    // const setNewParameterString = (key:string, value: string | null):void => {
    //     const searchParam = new URLSearchParams(params)
    //     if(value == null){
    //         searchParam.delete(key)
    //     }else{
    //         searchParam.set(key, value)
    //     }
    //     setParams(searchParam)
        
    // }


    const handleFilterChange = (key:string, value:string | null) => {

        setParams((prevParams) => {

            value == null ? prevParams.delete(key): prevParams.set(key,value) 

            return prevParams
        })

    }
    
    return <div className="flex justify-center flex-col p-4"> 
        <h2 className="text-2xl">Explore our van options</h2>
        <nav className="gap-2 flex *:px-3 *:py-1 *:rounded">
            {
                filterButtons.map((buttonName:string,index:number)=>{
                    const value = index == 3 ? null: buttonName
                    return <button key={index} className="capitalize hover:bg-gray-600 hover:transition duration-500" onClick={()=>handleFilterChange("type",value)}>{buttonName}</button>

                })
            }
        </nav>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 items-center *:sm:w-1/2 *:md:w-2/3 lg:w-full *:max-sm:w-2/3 *:mx-auto">
            {
                fetchedContextData && fetchedContextData.map((value:any)=>{
                    
                    const colorStyle: string = value["type"] == "simple"? "#FF8C38": 
                    value["type"] == "luxury" ? "#005a5a": "#000000"

                    return <Link 
                        state={{state: `${params.toString()}`,types: paramType}}
                        aria-label={`View details for ${value["name"]}, priced at $${ value["price"]} per day`}
                        to={value["id"]} 
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
                            style={{ backgroundColor: colorStyle}}
                            className="text-sm capitalize py-1 px-2 rounded text-white"
                            >
                            {value["type"]}
                        </button>
                    </Link>

                })
            }
        </div>
    </div>
}