import * as React from "react";
import { Outlet } from 'react-router-dom';
import { CheckoutSection, CheckoutContainer } from './CheckoutLayout.styled'

export const CheckoutLayout = () => {
    return (
        <CheckoutSection>
            <CheckoutContainer className="checkout">
                <Outlet />
            </CheckoutContainer>
        </CheckoutSection>
        
    );
}
