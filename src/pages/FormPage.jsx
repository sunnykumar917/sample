import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import SubmitButton from '../components/FormComonents/SubmitButton';
import Textfield from '../components/FormComonents/Textfield';
import Navbar from '../components/Navbar/navbar';

const FormPage = () => {
  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    phone: '',
    gender: '',
  };

  const validationSchema = Yup.object({
    firstName: Yup.string().required('First Name is required'),
    lastName: Yup.string().required('Last Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    address: Yup.string().required('Address is required'),
    phone: Yup.string().matches(/^[0-9]{10}$/, 'Phone number must be 10 digits').required('Phone number is required'),
    gender: Yup.string().required('Gender is required'),
  });

  const onSubmit = (values) => {
    alert(JSON.stringify(values, null, 2));
  };

  return (
    <><Navbar/>
    <div 
      style={{
        width: '500px', 
        margin: 'auto',
        marginTop: '100px', 
        padding: '2rem', 
        backgroundColor: '#fff', // White background
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', 
        borderRadius: '8px', 
      }}
    >
      <h2 style={{ marginLeft: '10px' ,color: 'black'}}>Registration Form</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form>
          {/* First Name */}
          <div style={{ marginBottom: '1rem' }}>
            <label style={{ color: 'black' }}>First Name</label> {/* Black color */}
            <Textfield
              label="First Name"
              name="firstName"
              type="text"
            />
          </div>
          
          {/* Last Name */}
          <div style={{ marginBottom: '1rem' }}>
            <label style={{ color: 'black' }}>Last Name</label> {/* Black color */}
            <Textfield
              label="Last Name"
              name="lastName"
              type="text"
            />
          </div>
          
          {/* Email */}
          <div style={{ marginBottom: '1rem' }}>
            <label style={{ color: 'black' }}>Email</label> {/* Black color */}
            <Textfield
              label="Email"
              name="email"
              type="email"
            />
          </div>
          
          {/* Address */}
          <div style={{ marginBottom: '1rem' }}>
            <label style={{ color: 'black' }}>Address</label> {/* Black color */}
            <Textfield
              label="Address"
              name="address"
              type="text"
            />
          </div>
          
          {/* Phone Number */}
          <div style={{ marginBottom: '1rem' }}>
            <label style={{ color: 'black' }}>Phone Number</label> {/* Black color */}
            <Textfield
              label="Phone Number"
              name="phone"
              type="text"
            />
          </div>
          
          {/* Gender */}
          <div style={{ marginBottom: '1rem' }}>
            <label style={{ color: 'black' }}>Gender</label> {/* Black color */}
            <div>
              <label style={{ marginLeft: '10px' ,color: 'black' }}>
                <Field type="radio" name="gender" value="Male" /> Male
              </label>
              <label style={{ marginLeft: '10px' ,color: 'black' }}>
                <Field type="radio" name="gender" value="Female" /> Female
              </label>
              <label style={{ marginLeft: '10px', color: 'black' }}>
                <Field type="radio" name="gender" value="Other" /> Other
              </label>
            </div>
            <ErrorMessage name="gender" component="div" style={{ color: 'red', fontSize: '0.875rem' }} />
          </div>
          
          {/* Submit Button */}
          <SubmitButton label="Submit" />
        </Form>
      </Formik>
    </div>
    </>
  );
};

export default FormPage;
