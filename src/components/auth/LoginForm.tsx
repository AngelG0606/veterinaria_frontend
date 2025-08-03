import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import ErrorMessage from "../ErrorMessage";
import type { UserLoginForm } from "../../types";

export default function LoginForm() {

    const initialValues : UserLoginForm = {
        email : '',
        password : ''
    }

    const {register, handleSubmit, formState : {errors}} = useForm<UserLoginForm>({defaultValues : initialValues})

    const handleLoginSubmit = () => {

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
