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
