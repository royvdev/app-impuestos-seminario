import './LoginScreen.css';
import AppLogo from '../logo.png'

function LoginScreen({setUser}) {
    const handleSubmit = (e) => {
        console.log(e);
        setUser(true);
    }
    return (
        <main id="LoginScreen" className="d-flex justify-content-center align-items-center">
            <div className='background-opacity'></div>
            <form className='d-flex flex-column' onSubmit={handleSubmit}>
                <h1>AppImpuestos</h1>
                <img src={AppLogo} alt='Logo' className='w-50 m-2 align-self-center' ></img>
                <div className="mb-3">
                    <label htmlFor="emailInput" className="form-label">Email:</label>
                    <input type="email" className="form-control" id="emailInput" placeholder="impuestos@app.com" />
                </div>
                <div className="mb-3">
                    <label htmlFor="passwordInput" className="form-label">Contraseña:</label>
                    <input type="password" className="form-control" id="passwordInput" placeholder='**********' />
                </div>
                <button type='submit' className='btn btn-success'>Iniciar Sesion</button>
            </form>
        </main>
    );
}

export default LoginScreen;