import React from 'react';
import styled from "styled-components";
import img_sopt_logo from './img_sopt_logo.png';

const FooterWrapper = styled.div`
    margin-top: 200px;
    width: 100%;
    height: 439px;
    background-image: linear-gradient(#FFFFFF ,#8DFF65);
    display: flex;
`;

const SocialWrapper = styled.div`
    width: 50%;
`;

const LogoWrapper = styled.div`
    width: 50%;
    margin-right: 50px;
    margin-bottom: 100px;
    display:flex;
    flex-direction:column;
    align-items: flex-end;
    justify-content:flex-end;
`;

const Logo = styled.img.attrs({
    src: img_sopt_logo,
})
`
    display: block;
    width: 100px;
    height: 40px;
    margin-bottom: 25px;
`;

const CopyRight = styled.span`
    font-size:10px;
`;

const Footer = (props) => (
      <>
        <FooterWrapper>
            <SocialWrapper></SocialWrapper>
            <LogoWrapper>
                <Logo></Logo>
                <CopyRight>&copy;2020,SOPT. All rights reserved.</CopyRight>
            </LogoWrapper>
        </FooterWrapper>
      </>      
    );

export default Footer;