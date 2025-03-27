// src/components/FormComonents/Textfield.js
import React from 'react';
import { Field, ErrorMessage } from 'formik';
import TextField from '@mui/material/TextField'; // Using Material UI TextField component

const Textfield = ({ label, ...props }) => {
  return (
    <div style={{ marginBottom: '1rem' }}>
      <Field
        {...props}
        label={label}
        variant="outlined"
        fullWidth
        component={TextField} // Render Material UI TextField
      />
      <ErrorMessage name={props.name} component="div" style={{ color: 'red', fontSize: '0.875rem' }} />
    </div>
  );
};

export default Textfield;
