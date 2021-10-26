import React, { Fragment } from "react";
import styled from "styled-components";
import PokeLogo from "../assets/images/logo.png"

const HeaderContent = styled.header`
    background-color: #212121;
    padding: 5px;
    color: #f3f4f5;
    text-align: center;

    h1{
        font-size: 11px;
        font-family: 'Poppins';
        letter-spacing: 0.5px;
        font-weight: 100;
    }
`;

const MainHeader = styled.div`
    max-width: 980px;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;

    i{
        font-size: 22px;
        color: #212121;
    }
`;

const Header = () => {
    return (
      <Fragment>
        <HeaderContent>
            <h1>Pokedex com react e styled components</h1>
        </HeaderContent>
        <MainHeader>
            <img src={PokeLogo} width="100px" alt="Logo"/>
            <a href="https://github.com/jomenaalves" target="blank">
                <i className="fab fa-github"></i>
            </a>
        </MainHeader>
      </Fragment>
    );
}

export default Header;