import { useForm } from "react-hook-form"
import type { UserRegisterForm } from "../../types"
import ErrorMessage from "../ErrorMessage"
import { Link } from "react-router-dom"

export default function RegisterForm() {

    const initialValues : UserRegisterForm = {
        name : '',
        lastname : '',
        telefono : '',
        email : '',
        password: '',
        password_confirmation: ''
    }
    const { register, handleSubmit, watch, formState : {errors}} = useForm<UserRegisterForm>({defaultValues : initialValues})

    const password = watch('password')

    const handleRegisterForm = async () => {
        
    }

  return (
    <>
        <form
         className="bg-white shadow rounded space-y-5 px-5 mt-10 py-5"
            onSubmit={handleSubmit(handleRegisterForm)}
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

          <nav className="flex justify-between mt-5 ">
            <Link to={'/auth/login'}  className="text-green-500 font-semibold">¿Ya tienes cuenta?. Inicia sesión</Link>
            <Link to={'/auth/login'}  className="text-green-500 font-semibold">¿Olvidaste tu password?. Recuperalo</Link>
          </nav>

    </>
  )
}
