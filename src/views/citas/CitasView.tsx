import { useState } from "react";
import CitaCard from "../../components/citas/CitaCard";
import Title from "../../components/utils/Title";
import CitaModal from "../../components/citas/CitaModal";


export default function CitasView() {

     const [openModal, setOpenModal] = useState(false)

  return (
    <>
        <Title>Agenda tu cita</Title>

        <div className="bg-white shadow px-5 flex justify-between mt-5 py-10">
            <input 
                type="text"
                className="md:w-72 w-full py-2 rounded shadow-2xl bg-gray-100"
                placeholder="Buscar Cita" 
            />

            <button 
                className="bg-gradient-to-r from-green-600 to-green-300 text-white uppercase text-center py-2 px-6 rounded hover:bg-gradient-to-l hoveR:from-green-600 hover:to-green-300 hover:transition-colors cursor-pointer flex justify-center items-center gap-3"
                onClick={() => setOpenModal(true)}
            >
                Agregar Cita
            </button>
        </div>

        <CitaModal 
            openModal={openModal}
            setOpenModal={setOpenModal}
        /> 

        <CitaCard /> 
    </>
  )
}
