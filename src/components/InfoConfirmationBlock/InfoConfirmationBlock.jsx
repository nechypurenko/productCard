import React from 'react';
import { Card, Header, Details } from './InfoConfirmationBlock.styled'

export const InfoCard = ({ icon, title, details }) => {
    return (
      <Card>
        <Header>
            <img src={icon} alt='img'></img>
             {title}
        </Header>
        <Details>
          {details.map((line, index) => (
            <div key={index}>{line}</div>
          ))}
        </Details>
      </Card>
    );
  };