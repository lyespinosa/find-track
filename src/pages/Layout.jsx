import { NavLink, Outlet } from 'react-router-dom'
import './App.css'

export default function Layout() {

    return (
        <div className='main'>

            <div className='side'>
                <p className="title__side">FindTrack</p>

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
            </div>

            <section className='principal'>

                <Outlet />

            </section>

        </div>
    )
}

