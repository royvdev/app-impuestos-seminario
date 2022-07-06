import * as React from 'react';
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
import {Link} from 'react-router-dom';

function createData(name, cuit, fecha, nrosucursal, nroemision) {
    return { name, cuit, fecha, nrosucursal, nroemision };
  }
  
const rowsP = [
  { cuit: "20-34374609-2",
    fecha: "15/02/1989",
    tipoComprobante: "pepe",
    nroComprobante: "123123",
    importe: "105.32"
  },
  { cuit: "20-34374609-2",
    fecha: "15/02/1989",
    tipoComprobante: "pepe",
    nroComprobante: "123123",
    importe: "105.32"
  },
  { cuit: "20-34374609-2",
    fecha: "15/02/1989",
    tipoComprobante: "pepe",
    nroComprobante: "123123",
    importe: "105.32"
  },
  { cuit: "20-34374609-2",
    fecha: "15/02/1989",
    tipoComprobante: "pepe",
    nroComprobante: "123123",
    importe: "105.32"
  }
]

const rowsR = [
  { cuit: "20-34374609-2",
    fecha: "15/02/1989",
    nroSucursal: "123123",
    nroEmision: "pepe",
    importe: "105.32"
  }
]

  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 0),
    createData('Ice cream sandwich', 237, 9.0, 0, 4.3),
    createData('Eclair', 262, 16.0, 24, 0),
    createData('Cupcake', 305, 3.7, 4.3, 0),
    createData('Gingerbread', 16.0, 49, 3.9, 0),
];
  
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

  return (
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
        <Button variant="contained" style={{float: 'right'}}  > Agregar { buttonText }</Button>
      </Link>
    </Box>
  );
}
