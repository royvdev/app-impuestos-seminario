import './Sidebar.css'
import Logo from '../../logo.png';
import { Link } from 'react-router-dom';

function Sidebar({setUser}) {
    const handleCerrarSesion = () => {
        setUser(null);
    };

    return (
        <aside className='sidebar__container'>
            <img src={Logo} alt='Logo' />
            <nav>
                <ul>
                    <li>
                        <Link to="/inicio">
                            <button type="button" className="btn btn-blue text-start">
                                <i className="bi bi-house"></i>
                                <span>Inicio</span>
                            </button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/impuestos">
                            <button type="button" className="btn btn-blue text-start">
                                <i className="bi bi-file-earmark-text"></i>
                                <span>Impuestos</span>
                            </button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/dashboard">
                            <button type="button" className="btn btn-blue text-start">
                                <i className="bi bi-columns"></i>
                                <span>Dashboard</span>
                            </button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/pyr">
                            <button type="button" className="btn btn-blue text-start">
                                <i className="bi bi-columns"></i>
                                <span>Retenciones y Percepciones</span>
                            </button>
                        </Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <button type="button" className="btn btn-secondary">Mi perfil</button>
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