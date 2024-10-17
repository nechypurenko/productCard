import styled from 'styled-components';

export const Button = styled.button`
  margin-top: 20px;
  padding: 12px 20px;
  background-color: #10b981;
  color: white;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  display: inline-block;
  min-width: 120px;
  text-align: center;

  &:hover {
    background-color: #059669; 
  }

  &:disabled {
    background-color: #d1d5db; 
    cursor: not-allowed;
  }
`;