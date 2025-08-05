import Title from "../../components/utils/Title";


export default function MascotasView() {
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
                onClick={() => {}}
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-user-round-plus-icon lucide-user-round-plus"><path d="M2 21a8 8 0 0 1 13.292-6"/><circle cx="10" cy="8" r="5"/><path d="M19 16v6"/><path d="M22 19h-6"/></svg>
                Agregar Mascota
            </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
            <div className="bg-white rounded-xl shadow-md p-5 space-y-4 border border-gray-200">
                <h2 className="text-2xl font-bold text-teal-600 border-b pb-2">Información de la Mascota</h2>

                <div className="space-y-2">
                    <p className="text-gray-800 text-lg">
                    <span className="font-semibold">Nombre: </span>
                    
                    </p>
                    <p className="text-gray-800 text-lg">
                    <span className="font-semibold">Especie: </span>
                    
                    </p>
                    <p className="text-gray-800 text-lg">
                    <span className="font-semibold">Raza: </span>
                    
                    </p>

                    <p className="text-gray-800 text-lg">
                    <span className="font-semibold">Color: </span>
                    
                    </p>

                    <p className="text-gray-800 text-lg">
                    <span className="font-semibold">Peso: </span>
                    
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
                            onClick={() => {}}
                            className="bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-1 rounded-lg"
                        >
                            Eliminar
                        </button>
                    </div>
                </div>
            </div>

        </div>
    </>
  )
}
