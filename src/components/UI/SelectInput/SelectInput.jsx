import React from 'react';
import { SelectWrapper, StyledLabel, StyledSelect} from './SelectInput.styled';

export const SelectInput = ({ label, name, options }) => {
  return (
    <SelectWrapper>
      <StyledLabel htmlFor={name}>{label}</StyledLabel>
      <StyledSelect id={name} name={name}>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </StyledSelect>
    </SelectWrapper>
  );
};