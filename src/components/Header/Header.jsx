import React from 'react';
import logo from '../../assets/logo.svg'
import { CardButton } from '../UI/CardBtn/CardBtn'
import { Container, HeaderContainer , Logo } from './Header.styled'

export const Header = () => {
    return (
        <Container className='header'>
            <HeaderContainer>
                <Logo src={logo} alt="logo" />
                <CardButton />
            </HeaderContainer>    
        </Container>
    );
}