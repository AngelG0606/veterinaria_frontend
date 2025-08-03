
import type { UserRegisterForm } from "../types";
import api from "../lib/axios";


export async function createAccount(formData : UserRegisterForm) {
    try {
        const url = `auth/create-account`
        const { data } = await api.post(url, formData)
        return data
    } catch (error) {
         console.log(error)
    }
}