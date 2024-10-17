import styled from 'styled-components';

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const Label = styled.label`
margin-bottom: 5px;
font-size: 14px;
color: #1f3c6b;
font-weight: 500;
`;

export const Input = styled.input`
padding: 10px 20px 10px 0;
font-size: 16px;
border: 0 none #d1d5db;
border-bottom: 1px solid #d1d5db;
border-radius: 0;
outline: none;
transition: border-color 0.3s ease;
min-width:300px;
width: 100%; 
box-sizing: border-box;

&:focus {
  border-color: #3b82f6;
}

&::placeholder {
  color: #6b7280;
}
`;

export const Error = styled.div`
  color: red;
  font-size: 12px;
`;