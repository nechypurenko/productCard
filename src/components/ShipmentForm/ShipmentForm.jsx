import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { TextInput } from '../UI/TextInput/TextInput';
import { FormContainer } from '../ContactInfoForm/ContactInfoForm.styled';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { saveShipmentFormData } from '../../store/shipmentInfoSlice';
import { SubmitButton } from '../UI/Button/Button';

export const ShipmentForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const validationSchema = Yup.object({
    address: Yup.string().required('Address is required'),
    apartment: Yup.string(),
    city: Yup.string().required('City is required'),
    zip: Yup.string()
      .matches(/^[0-9]+$/, 'Must be a number')
      .required('ZIP code is required'),
  });

  const formik = useFormik({
    initialValues: {
      address: '',
      apartment: '',
      city: '',
      zip: '',
    },
    validationSchema: validationSchema,
    onSubmit: values => {
      console.log("Form submitted with values:", values);
      dispatch(saveShipmentFormData(values));
      navigate('/submit');
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <FormContainer>
        <div style={{ display: 'flex', gap: '20px' }}>
        <TextInput
            label="Address (No P. O. Boxes)*"
            name="address"
            type="text"
            placeholder="Enter your address"
            value={formik.values.address}
            onChange={formik.handleChange}
            formikTouched={formik.touched.address} 
            formikError={formik.errors.address}
          />
        </div>
        <div style={{ display: 'flex', gap: '20px' }}>
          <TextInput
            label="Apartment, suite etc. (optional)"
            name="apartment"
            type="text"
            placeholder="Enter your apartment information"
            value={formik.values.apartment}
            onChange={formik.handleChange}
            formikTouched={formik.touched.apartment} 
            formikError={formik.errors.apartment}
          />
        </div>
        <div style={{ display: 'flex', gap: '20px' }}>
          <TextInput
            label="City*"
            name="city"
            type="text"
            placeholder="Enter your city"
            value={formik.values.city}
            onChange={formik.handleChange}
            formikTouched={formik.touched.city} 
            formikError={formik.errors.city}
          />
        </div>
        <div style={{ display: 'flex', gap: '20px' }}>
          <TextInput
            label="ZIP code*"
            name="zip"
            type="text"
            value={formik.values.zip}
            onChange={formik.handleChange}
            placeholder="Enter your city"
            formikTouched={formik.touched.zip} 
            formikError={formik.errors.zip}
          />
        </div>
      </FormContainer>
      <SubmitButton type="submit">Submit Order</SubmitButton>
    </form>
  );
};
