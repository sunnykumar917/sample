// src/components/FormComonents/SubmitButton.js
import React from 'react';
import { Button } from '@mui/material'; // Using Material UI Button

const SubmitButton = ({ label }) => {
  return (
    <Button type="submit" variant="contained" color="primary" fullWidth>
      {label}
    </Button>
  );
};

export default SubmitButton;
