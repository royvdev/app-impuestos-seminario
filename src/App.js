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
import PerfilScreen from './screens/usuario/PerfilScreen';
import * as DB from './components/LocalStorageManager';
import puntosVentaDummy from './data/data_dummy/puntosVentaDummy.json';
import PyrScreen from './screens/RetencionesPercepciones/PYRScreen';
import AgregarPercepcionesScreen from './screens/RetencionesPercepciones/AgregarPercepcionesScreen';
import AgregarRetencionesScreen from './screens/RetencionesPercepciones/AgregarRetencionesScreen';

function App() {
	const [loguedUser, setLoguedUser] = useState(true);

	if(!DB.getDataFromLocalStorage("puntosVenta")){
		DB.saveDataToLocalStorage("puntosVenta",puntosVentaDummy);
	}
	

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
							<Route path="impuestos/*" element={<ImpuestosScreen />} />
							<Route path="dashboard/*" element={<DashboardScreen />} />
							<Route path="perfil" element={<PerfilScreen />} />
							<Route path="pyr" element={<PyrScreen />} />
							<Route path="pyr/percepciones" element={<AgregarPercepcionesScreen />} />
							<Route path="pyr/retenciones" element={<AgregarRetencionesScreen />} />
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
