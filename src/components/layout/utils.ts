import { redirect } from "react-router-dom"

export async function RequireAuth() {
    const isLoggedIn = false

    if(!isLoggedIn){
        throw redirect("/login?message=you must log in to view this page")
    }
    return null
}