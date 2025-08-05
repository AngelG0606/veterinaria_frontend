import { Link, Outlet } from "react-router-dom";
import Logo from "../components/Logo";
import { ToastContainer } from "react-toastify";
import Sidebar from "../components/app/Sidebar";

export default function AppLayout() {

    const logout = () => {
        localStorage.removeItem('AUTH_TOKEN')   
    }

  return (
    <>
        <header className="bg-gradient-to-r from-green-700 to-green-300 h-30 w-full flex justify-between px-20 items-center">

            <Logo />

            <nav className="flex justify-center items-center gap-10">
                <Link to={'/'} className="text-lg font-bold">Hola : </Link>
                <button className="bg-red-400 text-white text-center py-2 px-6 rounded cursor-pointer hover:bg-red-600 font-bold" onClick={logout}>Cerrar Sesión</button>
            </nav>
        </header>

        <section className="md:flex lg:flex">
            <div className=" w-full md:w-1/5">
                <Sidebar />
            </div>

            <div className="w-4/5 px-10 py-5">
                <Outlet />
            </div>

        </section>


        <ToastContainer 
            pauseOnHover={false}
            pauseOnFocusLoss={false}
            position="top-center"
        />
    </>
  )
}
