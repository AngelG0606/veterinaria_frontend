import { useMutation } from "@tanstack/react-query"
import { useForm } from "react-hook-form"
import ErrorMessage from "../ErrorMessage"
import { toast } from "react-toastify"
import type { VeterinarioRegisterForm } from "../../types"
import { createVeterinario } from "../../api/veterinarioApi"

type AddVeterinarioFormProps = {
    setOpenModal : (value : boolean) => void
}

export default function AddVeterinarioForm({setOpenModal} : AddVeterinarioFormProps) {

    const initialValues : VeterinarioRegisterForm = {
        name : '',
        lastname : '',
        especialidad : '',
        rfc : '',
        telefono : '',
        email : '',
        password: '',
        password_confirmation: ''
    }

    const {register, handleSubmit, watch, formState : {errors}} = useForm<VeterinarioRegisterForm>({defaultValues : initialValues})

    const password = watch('password')
    

    const { mutate } = useMutation({
        mutationFn : createVeterinario,
        onError : () => {

        },
        onSuccess : (data) => {
            toast.success(data)
            setOpenModal(false)
        }
    })
    
    const handleRegisterVet = async (formData : VeterinarioRegisterForm)  => {
        mutate(formData)
    }

  return (
    <>
        <form
                 className="bg-white shadow rounded space-y-5 px-5 mt-10 py-5"
                    onSubmit={handleSubmit(handleRegisterVet)}
                    noValidate
                >
                    <div>
                        <label className="text-xl font-semibold ">Nombre(s)</label>
                        <input 
                            type="text"
                            className="w-full py-2 bg-gray-50"
                            placeholder="Tu Nombre"
                            {...register("name", {
                                required: "El Nombre de usuario es obligatorio",
                            })}
                        />
                        {errors.name && (
                            <ErrorMessage>{errors.name.message}</ErrorMessage>
                        )}
                    </div>
        
                    <div>
                        <label className="text-xl font-semibold ">Apellido(s)</label>
                        <input 
                            type="text"
                            className="w-full py-2 bg-gray-50"
                            placeholder="Tu Apellido"
                            {...register("lastname", {
                                required: "El Apellido es obligatorio",
                            })} 
                        />
        
                        {errors.lastname && (
                            <ErrorMessage>{errors.lastname.message}</ErrorMessage>
                        )}
                    </div>

                    <div>
                        <label className="text-xl font-semibold ">Especialidad(s)</label>
                        <input 
                            type="text"
                            className="w-full py-2 bg-gray-50"
                            placeholder="Tu Especialidad"
                            {...register("especialidad", {
                                required: "La Especialidad es obligatoria",
                            })} 
                        />
        
                        {errors.lastname && (
                            <ErrorMessage>{errors.especialidad?.message}</ErrorMessage>
                        )}
                    </div>

                    <div>
                        <label className="text-xl font-semibold ">RFC</label>
                        <input 
                            type="text"
                            className="w-full py-2 bg-gray-50"
                            placeholder="Tu RFC"
                            {...register("rfc", {
                                required: "RFC es obligatorio",
                                minLength : {
                                    value : 13,
                                    message : "Minimo 13 digitos"
                                },
                                maxLength : {
                                    value : 13,
                                    message : "Maximo 13 digitos"
                                }
                            })} 
                        />
        
                        {errors.lastname && (
                            <ErrorMessage>{errors.rfc?.message}</ErrorMessage>
                        )}
                    </div>
        
                    <div>
                        <label className="text-xl font-semibold ">Telefono</label>
                        <input 
                            type="number"
                            className="w-full py-2 bg-gray-50"
                            placeholder="Tu Telefono"
                            {...register("telefono", {
                                required : "El número de telefono es obligatorio",
                                minLength: {
                                    value: 10,
                                    message: "El número debe tener exactamente 10 dígitos"
                                },
                                maxLength: {
                                    value: 10,
                                    message: "El número debe tener exactamente 10 dígitos"
                                },
                                pattern: {
                                    value: /^[0-9]+$/,
                                    message: "Solo se permiten números"
                                }
                            })} 
                        />
                        {errors.telefono && (
                            <ErrorMessage>{errors.telefono.message}</ErrorMessage>
                        )}
        
                    </div>
        
                    <div>
                        <label className="text-xl font-semibold ">Email</label>
                        <input 
                            type="email"
                            className="w-full py-2 bg-gray-50"
                            placeholder="Tu Email"
                            {...register("email", {
                                required : "El E-mail es obligatorio",
                                pattern : {
                                    value: /\S+@\S+\.\S+/,
                                    message: "E-mail no válido"
                                }
                            })} 
                        />
                        {errors.email && (
                            <ErrorMessage>{errors.email.message}</ErrorMessage>
                        )}
        
                    </div>
        
                    <div>
                        <label className="text-xl font-semibold ">Password</label>
                        <input 
                            type="password"
                            className="w-full py-2 bg-gray-50"
                            placeholder="Tu Password"
                            {...register("password", {
                                required : "Password obligatorio",
                                minLength : {
                                    value : 8,
                                    message : "Minimo 8 caracteres"
                                }
                            })}
                        />
        
                        {errors.password && (
                            <ErrorMessage>{errors.password.message}</ErrorMessage>
                        )}
                    </div>
        
                    <div>
                        <label className="text-xl font-semibold ">Repetir Password</label>
                        <input 
                            type="password"
                            className="w-full py-2 bg-gray-50"
                            placeholder="Tu Password"
                            {...register("password_confirmation", {
                                required : "Repetir password es obligatorio",
                                validate: value => value === password || "Los Passwords no son iguales"
                            })} 
                        />
        
                        {errors.password_confirmation && (
                    <ErrorMessage>{errors.password_confirmation.message}</ErrorMessage>
                  )}
                    </div>
        
                    <input 
                        type="submit"
                        className="bg-gradient-to-r from-green-400 to-green-100 cursor-pointer w-full hover:bg-gradient-to-l hover:from-green-400 hover:to-green-100 py-2 rounded text-white uppercase font-bold text-lg"
                        value={'Crear Cuenta'} 
                    />
                </form>
    </>
  )
}
