import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import './App.css'
import { Button } from '@nextui-org/react'

export default function Layout() {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('user');
        navigate('/login');
    }

    return (
        <div className='main'>

            <div className='side'>
                <section>
                    <p className="title__side">FindTrack</p>
                </section>

                <ul>
                    <li>
                        <NavLink exact to="/">Principal</NavLink>
                    </li>
                    <li >
                        <NavLink to="/shared-costs">Cuentas compartidas</NavLink>
                    </li>
                    <li>
                        <NavLink to="/goals">Metas</NavLink>
                    </li>
                    <li>
                        <NavLink to="/savings-accounts">Cajas de ahorro</NavLink>
                    </li>
                </ul>

                <section className='logout_container'>
                    <Button onPress={handleLogout} className='bg-red-600 text-white w-40'>Salir</Button>
                </section>
            </div>

            <section className='principal'>

                <Outlet />

            </section>

        </div>
    )
}

