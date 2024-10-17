import styled from 'styled-components';

export const CartItemConatiner = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1em;    
    margin:1em;
`;

export const CartItemBlock = styled.div`
display: flex;
background-color: #fff;
border-radius: 8px;
box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
min-height: 100%;
`;

export const ProductImage = styled.img`
  max-width: 130px;
  max-height: 130px;
  display: block;
  margin: 4px auto 8px;
  object-fit: contain;
`;

export const ItemDetailsBlock = styled.div`
display: flex;
flex-direction: column;
justify-content:space-between;
flex:1;
padding: 1em;
`
export const ItemDetailsRow = styled.div`
  display: flex;
  margin-left: 15px;
  justify-content: space-between;
  
`;

export const ItemName = styled.p`
  font-size: 16px;
  margin: 0 0 10px 0;
`;

export const ItemPrice = styled.p`
  font-size: 16px;
  font-weight: bold;
  margin: 0;
`;

export const DeleteButton = styled.button`
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 5px 10px;
  cursor: pointer;
`;

export const QuantityControl = styled.div`
  display: flex;
  align-items: center;
`;

export const QuantityButton = styled.button`
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 5px 10px;
  cursor: pointer;
  font-size: 16px;

  &:disabled {
    background-color: #ccc;
  }
`;

export const QuantityDisplay = styled.span`
  margin: 0 10px;
  font-size: 16px;
`;

