import api from "../lib/axios"
import type { CitasResponse } from "../types"


export async function createCita() {

}

export async function getAllCitas() {
    try {
        const url = `/auth/citas`
        const  { data }  = await api.get<CitasResponse>(url)
        return data
    } catch (error) {
        
    }
}

export async function getCitaById() {

}

export async function updateCita() {

}

export async function cancelCita() {

}