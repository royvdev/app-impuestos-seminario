import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import {Link} from 'react-router-dom';
import * as file from '../../components/LocalStorageManager';

var rowsP = require('./percepciones.json')

function writeToJson(){
  rowsP.push({ "cuit": "20-322329-2",
  "fecha": "15/02/1989",
  "tipoComprobante": "A",
  "nroComprobante": "123123",
  "importe": "105.32"
  });
  // console.log(rowsP);
  let json = JSON.stringify(rowsP);
  console.log(json)
  file.saveDataToLocalStorage('percepciones.json', {json})
}

const validationSchema = yup.object({
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string('Enter your password')
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
});

export default function AgregarPercepciones() {
  
  const formik = useFormik({
    initialValues: {
      email: 'foobar@example.com',
      password: 'foobar',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
    // onSubmit: () => {
    //   navigate('/dashboard/blog', { replace: true });
    // },

  });
return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          id="CUIT"
          name="CUIT"
          label="CUIT"
          onChange={formik.handleChange}
        />
        <TextField
          fullWidth
          id="Fecha"
          name="Fecha de Percepción"
          label="Fecha de Percepción"
          onChange={formik.handleChange}
        />
        <TextField
          fullWidth
          id="TipoComprobante"
          name="Tipo de Comprobante"
          label="Tipo de Comprobante"
          onChange={formik.handleChange}
        />
         <TextField
          fullWidth
          id="NroComprobante"
          name="N° de Comprobante"
          label="N° de Comprobante"
          onChange={formik.handleChange}
        />
        <TextField
          fullWidth
          id="importe"
          name="Importe de Percepción"
          label="Importe de Percepción"
          onChange={formik.handleChange}
        />
        <Button color="primary" variant="contained" fullWidth type="submit" component={Link} to="/pyr" onClick={writeToJson} >
          Submit
        </Button>
      </form>
    </div>
  );
}
