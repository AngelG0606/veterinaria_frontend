import type { Cita } from "../../types"


type CitaCardProps = {
  citas : Cita[]
}

export default function CitaCard({citas} : CitaCardProps) {
  return (
    <>
        <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {citas.length ? (
            citas.map((cita) => (
              <div
                key={cita.id}
                className="flex flex-col bg-white shadow px-5 py-5 rounded-md"
              >
                <p className="flex justify-between items-center">
                  Fecha:{" "}
                  <span className="font-bold text-gray-400">
                    {new Date(cita.fecha).toLocaleDateString()}
                  </span>
                </p>
                <p className="flex justify-between items-center">
                  Hora:{" "}
                  <span className="font-bold text-gray-400">
                    {new Date(cita.hora).toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </span>
                </p>
                <p className="flex justify-between items-center">
                  Status:{" "}
                  <span
                    className={`font-semibold px-2 py-0.5 rounded-2xl text-sm text-white ${
                      cita.status ? "bg-green-500" : "bg-red-500"
                    }`}
                  >
                    {cita.status ? "Aceptada" : "No Aceptada"}
                  </span>
                </p>

                <button className="bg-red-500 px-5 py-1 text-white mt-3 hover:bg-red-600 rounded">
                  Cancelar
                </button>
                <button className="bg-blue-500 px-5 py-1 text-white mt-3 hover:bg-blue-600 rounded">
                  Detalles
                </button>
              </div>
            ))
          ) : (
            <p className="text-gray-600 col-span-full">No tienes citas registradas.</p>
          )}
        </div>

            </>
  )
}
