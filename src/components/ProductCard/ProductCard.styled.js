import styled from 'styled-components';

export const CardContainer = styled.div`
  margin: 0 auto;
  padding: 0 1em;
`;

export const ProductGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 20px;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  padding: 8px;
  min-height: 100%;
  margin: 1rem .25em;
  flex: 0 1 calc(19% - 1em);
`;

export const ProductImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  display: block;
  margin: 4px auto 8px;
  object-fit: contain;
`;

export const ProductDesc= styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ProductName = styled.span`
  font-family: Inter;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  height: 36px;
`;

export const ProductPrice = styled.p`
  color: #333;
  font-size: 16px;
  text-align: left;

`;

export const AddToCartButton = styled.button`
  background-color: #3bc14a;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  flex:1;
  padding: 10px;
`;
