import api from "../lib/axios"
import type { Mascota, MascotaRegisterForm } from "../types"



export async function getMascotas() {
    try {
        const url = '/auth/pets'
        const  { data } = await api.get(url)
        return data
    } catch (error) {
        throw new Error('Hubo un error')
    }   
}

export async function createMascota(formData : MascotaRegisterForm) {
    try {
        const url = '/auth/pets'
        const  { data } = await api.post<string>(url, formData)
        return data
    } catch (error) {
        console.log(error)
    }
}

type MessageResponse = {
  message: string
}
export async function deleteMascota (mascotaId : Mascota['id']) {
    try {
        const url = `/auth/pets/${mascotaId}`
        const  { data } = await api.delete<MessageResponse>(url)
        return data     
    } catch (error) {
        console.log(error)
    }
}