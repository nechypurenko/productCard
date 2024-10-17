import React from 'react';
import { ContactInfoForm } from '../../components/ContactInfoForm/ContactInfoForm'
import { ContactInfoSection } from './ContactInfo.styled'

export const ContactInfo = () => {
    return (
      <ContactInfoSection>
        <h2>Contact Information</h2>
        <ContactInfoForm />
      </ContactInfoSection>
    );
  };