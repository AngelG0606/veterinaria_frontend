import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './views/Home'
import AuthLayout from './layouts/AuthLayout'
import Register from './views/auth/Register'
import Login from './views/auth/Login'


export default function Router() {
  return (
    <BrowserRouter>
    
        <Routes>
            <Route path='/' element={<Home />} />

            <Route element={<AuthLayout />}>
                <Route path='/auth/register' element={<Register />} />
                <Route path='/auth/login' element={<Login />} />
            </Route>

        </Routes>
    </BrowserRouter>
  )
}

