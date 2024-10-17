import React from 'react';
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import { CardBtn, Counter } from './CardBtn.styled'
import CartBtnIcon from '..//..//../assets/CartBtnIcon.svg'

export const CardButton = () => {
    const navigate = useNavigate();
    const items = useSelector((state) => state.cart.items);
    console.log("items=", items);
    const totalQuantity = useSelector((state) => state.cart.totalQuantity);
    console.log("totalQuantity=", totalQuantity);

    const redirectToCartPage = () => {
        navigate('/cart'); 
      };

    return (
        <CardBtn onClick={() => redirectToCartPage()}>
            <img src={CartBtnIcon} alt='img'></img>
            Cart
            {totalQuantity > 0 && <Counter>{totalQuantity}</Counter>}
        </CardBtn>
        
    );
}