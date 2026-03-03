import { useEffect, useState, type JSX } from "react";
import { Link, useParams } from "react-router-dom";


export const VanDetails = (): JSX.Element => {
    const [singleVan,setSingleVan] = useState({
        description:"",
        id:"",
        imageUrl:"",
        name:"",
        price:0,
        type:""
    })
    const params = useParams()
    const fetchData = ():void =>{
        fetch("/api/vans/"+params['id']).then(res=>res.json()).then(res=>setSingleVan(res['vans']))
    }

    useEffect(()=>fetchData(),[])

    return <div className="p-10 space-y-5">
        <Link to="/vans" className="underline">back to all vans</Link>
        <img src={singleVan['imageUrl']} alt=" van image" />
        <p className="bg-[#FF8C38] px-3 py-1 w-fit text-white rounded">{singleVan["type"]}</p>
        <h3 className="font-bold text-3xl">{singleVan["name"]}</h3>
        <p className="text-xl"><span className="font-bold">${singleVan["price"]}</span> /day</p>
        <p>{singleVan["description"]}</p>
        <button className="bg-[#FF8C38] w-full text-white py-3 rounded">Rent this van</button>

    </div>
}