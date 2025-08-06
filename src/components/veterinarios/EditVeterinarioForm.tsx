import { useForm } from "react-hook-form"
import { useMutation } from "@tanstack/react-query";
import { getVeterinarioById, updateVeterinario } from "../../api/veterinarioApi";
import { toast } from "react-toastify";
import ErrorMessage from "../ErrorMessage";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

type Veterinario = {
  id: number;
  name: string;
  lastname: string;
  especialidad: string;
  rfc: string;
  telefono: string;
  email: string;
};

type VeterinarioRegisterForm = {
  name: string;
  lastname: string;
  especialidad: string;
  rfc: string;
  telefono: string;
  email: string;
  password: string;
  password_confirmation: string;
};


export default function EditVeterinarioForm() {

    const params = useParams();
    const navigate = useNavigate();
  const veterinarioId = Number(params.veterinarioId);
  if (isNaN(veterinarioId)) {
    return <div>ID inválido</div>;
  }

  const [veterinario, setVeterinario] = useState<Veterinario | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm<VeterinarioRegisterForm>({
    defaultValues: {
      name: "",
      lastname: "",
      especialidad: "",
      rfc: "",
      telefono: "",
      email: "",
      password: "",
      password_confirmation: "",
    },
  });

  useEffect(() => {
    const getVeterinario = async () => {
      try {
        const response = await getVeterinarioById(veterinarioId);
        if (response) {
          setVeterinario(response);
          reset({
            name: response.name,
            lastname: response.lastname,
            especialidad: response.especialidad,
            rfc: response.rfc,
            telefono: response.telefono,
            email: response.email,
            password: "",
            password_confirmation: "",
          });
        }
      } catch (error) {
        console.log(error);
      }
    };

    getVeterinario();
  }, [veterinarioId, reset]);

  const password = watch("password");

  const { mutate } = useMutation({
    mutationFn: updateVeterinario,
    onError: () => {
      toast.error("Error al actualizar veterinario");
    },
    onSuccess: (data) => {
      toast.success(data);
      navigate('/veterinarios')
    },
  });

  const handleEditVeterinario = (formData: VeterinarioRegisterForm) => {
    mutate({
      formData,
      veterinarioId,
    });
  };

  return (
    <>
        <form
            className="bg-white shadow rounded space-y-5 px-5 mt-10 py-5 mx-auto max-w-2xl"
            onSubmit={handleSubmit(handleEditVeterinario)}
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
                    value={veterinario?.name}
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
                    value={veterinario?.lastname} 
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
                    value={veterinario?.especialidad} 
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
                    value={veterinario?.rfc} 
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
                    value={veterinario?.telefono} 
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
                    value={veterinario?.email} 
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
