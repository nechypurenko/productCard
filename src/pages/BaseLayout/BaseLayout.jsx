import * as React from "react";
import { Outlet } from 'react-router-dom';
import { Header } from '../../components/Header/Header'
import { MainContainer } from './BaseLayout.styled'

export const BaseLayout = () => {
    return (
        <MainContainer className="main">
            <Header />
            <Outlet />
        </MainContainer>
    );
}
