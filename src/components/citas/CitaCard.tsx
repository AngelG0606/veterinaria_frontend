

export default function CitaCard() {
  return (
    <>
        <div className="mt-5 shadow w-72 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col bg-white shadow w-72 px-5 py-5">
                <p className="flex justify-between items-center">Fecha : <span className="font-bold text-gray-400">2025-10-2</span> </p>
                <p className="flex justify-between items-center">Hora : <span className="font-bold text-gray-400">14:00</span> </p>
                <button className="bg-red-500 px-5 py-1 text-white mt-3 cursor-pointer hover:bg-red-600">Cancelar</button>
                <button className="bg-blue-500 px-5 py-1 text-white mt-3 cursor-pointer hover:bg-blue-600">Detalles</button>
            </div>  
        </div>
    </>
  )
}
