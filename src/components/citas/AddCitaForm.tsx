import { useEffect, useState } from "react"
import type { MascotasResponse, VeterinarioResponse } from "../../types"
import { getAllVets } from "../../api/veterinarioApi"
import { getMascotas } from "../../api/mascotaApi"


type AddCitaFormProps = {
    setOpenModal : (value : boolean) => void
}

export default function AddCitaForm( {setOpenModal} : AddCitaFormProps) {

    const [veterinarios, setVeterinarios] = useState<VeterinarioResponse>([])
    const [mascotas, setMascotas] = useState<MascotasResponse>([])
    useEffect(() => {
        const getVeterinarios = async () => {
            try {
                const response = await getAllVets()
                if(response) {
                    setVeterinarios(response)
                }    
            } catch (error) {
                console.log(error)
            }
        }
        getVeterinarios()
    }, [])
    
        useEffect(() => {
            const getAllMascotas = async () => {
    
                const response = await getMascotas()
                if (Array.isArray(response)) {
                    setMascotas(response);
                } else {
                    setMascotas([]);
                }
            }
            getAllMascotas();
        },[])
  return (
    <form className='max-w-2xl space-y-10 mt-10'>

        <div className='px-5 flex justify-between items-center'>
            <label htmlFor="" className='font-bold'>Fecha</label>
            <input type="date" />
        </div>

        <div className='px-5 flex justify-between items-center'>
            <label htmlFor="" className='font-bold'>Hora</label>
            <input type="time" />
        </div>

        <div className='px-5 flex gap-3 justify-between items-center'>
            <label htmlFor="" className='font-bold'>Veterinario</label>
            <select name="" id=""
                className="bg-gray-100 w-full py-2 "
            >
                {veterinarios.map(veterinario => (
                    <option value={veterinario.id} key={veterinario.id}>{veterinario.name} {veterinario.lastname} {veterinario.especialidad}</option>
                ))}
            </select>
        </div>

        <div className='px-5 flex gap-3 justify-between items-center'>
            <label htmlFor="" className='font-bold'>Mascotas</label>
            <select name="" id=""
                className="bg-gray-100 w-full py-2 "
            >
                {mascotas.map(mascota => (
                    <option value={mascota.id} key={mascota.id}>{mascota.name} {mascota.raza}</option>
                ))}
            </select>
        </div>



        <input 
            type="submit"
            className="bg-green-400 hover:bg-green-500 cursor-pointer transition-colors text-white py-2 px-5 w-full text-center my-5 uppercase"

            value={'Agendar Cita'} 
        />
    </form>
  )
}
