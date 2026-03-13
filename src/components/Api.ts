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

src/App.tsx
        src/components/Api.ts
        src/components/Error.tsx
        src/components/PageNotFound.tsx
        src/components/hosts/HostNav.tsx
        src/components/hosts/HostVanDetails.tsx
        src/components/hosts/hostDetails/Images.tsx
        src/components/hosts/hostDetails/Prices.tsx
        src/components/Api.ts
        src/components/Error.tsx
        src/components/PageNotFound.tsx
        src/components/hosts/HostNav.tsx
        src/components/hosts/HostVanDetails.tsx
        src/components/hosts/hostDetails/Images.tsx
        src/components/Api.ts
        src/components/Error.tsx
        src/components/PageNotFound.tsx
        src/components/hosts/HostNav.tsx
        src/components/Api.ts
        src/components/Error.tsx
        src/components/Api.ts
        src/components/Error.tsx
        src/components/Api.ts
        src/components/Error.tsx
        src/components/Api.ts
        src/components/Error.tsx
        src/components/Api.ts
        src/components/Api.ts
        src/components/Error.tsx
        src/components/PageNotFound.tsx
        src/components/hosts/HostNav.tsx
        src/components/hosts/HostVanDetails.tsx
        src/components/hosts/hostDetails/Images.tsx
        src/components/hosts/hostDetails/Prices.tsx
        src/components/hosts/hostDetails/VanDescription.tsx