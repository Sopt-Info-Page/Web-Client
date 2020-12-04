import React from 'react';
import styled from 'styled-components';
import OvalBtn from '../buttons/OvalBtn';

// Img import
import img_top1 from '../../assets/navImg/img_top1.png';
import img_top2 from '../../assets/navImg/img_top2.png';
import img_top3 from '../../assets/navImg/img_top3.png';
import img_top4 from '../../assets/navImg/img_top4.png';
import img_top5 from '../../assets/navImg/img_top5.png';
import img_top6 from '../../assets/navImg/img_top6.png';
import img_top7 from '../../assets/navImg/img_top7.png';

const TitleHeaderWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  background-color: #8dff65;
  padding-top: 120px;
`;

const TitleHeaderBox = styled.div`
  width: 60vw;
  height: 350px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const DesignPartTitle = styled.span`
  display: block;
  text-align: center;
  font-size: min(max(30px, 5vw), 76px);
  font-weight: 700;
  line-height: 72px;
  margin-bottom: 80px;
  letter-spacing: 2px;
  position: relative;
`;

const CloudImg = styled.img.attrs(props => ({
  src: props.img,
}))`
  position: absolute;
  top: ${props => props.top}%;
  bottom: ${props => props.bottom}%;
  left: ${props => props.left}%;
  right: ${props => props.right}%;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  display: block;
`;

const DesignPartItem = styled.span`
  display: block;
  text-align: center;
  font-size: 25;
  font-weight: 400;
  line-height: 30px;
  margin-bottom: 60px;
  letter-spacing: 2px;
`;

const mainTitle1 = `ON SOPT `;
const mainTitle2 = `DESIGN TEAM`;
const memberTitle = 'We are,';

const TitleHeader = ({ main }) => (
  <TitleHeaderWrapper>
    <TitleHeaderBox>
      <OvalBtn
        className="yearOval"
        border_color={'#FFFFFF'}
        border_width={1}
        background={'#FFFFFF'}
        color={'#000'}
        height={50}
        width={120}
        font_size={15}
        text={'2020'}
      ></OvalBtn>
      <CloudImg
        img={img_top1}
        top={63}
        bottom={0}
        left={0}
        right={0}
        size={68}
      />
      <CloudImg
        img={img_top2}
        top={23}
        bottom={0}
        left={15}
        right={0}
        size={30}
      />
      <CloudImg
        img={img_top3}
        top={75}
        bottom={9}
        left={15}
        right={0}
        size={28}
      />
      <CloudImg
        img={img_top4}
        top={15}
        bottom={0}
        left={73}
        right={0}
        size={65}
      />
      <CloudImg
        img={img_top5}
        top={32}
        bottom={0}
        left={82}
        right={0}
        size={30}
      />
      <CloudImg
        img={img_top6}
        top={35}
        bottom={0}
        left={88}
        right={10}
        size={30}
      />
      <CloudImg
        img={img_top7}
        top={70}
        bottom={0}
        left={100}
        right={10}
        size={30}
      />
      <DesignPartTitle designTitle={main} className="mb-0">
        {main ? mainTitle1 : memberTitle}
      </DesignPartTitle>
      <DesignPartTitle designTitle={main}>
        {main ? mainTitle2 : ''}
      </DesignPartTitle>
    </TitleHeaderBox>
    <DesignPartItem>Shout our passion together</DesignPartItem>
  </TitleHeaderWrapper>
);

export default TitleHeader;
