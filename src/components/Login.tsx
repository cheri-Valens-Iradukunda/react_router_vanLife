import { useState, type ChangeEvent, type FormEvent, type JSX } from "react";
import { useLoaderData, useSearchParams } from "react-router-dom";
import { loginUser } from "./Api";


export const LoadLogin = async({request}:any) => {
    const message = new URL(request.url).searchParams.get("message")
    return message
}

export const Login = (): JSX.Element => {

    const [loginFormData, setLoginFormData] = useState({ email: "", password: "" })
    const [status,setStatus] = useState("idle")
    const [error,setError] = useState(null)
    const message = useLoaderData() as string

    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()
        setStatus("submitting")
        loginUser(loginFormData)
        .then(console.log)
        .catch(err=>setError(err))
        .finally(()=>setStatus("idle"))
    }

    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        const { name, value } = e.target
        setLoginFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }
    console.log("error ", error)

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#e9e2d8]">
            <div className="w-full max-w-md px-6">
                
                {/* Title */}
                <h1 className="text-3xl font-bold mb-3 text-black">
                    Sign in to your account
                </h1>
                {message && <p className="text-red-700 mb-10">{message}</p>}
                {error && <p className="text-red-500 mb-10">{error}</p>}

                {/* Form */}
                <form 
                    onSubmit={handleSubmit} 
                    className="flex flex-col gap-4"
                >

                    {/* Email */}
                    <input
                        name="email"
                        onChange={handleChange}
                        type="email"
                        placeholder="Email address"
                        value={loginFormData.email}
                        className="w-full px-4 py-3 rounded-lg bg-gray-200 border border-gray-300 outline-none focus:ring-2 focus:ring-orange-400"
                    />

                    {/* Password */}
                    <input
                        name="password"
                        onChange={handleChange}
                        type="password"
                        placeholder="Password"
                        value={loginFormData.password}
                        className="w-full px-4 py-3 rounded-lg bg-gray-200 border border-gray-300 outline-none focus:ring-2 focus:ring-orange-400"
                    />

                    {/* Button */}
                    <button 
                        disabled = {status=="submitting"}
                        className="mt-4 w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-lg transition"
                    >
                        {status=="submitting"?"Logging in...":"Log in"}
                    </button>

                </form>
            </div>
        </div>
    )
}