import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { TextInput } from '../UI/TextInput/TextInput';
import { FormContainer } from './ContactInfoForm.styled'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { saveFormData } from '../../store/contactInfoSlice';
import { SubmitButton } from '../UI/Button/Button'

export const ContactInfoForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const validationSchema = Yup.object({
      firstName: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('First name is required'),
      lastName: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .required('Last name is required'),
      email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
      phone: Yup.string()
        .matches(/^[0-9]+$/, 'Must be a number')
        .min(10, 'Must be at least 10 digits')
        .required('Phone number is required'),
    });

    const formik = useFormik({
      initialValues: {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
      },
      validationSchema: validationSchema,
      onSubmit: values => {
        console.log("Form submitted with values:", values);
        dispatch(saveFormData(values));
        navigate('/shipment-info');
      },
    });

    
  return(
        <form onSubmit={formik.handleSubmit}>
        <FormContainer>
          <div style={{ display: 'flex', gap: '20px' }}>
            <TextInput
              label="First name*"
              name="firstName"
              type="text"
              placeholder="Enter your first name"
              value={formik.values.firstName}
              onChange={formik.handleChange}
              formikTouched={formik.touched.firstName} 
              formikError={formik.errors.firstName}
            />
            <TextInput
              label="Last name*"
              name="lastName"
              type="text"
              placeholder="Enter your last name"
              value={formik.values.lastName}
              onChange={formik.handleChange}
              formikTouched={formik.touched.lastName} 
              formikError={formik.errors.lastName}
            />
          </div>
          <div style={{ display: 'flex', gap: '20px' }}>
            <TextInput
              label="Email*"
              name="email"
              type="email"
              placeholder="Enter your email"
              value={formik.values.email}
              onChange={formik.handleChange}
              formikTouched={formik.touched.email} 
              formikError={formik.errors.email}
            />
            <TextInput
              label="Phone*"
              name="phone"
              type="text"
              placeholder="Enter your phone"
              value={formik.values.phone}
              onChange={formik.handleChange}
              formikTouched={formik.touched.phone} 
              formikError={formik.errors.phone}
            />
          </div>
          </FormContainer>
          <SubmitButton type="submit">Next step</SubmitButton>
        </form>
    );
};