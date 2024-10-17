import React from 'react'
import { InputContainer, Label, Input, Error} from './TextInput.styled';

export const TextInput = ({ label, formikTouched, formikError, ...props }) => {
    return (
      <InputContainer>
        <Label htmlFor={props.name}>{label}</Label>
        <Input 
          id={props.name}
          name={props.name}
          value={props.value}
          onChange={props.onChange}
          placeholder={props.placeholder} />
        {formikTouched && formikError ? (
          <Error>{formikError}</Error>
        ) : null}
      </InputContainer>
    );
  };