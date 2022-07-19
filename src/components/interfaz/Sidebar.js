import './Sidebar.css'
import Logo from '../../logo.png';
import { NavLink } from 'react-router-dom';

function Sidebar({ setUser }) {
    const handleCerrarSesion = () => {
        setUser(null);
    };

    return (
        <aside className='sidebar__container'>
            <img src={Logo} alt='Logo' style={{width: '100%'}} />
            <nav>
                <ul>
                    <li>
                        <NavLink to="/inicio" >
                            <button type="button" className="btn btn-blue text-start">
                                <i className="bi bi-house"></i>
                                <span>Inicio</span>
                            </button>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/impuestos">
                            <button type="button" className="btn btn-blue text-start">
                                <i className="bi bi-file-earmark-text"></i>
                                <span>Impuestos</span>
                            </button>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard">
                            <button type="button" className="btn btn-blue text-start">
                                <i className="bi bi-columns"></i>
                                <span>Dashboard</span>
                            </button>
                        </NavLink>
                    </li>
                </ul>
                <ul>
                    <li>
                        <NavLink to="">
                            <button type="button" className="btn btn-secondary">Mi perfil</button>
                        </NavLink>
                    </li>
                    <li>
                        <button type="button" className="btn btn-danger" onClick={handleCerrarSesion} >Cerrar Sesion</button>
                    </li>
                </ul>
            </nav>
        </aside>
    );
}

export default Sidebar;