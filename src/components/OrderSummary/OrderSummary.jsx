import React from 'react';
import { useSelector } from 'react-redux';
import { OrderSummaryContainer, SummaryHeader, ItemList,
    SummaryFooter, Subtotal, Shipping, Tax, GrandTotal } from './OrderSummary.styled'
import { OrderItem } from '../OrderItem/OrderItem'

export const OrderSummary = () => {
    const orderItems  = useSelector((state) => state.cart);

    return (
        <OrderSummaryContainer>
        <SummaryHeader>
          <h3>Order summary</h3>
        </SummaryHeader>
        <ItemList>
          {orderItems.items.map((item) => (
            <OrderItem key={item.id} item={item} />
          ))}
        </ItemList>
        <SummaryFooter>
          <Subtotal>Subtotal: ${orderItems.totalPrice}</Subtotal>
          <Shipping>Shipping & Handling: $0.00</Shipping>
          <Tax>Tax: $0.00</Tax>
          <GrandTotal>Grand Total: ${orderItems.totalPrice}</GrandTotal>
        </SummaryFooter>
      </OrderSummaryContainer>
    );
  };