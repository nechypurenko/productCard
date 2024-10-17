import React from 'react';
import { CartItemConatiner, CartItemBlock, ItemDetailsBlock, ItemDetailsRow, 
    ProductImage, ItemName, ItemPrice, DeleteButton, QuantityControl,
    QuantityButton, QuantityDisplay} from './CartItem.styled'
import { useDispatch } from 'react-redux';
import { removeItem, increaseQuantity, decreaseQuantity } from '../../store/cartSlice'


export const CartProductItem = ({ item, ...props}) => {
    const dispatch = useDispatch();

    const totalPrice = (item.price * item.quantity).toFixed(2);
    const handleIncreaseQuantity = (itemId) => {
        dispatch(increaseQuantity({ id: itemId }));
    };
    
    const handleDecreaseQuantity = (itemId) => {
        dispatch(decreaseQuantity({ id: itemId }));
    };

    const handleDeleteItem = (itemId) => {
        dispatch(removeItem({ id: itemId }));
    };

    return (
        <CartItemConatiner>
            <CartItemBlock key={item.id}>
                <ProductImage src={item.thumbnail} alt={item.title} />
                <ItemDetailsBlock>
                    <ItemDetailsRow>
                        <ItemName>{item.title}</ItemName>
                        <DeleteButton onClick={() => handleDeleteItem(item.id)}>Delete</DeleteButton>
                    </ItemDetailsRow>
                    <ItemDetailsRow>
                        <QuantityControl>
                            <QuantityButton onClick={() => handleDecreaseQuantity(item.id)} disabled={item.quantity <= 1}>
                                −
                            </QuantityButton>
                            <QuantityDisplay>{item.quantity}</QuantityDisplay>
                            <QuantityButton onClick={() => handleIncreaseQuantity(item.id)}>+</QuantityButton>
                        </QuantityControl>
                        <ItemPrice>Price: ${totalPrice}</ItemPrice>
                    </ItemDetailsRow>
                </ItemDetailsBlock>
          </CartItemBlock>
        </CartItemConatiner>
    );
}