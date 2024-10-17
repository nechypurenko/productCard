import React from 'react';
import { Button } from './Button.styled'

export const SubmitButton = ({ children, ...props }) => {
    return <Button {...props}>{children}</Button>;
  };