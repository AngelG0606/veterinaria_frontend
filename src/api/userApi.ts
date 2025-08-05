import api from "../lib/axios"
import type { UserGet } from "../types"


export async function getUsers() {
    try {
        const url = `/auth/users`
        const { data } = await api.get<UserGet[]>(url)
        return data
    } catch (error) {
        console.log(error)
    }

}
