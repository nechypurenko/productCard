import styled from 'styled-components';

export const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #e0e0e0;
`;

export const ItemImage = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 8px;
  margin-right: 20px;
`;

export const ItemDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ItemName = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: #333;
  margin-bottom: 5px;
`;

export const ItemPrice = styled.div`
  font-size: 14px;
  color: #666;
`;
