import type { JSX } from "react"

export const HomeBody = (): JSX.Element => {
    return (
        <div style={{ backgroundImage: `url('./images/bg.png')` }} className="bg-cover text-white px-14 py-26 space-y-10">
            <h2 className="text-3xl font-bold">You got the travel plans, we got the travel vans.</h2>
            <p>Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>
            <button className="bg-amber-600 w-full py-3 font-semibold">Find your van</button>
        </div>
    )
}