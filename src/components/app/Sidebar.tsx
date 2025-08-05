import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Sidebar() {
  const [showSidebar, setShowSidebar] = useState(false)

  return (
    <>
      <button 
        className="md:hidden p-2 bg-green-700 text-white fixed top-4 left-4 z-50"
        onClick={() => setShowSidebar(!showSidebar)}
      >
        ☰
      </button>

      <aside className={`bg-green-100 shadow-green-700 min-h-screen space-y-3 pt-20 fixed top-0 left-0 z-40 transition-transform duration-300
        ${showSidebar ? 'translate-x-0' : '-translate-x-full'} 
        md:relative md:translate-x-0 md:w-72 w-96
      `}>
        <Link 
          to={'/dashboard'}
          className="text-green-600 font-bold text-xl hover:bg-gradient-to-r hover:from-green-700 hover:to-green-300 w-full flex items-center gap-2 hover:text-white py-2 hover:rounded-r-full pl-5 "
        >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
            </svg>
          Home
        </Link>

        <Link 
          to={'/dashboard'}
          className="text-green-600 font-bold text-xl hover:bg-gradient-to-r hover:from-green-700 hover:to-green-300 w-full flex items-center gap-2 hover:text-white py-2 hover:rounded-r-full pl-5 "
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-calendar-icon lucide-calendar"><path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/></svg>
          Citas
        </Link>

        <Link 
          to={'/dashboard'}
          className="text-green-600 font-bold text-xl hover:bg-gradient-to-r hover:from-green-700 hover:to-green-300 w-full flex items-center gap-2 hover:text-white py-2 hover:rounded-r-full pl-5 "
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-paw-print-icon lucide-paw-print"><circle cx="11" cy="4" r="2"/><circle cx="18" cy="8" r="2"/><circle cx="20" cy="16" r="2"/><path d="M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z"/></svg>
          Mis Mascotas
        </Link>

        <Link 
          to={'/dashboard'}
          className="text-green-600 font-bold text-xl hover:bg-gradient-to-r hover:from-green-700 hover:to-green-300 w-full flex items-center gap-2 hover:text-white py-2 hover:rounded-r-full pl-5 "
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-briefcase-medical-icon lucide-briefcase-medical"><path d="M12 11v4"/><path d="M14 13h-4"/><path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/><path d="M18 6v14"/><path d="M6 6v14"/><rect width="20" height="14" x="2" y="6" rx="2"/></svg>
          Medicinas
        </Link>

        <Link 
          to={'/dashboard'}
          className="text-green-600 font-bold text-xl hover:bg-gradient-to-r hover:from-green-700 hover:to-green-300 w-full flex items-center gap-2 hover:text-white py-2 hover:rounded-r-full pl-5 "
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-clipboard-plus-icon lucide-clipboard-plus"><rect width="8" height="4" x="8" y="2" rx="1" ry="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="M9 14h6"/><path d="M12 17v-6"/></svg>
          Historial Medico
        </Link>

        <Link 
          to={'/users'}
          className="text-green-600 font-bold text-xl hover:bg-gradient-to-r hover:from-green-700 hover:to-green-300 w-full flex items-center gap-2 hover:text-white py-2 hover:rounded-r-full pl-5 "
        >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
            </svg>

          Clientes
        </Link>

        <Link 
          to={'/veterinarios'}
          className="text-green-600 font-bold text-xl hover:bg-gradient-to-r hover:from-green-700 hover:to-green-300 w-full flex items-center gap-2 hover:text-white py-2 hover:rounded-r-full pl-5 "
        >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
            </svg>

          Veterinarios
        </Link>

        <Link 
          to={'/dashboard'}
          className="text-green-600 font-bold text-xl hover:bg-gradient-to-r hover:from-green-700 hover:to-green-300 w-full flex items-center gap-2 hover:text-white py-2 hover:rounded-r-full pl-5 "
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-box-icon lucide-box"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></svg>
          Productos
        </Link>

        <Link 
          to={'/dashboard'}
          className="text-green-600 font-bold text-xl hover:bg-gradient-to-r hover:from-green-700 hover:to-green-300 w-full flex items-center gap-2 hover:text-white py-2 hover:rounded-r-full pl-5 "
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-boxes-icon lucide-boxes"><path d="M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z"/><path d="m7 16.5-4.74-2.85"/><path d="m7 16.5 5-3"/><path d="M7 16.5v5.17"/><path d="M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z"/><path d="m17 16.5-5-3"/><path d="m17 16.5 4.74-2.85"/><path d="M17 16.5v5.17"/><path d="M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z"/><path d="M12 8 7.26 5.15"/><path d="m12 8 4.74-2.85"/><path d="M12 13.5V8"/></svg>
          Categoria
        </Link>
      </aside>
    </>
  )
}
