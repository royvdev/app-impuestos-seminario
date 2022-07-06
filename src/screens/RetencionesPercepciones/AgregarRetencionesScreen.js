import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import {Link} from 'react-router-dom';


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
          name="Fecha de Retención"
          label="Fecha de Retención"
          onChange={formik.handleChange}
        />
         <TextField
          fullWidth
          id="NroSucursal"
          name="N° de Sucursal"
          label="N° de Sucursal"
          onChange={formik.handleChange}
        />
        <TextField
          fullWidth
          id="NroEmision"
          name="N° de Emisión"
          label="N° de Emisión"
          onChange={formik.handleChange}
        />
        <TextField
          fullWidth
          id="importe"
          name="Importe de Retencion"
          label="Importe de Retencion"
          onChange={formik.handleChange}
        />
        <Button color="primary" variant="contained" fullWidth type="submit" component={Link} to="/pyr" >
          Submit
        </Button>
      </form>
    </div>
  );
}
