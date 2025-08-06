import { useEffect, useState } from "react";
import Title from "../../components/utils/Title";
import AddMascotaModal from "../../components/mascotas/AddMascotaModal";
import type { Mascota, MascotasResponse } from "../../types";
import { deleteMascota, getMascotas } from "../../api/mascotaApi";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";


export default function MascotasView() {

    const [openModal, setOpenModal] = useState(false)
    const [mascotas, setMascotas] = useState<MascotasResponse>([])

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

    const { mutate } = useMutation({
        mutationFn: deleteMascota,
        onError : () => {

        },
        onSuccess : (data) => {
            if (data?.message) {
                toast.success(data.message);
            }
        }
    })

    const handleDeleteMascota = async (mascotaId : Mascota['id']) => {
        mutate(mascotaId)
        const eliminados = mascotas.filter(mascota => mascota.id !== mascotaId)
        setMascotas(eliminados)
    } 
  return (
    <>
        <Title>Mis mascotas</Title>

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
                Agregar Mascota
            </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
            {mascotas.length > 0  ? (
                mascotas.map(mascota => (
                    <div className="bg-white rounded-xl shadow-md p-5 space-y-4 border border-gray-200" key={mascota.id}>
                <h2 className="text-2xl font-bold text-teal-600 border-b pb-2">Información de la Mascota</h2>

                <div className="space-y-2">
                    <p className="text-gray-800 text-lg">
                    <span className="font-semibold">Nombre: </span>
                        {mascota.name}
                    </p>
                    <p className="text-gray-800 text-lg">
                    <span className="font-semibold">Especie: </span>
                    {mascota.especie}
                    </p>
                    <p className="text-gray-800 text-lg">
                    <span className="font-semibold">Raza: </span>
                        {mascota.raza}
                    </p>

                    <p className="text-gray-800 text-lg">
                    <span className="font-semibold">Color: </span>
                        {mascota.color}
                    </p>

                    <p className="text-gray-800 text-lg">
                    <span className="font-semibold">Peso: </span>
                        {mascota.weight}
                    </p>
                </div>

                <div className="flex justify-between items-center pt-4 border-t">
                    <p className="text-lg font-semibold text-gray-700">Acciones:</p>
                    <div className="flex gap-3">
                        <button
                            onClick={() => {}}
                            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-1 rounded-lg"
                        >
                            Editar
                        </button>
                        <button
                            onClick={() => handleDeleteMascota(mascota.id)}
                            className="bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-1 rounded-lg"
                        >
                            Eliminar
                        </button>
                    </div>
                </div>
            </div>
                ))
            ) : (
                <p className="text-center text-gray-300 mt-10">No tienes mascotas registradas aun</p>
            )}

        </div>

        <AddMascotaModal 
            openModal={openModal}
            setOpenModal={setOpenModal}
        />
    </>
  )
}
