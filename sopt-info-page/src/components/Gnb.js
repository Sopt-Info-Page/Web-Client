import React from 'react';
import styled from 'styled-components';

// img Import
import img_sopt_logo from '../assets/headerImg/img_sopt_logo.png';
//

const NavWrap = styled.div`
  width: 100%;
  position: absolute;
  height: 110px;
  background-color: #8dff65;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const NavLogo = styled.img.attrs({
  src: img_sopt_logo,
})`
  display: block;
  width: 108px;
  height: 41px;
  margin-left: 50px;
`;

const NavMenu = styled.div`
  display: flex;
  margin-right: 50px;
`;

const NavMenuItem = styled.span`
  font-size: max(16px, 2vw);
  font-weight: 400;
  margin-left: 20px;
  line-height: 25px;
  font-family: Commuters Sans;
  cursor: pointer;
`;

const menuWho = 'Who we are';
const menuWhere = 'Where we are';

const Gnb = ({ history }) => {
  return (
    <>
      <NavWrap>
        <NavLogo />
        <NavMenu>
          <NavMenuItem onClick={() => history.push('/')}>{menuWho}</NavMenuItem>
          <NavMenuItem onClick={() => history.push('/member')}>
            {menuWhere}
          </NavMenuItem>
        </NavMenu>
      </NavWrap>
    </>
  );
};

export default Gnb;
