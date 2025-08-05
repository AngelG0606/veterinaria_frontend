
import type { UserLoginForm, UserRegisterForm } from "../types";
import api from "../lib/axios";

export async function createAccount(formData : UserRegisterForm) {
    try {
        const url = `/auth/create-account`
        const { data } = await api.post<string>(url, formData)
        return data
    } catch (error) {
         console.log(error)
    }
}

export async function login(formData : UserLoginForm) {
    try {
        const url = `/auth/login`
        const { data } = await api.post<string>(url, formData)
        localStorage.setItem('AUTH_TOKEN', data)
        return data
    } catch (error) {
        console.log(error)   
    }
}
