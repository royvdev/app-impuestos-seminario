import * as React from 'react';
import { useState } from "react";
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import * as File from '../../components/LocalStorageManager';
import { NavLink } from 'react-router-dom'



function createData(name, cuit, fecha, nrosucursal, nroemision) {
  return { name, cuit, fecha, nrosucursal, nroemision };
}

let rowsP = []
let rowsR = []


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function HandleClick() {
  rowsP = []
  rowsR = []
  File.saveDataToLocalStorage('percepciones', rowsP)
  File.saveDataToLocalStorage('retenciones', rowsR)
  console.log("perceps del borrar: " + File.getDataFromLocalStorage('percepciones'))

}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);
  const tbs = ["Percepciones", "Retenciones"];
  const [buttonText, setButtonText] = React.useState(tbs[0]);
  const [buttonRedirect, setButtonRedirect] = React.useState(tbs[0]);
  
  const handleChange = (event, newValue) => {
    setValue(newValue);
    setButtonText(tbs[newValue])
    setButtonRedirect(tbs[newValue])
  };

  if (!File.getDataFromLocalStorage('percepciones') && !File.getDataFromLocalStorage('retenciones')) {
    
    File.saveDataToLocalStorage('percepciones', require('../../data/data_dummy/percepciones.json'))
    File.saveDataToLocalStorage('retenciones', require('../../data/data_dummy/retenciones.json'))
    const auxP = File.getDataFromLocalStorage('percepciones')
    const auxR = File.getDataFromLocalStorage('retenciones')

    Object.keys(auxP).forEach(function(key) {
      rowsP.push(auxP[key]);
    });

    Object.keys(auxR).forEach(function(key) {
      rowsR.push(auxR[key]);
    });

    
  } else {

    rowsP = File.getDataFromLocalStorage('percepciones'); 
    rowsR = File.getDataFromLocalStorage('retenciones'); 
    
  }

  return (
    <React.Fragment>
      <div className='d-flex flex-column'>
        <Box sx={{ width: '100%' }}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
              <Tab label="Percepciones" {...a11yProps(0)} />
              <Tab label="Retenciones" {...a11yProps(1)} />
            </Tabs>
          </Box>

          <TabPanel value={value} index={0} >
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell align="left">CUIT</TableCell>
                    <TableCell align="right">Fecha</TableCell>
                    <TableCell align="right">Tipo Comprobante</TableCell>
                    <TableCell align="right">Nro Comprobante</TableCell>
                    <TableCell align="right">Importe</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rowsP.map((row) => (
                    <TableRow
                      key={row.name}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {row.cuit}
                      </TableCell>
                      <TableCell align="right">{row.fecha}</TableCell>
                      <TableCell align="right">{row.tipoComprobante}</TableCell>
                      <TableCell align="right">{row.nroComprobante}</TableCell>
                      <TableCell align="right">{row.importe}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell align="left">CUIT</TableCell>
                    <TableCell align="right">Fecha</TableCell>
                    <TableCell align="right">Nro Sucursal</TableCell>
                    <TableCell align="right">Nro Emision</TableCell>
                    <TableCell align="right">Importe</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rowsR.map((row) => (
                    <TableRow
                      key={row.name}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {row.cuit}
                      </TableCell>
                      <TableCell align="right">{row.fecha}</TableCell>
                      <TableCell align="right">{row.nroSucursal}</TableCell>
                      <TableCell align="right">{row.nroEmision}</TableCell>
                      <TableCell align="right">{row.importe}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </TabPanel>
           
          <Link to={buttonRedirect} >
            <Button variant="contained" style={{ float: 'right' }} > Agregar {buttonText}</Button>
          </Link>
            <Button variant="contained" style={{ float: 'right' }} onClick= { HandleClick }> Borrar {buttonText}</Button>
        </Box>
        <hr />
        <div className="d-flex flex-row">
          <NavLink to="../facturacion" className="w-100">
            <button type='button' className='btn btn-secondary w-100 text-center mr-2'>Anterior</button>
          </NavLink>
          <NavLink to="../resumen" className="w-100">
            <button type='button' className='btn btn-success w-100 text-center ml-2'>Siguiente</button>
          </NavLink>
        </div>
      </div>
    </React.Fragment>
  );
}
