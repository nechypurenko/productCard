import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../../store/cartSlice'
import { ProductGrid, Card, ProductImage, CardContainer,
    ProductDesc, ProductName, ProductPrice, AddToCartButton 
} from './ProductCard.styled'

export const ProductCard = ({ products }) => {
    const dispatch = useDispatch();
    const addToCard = (product) => {
        dispatch(addItem(product));
    }
    return (
        <CardContainer>
            <ProductGrid>
                {products.map((product) => (
                <Card key={product.id}>
                    <ProductImage src={product.thumbnail} alt={product.title} />
                    <ProductDesc>
                        <ProductName>{product.title}</ProductName>
                        <ProductPrice>${product.price}</ProductPrice>
                    </ProductDesc>
                    <AddToCartButton onClick={() => addToCard(product)}>+ Add to cart</AddToCartButton>
                </Card>
                ))}
            </ProductGrid>
        </CardContainer>
    );

}