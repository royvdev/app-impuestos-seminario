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

function App() {
	const [loguedUser, setLoguedUser] = useState(null);

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
