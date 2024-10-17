import styled from 'styled-components';

export const Card = styled.div`
  flex: 1;
  background-color: white;
  padding: 15px;
  border-radius: 5px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  margin: 10px;
`;

export const Header = styled.h3`
  font-size: 16px;
  color: #2d3748;
  display: flex;
  align-items: center;
  margin-bottom: 10px;

  svg {
    margin-right: 8px;
  }
`;

export const Details = styled.div`
  color: #4a5568;
  font-size: 14px;
  line-height: 1.5;
`;