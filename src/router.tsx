import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './views/Home'
import AuthLayout from './layouts/AuthLayout'
import Register from './views/auth/Register'
import Login from './views/auth/Login'
import AppLayout from './layouts/AppLayout'
import Dashboard from './views/Dashboard'
import UsersView from './views/users/UsersView'
import VeterinariosView from './views/veterinarios/VeterinariosView'
import MascotasView from './views/mascotas/MascotasView'


export default function Router() {
  return (
    <BrowserRouter>
    
        <Routes>
            <Route path='/' element={<Home />} />

            <Route element={<AuthLayout />}>
                <Route path='/auth/register' element={<Register />} />
                <Route path='/auth/login' element={<Login />} />
            </Route>

            <Route element={<AppLayout />}>
              <Route path='/dashboard' element={<Dashboard />} />
              <Route path='/users' element={<UsersView />} />
              <Route path='/veterinarios' element={<VeterinariosView />} />
              <Route path='/mascotas' element={<MascotasView />} />
            </Route>

        </Routes>
    </BrowserRouter>
  )
}

