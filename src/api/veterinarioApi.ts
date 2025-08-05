import api from "../lib/axios"
import type { Veterinario, VeterinarioRegisterForm, VeterinarioResponse } from "../types"

export async function getAllVets() {
    try {
        const url = '/vet/veterinarios'
        const { data } = await api.get<VeterinarioResponse>(url)
        return data
    } catch (error) {
        console.log(error)
    }
}

export async function createVeterinario (formData : VeterinarioRegisterForm) {
    try {
        const url = `/vet/create-account`
        const { data } = await api.post<string>(url, formData)
        return data
    } catch (error) {
        console.log(error)
    }
}

export async function deleteVeterinario (veterinarioId : Veterinario['id']) {
    try {
        const url = `/vet/veterinarios/${veterinarioId}/delete`
        const { data } = await api.delete<string>(url)
        return data
    } catch (error) {
        console.log(error)
    }
}

export async function updateVeterinario(formData : VeterinarioRegisterForm, veterinarioId : Veterinario['id']) {
    try {
                
    } catch (error) {
        console.log(error)
    }
}