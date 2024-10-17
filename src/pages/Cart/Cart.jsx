import React from 'react';
import { CartSection, Summary, SummaryRow, SummaryTotal, NextStepButton } from './Cart.styled'
import { CartProductItem } from '../../components/CartItem/CartItem'
import { useSelector } from 'react-redux';


export const Cart = () => {
    const items = useSelector((state) => state.cart.items);
    const { totalQuantity, totalPrice}  = useSelector((state) => state.cart);

    return (
        <CartSection>
            <h2>Cart</h2>
            {items.map((item) => (
                <CartProductItem
                item={item}/>
            ))}
            <Summary>
                <SummaryRow>
                    <span>Together:</span>
                    <span>{totalQuantity} products.</span>
                </SummaryRow>
                <SummaryRow>
                    <span>Sum:</span>
                    <SummaryTotal>${totalPrice.toFixed(2)}</SummaryTotal>
                </SummaryRow>
            </Summary>
            <NextStepButton to="/contact-info">Next step</NextStepButton>
        </CartSection>
    );
}