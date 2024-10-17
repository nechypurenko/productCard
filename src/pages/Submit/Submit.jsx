import React from 'react';
import checkIcon from '../../assets/confirmationOrder.svg'
import {TopConatiner, Title, InfoContainer } from './Submit.styled'
import conatctLogo  from '../../assets/contactLogo.svg';
import shipmentLogo  from '../../assets/contactLogo.svg';
import { useSelector } from 'react-redux';
import { InfoCard } from '../../components/InfoConfirmationBlock/InfoConfirmationBlock';
import { OrderSummary } from '../../components/OrderSummary/OrderSummary';


export const Submit = () => {

  const contactInfo  = useSelector((state) => state.contactInfo);
  const shipmentInfo  = useSelector((state) => state.shipmentInfo);
  const contactDetails = [
    `${contactInfo.firstName} ${contactInfo.lastName}`,
    contactInfo.email,
    contactInfo.phone
  ];

  const shipmentDetails = [
    shipmentInfo.address,
    shipmentInfo.city,
    shipmentInfo.zip
  ];

    return (
      <div>
        <TopConatiner>
          <img src={checkIcon} alt="checkImg"></img>
          <Title>Thank you for your order!</Title>
        </TopConatiner>
        <InfoContainer>
          <InfoCard
            icon={conatctLogo}
            title="Contact information"
            details={contactDetails} />
          <InfoCard
            icon={shipmentLogo}
            title="Shipment information"
            details={shipmentDetails} />
        </InfoContainer>
        <OrderSummary />
      </div>
    );
  };