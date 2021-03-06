import React from 'react';
import { Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import OvalBtn from './buttons/OvalBtn';

// img import
import img_sopt_logo from '../assets/footerImg/img_sopt_logo.png';
//
const FooterWrapper = styled.div`
  width: 100vw;
  height: 439px;
  background-image: linear-gradient(#ffffff, #8dff65);
  display: flex;
`;

const SocialWrapper = styled.div`
  width: 50%;
  display: flex;
  align-items: flex-end;
  margin-left: 50px;
  margin-bottom: 100px;
  a {
    text-decoration: none;
  }
`;

const LogoWrapper = styled.div`
  width: 50%;
  margin-right: 50px;
  margin-bottom: 100px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
`;

const Logo = styled.img.attrs({
  src: img_sopt_logo,
})`
  display: block;
  width: 100px;
  height: 40px;
  margin-bottom: 25px;
`;

const CopyRight = styled.span`
  font-size: 10px;
`;

const Footer = props => (
  <>
    <FooterWrapper>
      <SocialWrapper>
        <a
          href={'https://www.youtube.com/channel/UCui_xDNrVlxAuGJUV8zmN6A'}
          target="_blank"
          rel="noopener noreferrer"
        >
          <OvalBtn
            border_color={'#FFFFFF'}
            border_width={1}
            background={'#FFFFFF'}
            color={'#FF0404'}
            height={50}
            width={120}
            font_size={'12px'}
            text={'YouTube'}
            className="mr-3 c-pointer"
          ></OvalBtn>
        </a>
        <a
          href={'https://www.facebook.com/clubsopt/'}
          target="_blank"
          rel="noopener noreferrer"
        >
          <OvalBtn
            border_color={'#FFFFFF'}
            border_width={1}
            background={'#FFFFFF'}
            color={'#0C41FF'}
            height={50}
            width={120}
            font_size={'12px'}
            className="mr-3 c-pointer"
            text={'Facebook'}
          ></OvalBtn>
        </a>
        <a href={'http://sopt.org/'} target="_blank" rel="noopener noreferrer">
          <OvalBtn
            border_color={'#FFFFFF'}
            border_width={1}
            background={'#FFFFFF'}
            color={'#000'}
            height={50}
            width={120}
            font_size={'12px'}
            className="c-pointer"
            text={'sopt.org'}
          ></OvalBtn>
        </a>
      </SocialWrapper>
      <LogoWrapper>
        <Logo></Logo>
        <CopyRight>&copy;2020,SOPT. All rights reserved.</CopyRight>
      </LogoWrapper>
    </FooterWrapper>
  </>
);

export default Footer;
