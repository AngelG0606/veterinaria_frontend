import { useEffect, useState } from "react";
import Title from "../../components/utils/Title";
import type { Veterinario, VeterinarioResponse } from "../../types";
import { deleteVeterinario, getAllVets } from "../../api/veterinarioApi";
import AddVeterinarioModal from "../../components/veterinarios/AddVeterinarioModal";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";

export default function VeterinariosView() {

    const [veterinarios, setVeterinarios] = useState<VeterinarioResponse>([])
    const [openModal, setOpenModal] = useState(false)

    useEffect(() => {

        const getAllVeterinarios = async () => {
            try {
                const response = await getAllVets()
                if(response) {
                    setVeterinarios(response)
                }    
            } catch (error) {
                console.log(error)
            }
        }
        getAllVeterinarios()
    }, [])

    const { mutate } = useMutation({
        mutationFn : deleteVeterinario,
        onError : (error) => {
            toast.error(error.message)
        },
        onSuccess : (data) => {
            toast.success(data)
            
        }
    })

    const handleDelete = async (veterinarioId : Veterinario['id']) => {
        mutate(veterinarioId)
        const eliminados = veterinarios.filter(veterinario  => veterinario.id !== veterinarioId)
        setVeterinarios(eliminados)
    }

  return (
    <>
        <Title>Vetirnarios en Peth Path veterinary Clinic</Title>

        <div className="bg-white shadow px-5 flex justify-between mt-5 py-10">
            <input 
                type="text"
                className="md:w-72 w-full py-2 rounded shadow-2xl bg-gray-100"
                placeholder="Buscar Veterinario" 
            />

            <button 
                className="bg-gradient-to-r from-green-600 to-green-300 text-white uppercase text-center py-2 px-6 rounded hover:bg-gradient-to-l hoveR:from-green-600 hover:to-green-300 hover:transition-colors cursor-pointer flex justify-center items-center gap-3"
                onClick={() => setOpenModal(true)}
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-user-round-plus-icon lucide-user-round-plus"><path d="M2 21a8 8 0 0 1 13.292-6"/><circle cx="10" cy="8" r="5"/><path d="M19 16v6"/><path d="M22 19h-6"/></svg>
                Agregar Veterinario
            </button>
        </div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
  {veterinarios.length > 0 ? (
    veterinarios.map((veterinario) => (
      <div
        key={veterinario.id}
        className="bg-white shadow rounded w-full border-b-green-300 py-5 px-5 hover:bg-gray-100 space-y-5"
      >
        <div className="grid grid-cols-1 gap-y-3 border-b pb-3">
          <p className="text-lg font-semibold flex flex-col sm:flex-row justify-between">
            Nombre Completo:
            <span className="font-normal">{veterinario.name} {veterinario.lastname}</span>
          </p>
          <p className="text-lg font-semibold flex flex-col sm:flex-row justify-between">
            Teléfono:
            <span className="font-normal">{veterinario.telefono}</span>
          </p>
          <p className="text-lg font-semibold flex flex-col sm:flex-row justify-between">
            Correo:
            <span className="font-normal">{veterinario.email}</span>
          </p>
          <p className="text-lg font-semibold flex flex-col sm:flex-row justify-between">
            Especialidad:
            <span className="font-normal bg-cyan-500 text-white px-3 rounded-2xl mt-1 sm:mt-0">{veterinario.especialidad}</span>
          </p>
          <p className="text-lg font-semibold flex flex-col sm:flex-row justify-between">
            RFC:
            <span className="font-normal">{veterinario.rfc}</span>
          </p>

          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pt-2 gap-3">
            <p className="text-lg font-semibold">Acciones:</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <button 
                className="cursor-pointer text-red-600 font-bold hover:bg-red-600 hover:text-white px-2 py-1" 
                onClick={() => handleDelete(veterinario.id)}
              >
                Eliminar
              </button>
              <button 
                className="cursor-pointer text-blue-600 font-bold hover:bg-blue-600 hover:text-white px-2 py-1"
              >
                Editar
              </button>
            </div>
          </div>
        </div>
      </div>
    ))
  ) : (
    <p className="text-gray-500 text-center col-span-full">No hay Veterinarios registrados.</p>
  )}
</div>


        <AddVeterinarioModal 
            openModal={openModal}
            setOpenModal={setOpenModal}
        />
    </>
  )
}
