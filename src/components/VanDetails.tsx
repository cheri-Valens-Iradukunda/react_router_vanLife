import { useEffect, useState, type JSX } from "react";

export const VanDetails = (): JSX.Element => {

    const [singleData,setSingleData] = useState()

    const fetchData = async() => {
        const id = 1

        await fetch(`/api/fetch/${id}`).then(res=>res.json()).then(res=>setSingleData(res))
        

    }

    useEffect(()=>{
        fetchData()
    },[])
    console.log(singleData)

    return <div>
        <h2>this is van Details</h2>
    </div>
}