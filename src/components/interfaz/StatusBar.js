import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import './StatusBar.css';

function StatusBar({ activeScreen, setActiveScreen }) {
    const navigate = useNavigate();

    function handleNext() {
        if (activeScreen && activeScreen.nextPath) {
            navigate(activeScreen.nextPath);
        }
    }

    function handleBack() {
        if (activeScreen && activeScreen.backPath) {
            navigate(activeScreen.backPath);
        }
    }

    return (
        <header className="statusbar__container">
            <div className='d-flex justify-content-between w-100'>
                <h2 className='text-white'>{activeScreen && activeScreen.title ? activeScreen.title : null}</h2>
                <nav className='d-flex flex-row'>
                    {activeScreen && activeScreen.backPath ? <button type="button" className="btn btn-secondary w-100 text-center mx-2" onClick={handleBack}>Anterior</button> : null}
                    {activeScreen && activeScreen.nextPath ? <button type="button" className="btn btn-success w-100 text-center mx-2" onClick={handleNext}>Siguiente</button> : null}
                </nav>
            </div>
        </header>
    );
}

export default StatusBar;