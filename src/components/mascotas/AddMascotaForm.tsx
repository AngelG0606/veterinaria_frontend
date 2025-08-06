import { useForm } from "react-hook-form"
import ErrorMessage from "../ErrorMessage"
import { useMutation } from "@tanstack/react-query"
import type { MascotaRegisterForm } from "../../types"
import { createMascota } from "../../api/mascotaApi"
import { toast } from "react-toastify"

type AddMascotaFormProps = {
    setOpenModal : (value : boolean) => void
}

export default function AddMascotaForm({setOpenModal} : AddMascotaFormProps) {

    const initialValues : MascotaRegisterForm = {
        name : '',
        especie :'',
        raza : '',
        color : '',
        weight : ''
    }

    const { register, handleSubmit, formState: {errors}} = useForm<MascotaRegisterForm>({defaultValues : initialValues})

    const { mutate } = useMutation({
        mutationFn : createMascota,
        onError : (error) => {
            toast.error(error.message)
        },
        onSuccess : (data) => {
            toast.success(data)
            setOpenModal(false)
        }
    })

    const handleAddMascota = async (formData : MascotaRegisterForm) => {
        mutate(formData)
    }

  return (
    <>
        <form
                         className="bg-white shadow rounded space-y-5 px-5 mt-10 py-5"
                            onSubmit={handleSubmit(handleAddMascota)}
                            noValidate
                        >
                            <div>
                                <label className="text-xl font-semibold ">Nombre(s)</label>
                                <input 
                                    type="text"
                                    className="w-full py-2 bg-gray-50"
                                    placeholder="Nombre mascota"
                                    {...register("name", {
                                        required: "El Nombre de la mascota es obligatorio",
                                    })}
                                />
                                {errors.name && (
                                    <ErrorMessage>{errors.name.message}</ErrorMessage>
                                )}
                            </div>
                
                            <div>
                                <label className="text-xl font-semibold ">Especie</label>
                                <input 
                                    type="text"
                                    className="w-full py-2 bg-gray-50"
                                    placeholder="Especie"
                                    {...register("especie", {
                                        required: "La especie de la mascota es obligatoria",
                                    })} 
                                />
                
                                {errors.especie && (
                                    <ErrorMessage>{errors.especie.message}</ErrorMessage>
                                )}
                            </div>
        
                            <div>
                                <label className="text-xl font-semibold ">Raza</label>
                                <input 
                                    type="text"
                                    className="w-full py-2 bg-gray-50"
                                    placeholder="Raza"
                                    {...register("raza", {
                                        required: "La raza es obligatoria",
                                    })} 
                                />
                
                                {errors.raza && (
                                    <ErrorMessage>{errors.raza?.message}</ErrorMessage>
                                )}
                            </div>
        
                            <div>
                                <label className="text-xl font-semibold ">Color</label>
                                <input 
                                    type="text"
                                    className="w-full py-2 bg-gray-50"
                                    placeholder="Color"
                                    {...register("color", {
                                        required: "color es obligatorio",
                                    })} 
                                />
                
                                {errors.color && (
                                    <ErrorMessage>{errors.color.message}</ErrorMessage>
                                )}
                            </div>
                
                            <div>
                                <label className="text-xl font-semibold ">Peso</label>
                                <input 
                                    type="number"
                                    className="w-full py-2 bg-gray-50"
                                    placeholder="Peso"
                                    {...register("weight", {
                                        required : "EL peso de la mascota es obligatorio",
                                        
                                        maxLength: {
                                            value: 3,
                                            message: "El número debe ser menor a 3 DIGITOS"
                                        },
                                        pattern: {
                                            value: /^[0-9]+$/,
                                            message: "Solo se permiten números"
                                        }
                                    })} 
                                />
                                {errors.weight && (
                                    <ErrorMessage>{errors.weight.message}</ErrorMessage>
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
