import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const CartSection = styled.div`
    overflow: hidden;
    display: flex;
    flex-direction: column;
`;

export const Summary = styled.div`
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid #ddd;
  display: flex;
  flex-direction: column;
  max-width: 300px;
`;

export const SummaryRow = styled.div`
  display: flex;
  margin-bottom: 10px;
  font-size: 16px;
  align-items:center;
`;

export const SummaryTotal = styled.p`
  font-size: 18px;
  font-weight: bold;
`;

export const NextStepButton = styled(Link)`
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 16px;
  display: block;
  margin-top: 20px;
  margin-right: auto;
`;

