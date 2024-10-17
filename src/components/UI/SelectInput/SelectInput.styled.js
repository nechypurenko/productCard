import styled from 'styled-components';

export const SelectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  min-width: 250px;
`;

export const StyledLabel = styled.label`
  margin-bottom: 5px;
  font-size: 14px;
  color: #1f3c6b;
  font-weight: 500;
`;

export const StyledSelect = styled.select`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #d1d5db;
  border-radius: 4px;
  outline: none;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #3b82f6;
  }
  &::placeholder {
    color: #6b7280;
  }
`;