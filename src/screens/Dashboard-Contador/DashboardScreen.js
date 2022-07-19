import CardBasic from "../../components/interfaz/CardBasic";
import {Link, Route, Routes } from 'react-router-dom';
import React from "react";
import DashboardMainScreen from "./DashboardMainScreen";
import Box from '@mui/material/Box';


function DashboardScreen() {
    const MainScreen = () => {
        return (
            <React.Fragment>
                <article className='mb-5'>
                <h2>Dashboard Gestor</h2>
                <hr />
                <ul className='d-flex flex-wrap list-unstyled'>
                    <li className='m-3 d-flex align-content-stretch'>
                        <CardBasic title="Pablo Rubini" subtitle="Vencimiento: 29/07/2022">
                            <Link to="/contribuyente">
                                <Box sx={{ marginBottom: '3px' }} ><button type='button' className='btn btn-success w-100 text-center'  >Ver Perfil </button></Box>
                            </Link>
                            <Link to="/impuestos">
                                <button type='button' className='btn btn-success w-100 text-center'>Declarar</button>
                            </Link>
                        </CardBasic>
                    </li>
                    
                </ul>
            </article>
            </React.Fragment>
        );
    };

    return (
        <React.Fragment>
            <Routes>
                <Route index path="" element={<MainScreen />} />
                <Route path="" element={<MainScreen />} />
                <Route path="impuestos/IIBB" element={<DashboardMainScreen />} />
            </Routes>
        </React.Fragment>
    );
}

export default DashboardScreen;