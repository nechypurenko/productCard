import styled from 'styled-components';

export const CardBtn = styled.button`
    width: 100px;
    height: 36px;
    padding: 12px 10px;
    border-radius: 8px;
    border: none;
    cursor: pointer;
    background: #00AE1C;
    color: #fff;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2px;
`;

export const Counter = styled.span`
  background-color: #ffcc00;
  color: black;
  border-radius: 50%;
  padding: 2px 6px;
  font-size: 12px;
  position: absolute;
  top: -5px;
  right: -5px;
`;
