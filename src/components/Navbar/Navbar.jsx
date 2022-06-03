import {Link} from "react-router-dom";
import React from "react";
import styled from "styled-components";

const Nav = styled.nav`
        padding: 20px;
        display: flex;
        justify-content: center;
    `;

const StyledLink = styled(Link)`
        font-family: Arial, sans-serif;
        margin: 0 20px;
        color: black;
    `;

export function Navbar() {

    return (
        <Nav>
            <StyledLink to="/">На главную</StyledLink>
            <StyledLink to="/news">Новости</StyledLink>
            <StyledLink to="/profile">Профиль</StyledLink>
        </Nav>
    )
}