import React from 'react';
import styled from "styled-components";
import img_sopt_logo from './img_sopt_logo.png';

const NavWrap = styled.div`
    width: 100%;
    height: 110px;
    background-color: #8DFF65;
    display:flex;
    align-items: center;
    justify-content: space-between;
    
`;

const NavLogo = styled.img.attrs({
    src: img_sopt_logo,
})
`
    display: block;
    width: 108px;
    height: 41px;
    margin-left:50px;
`

const NavMenu = styled.div`
    display: flex;  
    margin-right:50px; 
`

const NavMenuItem = styled.span`
    font-size: 20px;
    font-weight: 400;
    margin-left: 20px;
    line-height: 25px;
    font-family: Commuters Sans;
`

const menuWho = 'Who we are';
const menuWhere = 'Where we are';

const Header = (props) => {
    return(
        <>  
            <NavWrap>
                <NavLogo />
                <NavMenu>
                    <NavMenuItem>{menuWho}</NavMenuItem>
                    <NavMenuItem>{menuWhere}</NavMenuItem>
                </NavMenu>
            </NavWrap>
        </>
    );
};

export default Header;