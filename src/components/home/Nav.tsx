import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="flex items-center justify-center gap-5">
        <Link 
            to={'/auth/register'}
            className="font-semibold text-lg text-white hover:bg-gradient-to-r hover:from-green-300 to-green-100 hover:text-black px-3 py-2 rounded"
        >
            Crear Cuenta
        </Link>

        <Link 
            to={'/auth/login'}
            className="font-semibold text-lg text-white hover:bg-gradient-to-r hover:from-green-300 to-green-100 hover:text-black px-3 py-2 rounded"
        >
            Iniciar Sesión
        </Link>
    </nav>
  )
}
