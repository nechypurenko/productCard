import styled from 'styled-components';

export const OrderSummaryContainer = styled.div`
  background-color: white;
  padding: 15px;
  border-radius: 5px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;

export const SummaryHeader = styled.div`
  border-bottom: 1px solid #e2e8f0;
  margin-bottom: 15px;

  h3 {
    font-size: 18px;
    color: #2d3748;
    margin-bottom: 10px;
  }
`;

export const ItemList = styled.div`
  margin-bottom: 15px;
`;

export const SummaryFooter = styled.div`
  border-top: 1px solid #e2e8f0;
  padding-top: 15px;
`;

export const Subtotal = styled.p`
  font-weight: bold;
  color: #2d3748;
`;

export const Shipping = styled.p`
  color: #4a5568;
`;

export const Tax = styled.p`
  color: #4a5568;
`;

export const GrandTotal = styled.p`
  font-size: 18px;
  font-weight: bold;
  color: #2d3748;
`;