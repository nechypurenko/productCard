import React, { useState } from 'react';
import { ProductCard } from '../../components/ProductCard/ProductCard';
import productsItem from '../../data/productItems.json'
import { HomeContainer } from './Home.styled'

export const Home = () => {
  const [products] = useState(productsItem.products);
  return (
    <HomeContainer className="home">
      <ProductCard products={products}/>
    </HomeContainer>
  );
};
