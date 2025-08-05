import { useEffect, useState } from "react";
import Title from "../../components/utils/Title";
import type { UserGet } from "../../types";
import { getUsers } from "../../api/userApi";

export default function UsersView() {

    const [users, setUsers] = useState<UserGet[]>([])

    useEffect(() => {

        const getAllUsers = async () => {

            const response = await getUsers()
            console.log(response)
            if(response) {
                setUsers(response)
            }
        }
        getAllUsers()
    }, [])

  return (
    <>
        <Title>Clientes en Peth Path veterinary Clinic</Title>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
            {users.length > 0 ? (
                users.map((user) => (
                <div
                    key={user.id}
                    className="bg-white shadow rounded w-full border-b-green-300 py-5 px-5 hover:bg-gray-100 space-y-5"
                >
                    <div className="grid grid-cols-1 space-y-3 border-b pb-3">
                    <p className="text-lg font-semibold flex justify-between">
                        Nombre Completo:
                        <span className="font-normal">{user.name} {user.lastname}</span>
                    </p>
                    <p className="text-lg font-semibold flex justify-between">
                        Teléfono:
                        <span className="font-normal">{user.telefono}</span>
                    </p>
                    <p className="text-lg font-semibold flex justify-between">
                        Correo:
                        <span className="font-normal">{user.email}</span>
                    </p>
                    <div className="text-lg font-semibold flex justify-between items-center">
                        Status:
                        <span className={`px-4 rounded-2xl py-1 text-white font-semibold ${
                        user.status ? 'bg-green-400' : 'bg-red-400'
                        }`}>
                        {user.status ? 'Activo' : 'No Activo'}
                        </span>
                    </div>

                    <div className="flex justify-between items-center pt-2">
                        <p className="text-lg font-semibold">Acciones:</p>
                        <div className="flex gap-3">
                        <button className="cursor-pointer text-red-600 font-bold hover:bg-red-600 hover:text-white px-2 py-1">
                            Eliminar
                        </button>
                        <button className="cursor-pointer text-blue-600 font-bold hover:bg-blue-600 hover:text-white px-2 py-1">
                            Desactivar
                        </button>
                        </div>
                    </div>
                    </div>
                </div>
                ))
            ) : (
                <p className="text-gray-500 text-center col-span-full">No hay usuarios registrados.</p>
            )}
        </div>



    </>
  )
}
