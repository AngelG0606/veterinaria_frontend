import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import ErrorMessage from "../ErrorMessage";
import type { UserLoginForm } from "../../types";
import { useMutation } from "@tanstack/react-query";
import { login } from "../../api/authApi";
import { toast } from "react-toastify";

export default function LoginForm() {
    
    const navigate = useNavigate()
    const initialValues : UserLoginForm = {
        email : '',
        password : ''
    }

    const {register, handleSubmit, formState : {errors}} = useForm<UserLoginForm>({defaultValues : initialValues})

    const {mutate} = useMutation({
        mutationFn : login,
        onError: () => {
            toast.error('Hubo un error al autenticar al usuario')
        },
        onSuccess: () => {
            toast.success('Usuario autenticado correctamente')
            navigate('/dashboard')
        }
    })

    const handleLoginSubmit = (formData : UserLoginForm) => {
        mutate(formData)
    }

  return (
    <>
        <form
         className="bg-white shadow rounded space-y-5 px-5 mt-10 py-5"
            onSubmit={handleSubmit(handleLoginSubmit)}
            noValidate
        >

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

            <input 
                type="submit"
                className="bg-gradient-to-r from-green-400 to-green-100 cursor-pointer w-full hover:bg-gradient-to-l hover:from-green-400 hover:to-green-100 py-2 rounded text-white uppercase font-bold text-lg"
                value={'Iniciar Sesión'} 
            />
        </form>

          <nav className="flex justify-between mt-5 ">
            <Link to={'/auth/register'}  className="text-green-500 font-semibold">¿No tienes cuenta?. Crea una.</Link>
            <Link to={'/auth/login'}  className="text-green-500 font-semibold">¿Olvidaste tu password?. Recuperalo</Link>
          </nav>
    </>
  )
}
