import type { vansValue } from "../App"

export const GetVans = async (): Promise<vansValue[]> => {
    // throw new Error("Error occured")
    const res = await fetch("/api/vans")
    if (!res.ok) {
        throw {
            message: "Failed to fetch vans", 
            statusText: res.statusText,
            status: res.status
        }
    }
    const data = await res.json()
    return data.vans
}


export async function getVans(id:string|number) {
    const url = `/api/vans/${id}`
    const res = await fetch(url)
    if (!res.ok) {
        throw {
            message: "Failed to fetch vans",
            statusText: res.statusText,
            status: res.status
        }
    }
    const data = await res.json()
    return data.vans
}

export async function getHostVans(){
    const url = "/api/host/vans"

    const res = await fetch(url)

    if(!res.ok){
        throw {
            message:"Failed to fetch vans",
            status: res.status,
            statusText: res.statusText
        }
    }
    const data = await res.json()
    return data.vans

}

export async function loginUser(creds:any) {
    const res = await fetch("/api/login",
        { method: "post", body: JSON.stringify(creds) }
    )
    const data = await res.json()
    console.log(data)
    if (!res.ok) {
        throw {
            message: data.message,
            statusText: res.statusText,
            status: res.status
        }
    }

    return data
}
