import type { JSX } from "react";

export const AboutPage = ():JSX.Element => {

    return <div className="">
        <img src="./images/image1.png" alt="" className="mb-10" />
        <div className="p-5 space-y-8">
            <h3 className="font-bold text-2xl">Don’t squeeze in a sedan when you could relax in a van.</h3>
            <p className="">Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.
                (Hitch costs extra 😉)</p>
            <p>Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>
            <div className="bg-orange-300 p-7 rounded space-y-4">
                <p className="text-xl font-semibold">Your destination is waiting. Your van is ready.</p>
                <button className="bg-black text-white px-5 py-2 rounded font-semibold">Explore our vans</button>
            </div>
        </div>
    </div>
}