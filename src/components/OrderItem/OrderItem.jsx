import React from 'react';
import { ItemContainer, ItemImage, ItemDetails, ItemName, ItemPrice} from './OrderItem.styled'

export const OrderItem = ({ item }) => {
    return (
      <ItemContainer>
            <ItemImage src={item.thumbnail} alt={item.title} />
            <ItemDetails>
                <ItemName>{item.title}</ItemName>
                <ItemPrice>${item.price.toFixed(2)}, {item.quantity} product{item.quantity > 1 ? 's' : ''}</ItemPrice>
            </ItemDetails>
        </ItemContainer>
        );
    };