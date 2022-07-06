import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap-icons/font/bootstrap-icons.css';
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/interfaz/Sidebar';
import StatusBar from './components/interfaz/StatusBar';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import ImpuestosScreen from './screens/impuestos/ImpuestosScreen';
import DashboardScreen from './screens/Dashboard-Contador/DashboardScreen';
import PyRScreen from './screens/RetencionesPercepciones/PyRScreen';
import AgregarPercepScreen from './screens/RetencionesPercepciones/AgregarPercepcionesScreen';
import AgregarRetencionesScreen from './screens/RetencionesPercepciones/AgregarRetencionesScreen';

function App() {
	const [loguedUser, setLoguedUser] = useState(true);

	if (loguedUser) {
		return (
			<React.Fragment>
				<Sidebar setUser={setLoguedUser} />
				<div className='d-flex flex-column w-100 h-100'>
					<StatusBar />
					<main>
						<Routes>
							<Route index element={<HomeScreen />} />
							<Route path="inicio" element={<HomeScreen />} />
							<Route path="impuestos/*" element={<ImpuestosScreen />}/>
							<Route path="dashboard/*" element={<DashboardScreen />}/>
							<Route path="pyr" element={<PyRScreen />}/>
							<Route path="pyr/Percepciones" element={<AgregarPercepScreen />}/>
							<Route path="pyr/Retenciones" element={<AgregarRetencionesScreen />}/>
						</Routes>
					</main>
				</div>
			</React.Fragment>
		);
	}
	else {
		return (
			<LoginScreen setUser={setLoguedUser} />
		);
	}
}


export default App;
