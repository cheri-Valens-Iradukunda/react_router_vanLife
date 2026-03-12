import { useEffect, useState } from "react"
import { Link, useSearchParams } from "react-router-dom"
export const Vans = () => {

    const [vans,setVans] = useState([])
    
      async function fetchUsers(){
        await fetch("/api/vans").then(res=>res.json()).then(res=>setVans(res.vans))
    
      }
    
      useEffect(()=>{
        fetchUsers()
    
      },[])

    const colors = ["#FF8C38","#005a5a","#000000","#bd2f08","#005a5a","#000000"]

    const [params,setParams] = useSearchParams()
    const type = params.get("type")
    const fetchedContextData = type ? 
        vans.filter((elem:any)=>elem["type"].toLowerCase() == type): 
        vans;
    
    // function genNewSearchParamString(key, value) {
    //     const sp = new URLSearchParams(searchParams)
    //     if (value === null) {
    //     sp.delete(key)
    //     } else {
    //     sp.set(key, value)
    //     }
    //     return `?${sp.toString()}`
    // }

    const setNewParameterString = (key:string, value: string | null):void => {
        const searchParam = new URLSearchParams(params)
        if(value == null){
            searchParam.delete(key)
        }else{
            searchParam.set(key, value)
        }
        setParams(searchParam)
        
    }

    return <div className="flex justify-center flex-col p-4"> 
        <h2 className="text-2xl">Explore our van options</h2>
        <nav className="gap-2 flex *:hover:underline">
            <button onClick={()=>setNewParameterString("type","simple")}>Simple</button>
            <button onClick={()=>setNewParameterString("type","luxury")}>Luxury</button>
            <button onClick={()=>setParams({type:"rugged"})}>Rugged</button>
            <button onClick={()=>setParams({})}>Clear</button>
        </nav>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 items-center *:sm:w-1/2 *:md:w-2/3 lg:w-full *:max-sm:w-2/3 *:mx-auto">
            {
                fetchedContextData && fetchedContextData.map((value:any,index:number)=>(
                    
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