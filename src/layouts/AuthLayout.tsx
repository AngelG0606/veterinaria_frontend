import { Outlet } from "react-router-dom";
import Title from "../components/utils/Title";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

export default function AuthLayout() {
  return (
    <>
        <div className="mt-10">
            <Title>Cuidamos a tu mascota como parte de la familia</Title>
        </div>

        <div className="block md:flex justify-center max-w-7xl gap-10 mx-auto mt-10 items-center">
          <div className="w-full max-w-md md:max-w-lg lg:max-w-xl">
            <img src="/img/Logo.png" alt="Logo" className="w-full h-auto" />
          </div>

          <div className="w-full px-5">
            <Outlet />
          </div>
        </div>

        <ToastContainer 
            pauseOnHover={false}
            pauseOnFocusLoss={false}
        />
    </>
  )
}
