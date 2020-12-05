import style, { createGlobalStyle, keyframes, css } from 'styled-components';
import React, { useState } from 'react';
import ic_email from '../../assets/cardImg/ic_email.png';
import ic_phone from '../../assets/cardImg/ic_phone.png';

const CardWrap = style.div`
    width: 30vw;
    height: 35vw;
    border-radius: 2.2vw;
    box-shadow: 0.3vw 0.3vw 1vw 0 rgba(38, 44, 52, 0.1);
    display: flex;
    flex-direction: column;
    overflow: hidden;

    @media only screen and (max-width: 1024px){
      width: 42vw;
      height: 49vw;
      border-radius: 3.08vw;
      box-shadow: 0.42vw 0.42vw 1.4vw 0 rgba(38, 44, 52, 0.1);
    }
  
    @media only screen and (max-width: 768px){
      width: 60vw;
      height: 70vw;
      border-radius: 4.4vw;
      box-shadow: 0.6vw 0.6vw 2vw 0 rgba(38, 44, 52, 0.1);
    }
`;

const CardImg = style.img`
    width: 30vw;
    height: 27.5vw;
    background-image: url("https://i.pinimg.com/originals/a5/17/e3/a517e38cc2aa4003a639acd54680d516.jpg");
    background-repeat:no-repeat;
    background-size: auto 100%;
    background-position: center center;
    
    @media only screen and (max-width: 1024px){
      width: 42vw;
      height: 38.5vw;
    }
  
    @media only screen and (max-width: 768px){
      width: 60vw;
      height: 55vw;
    }
`;

const CardImgHover = style.div`
    display: ${props => (props.isHover ? 'flex' : 'none')};  
    flex-direction: column;
    background-color: rgba(0,0,0,0.3);
    border-radius: 2.2vw;
    width: 30vw;
    height: 30vw;
    position: absolute;
    z-index: 1;
    padding-top: 2.5vw;

    @media only screen and (max-width: 1024px){
      width: 42vw;
      height: 42vw;
      padding-top: 3.5vw;
      border-radius: 3.08vw;
    }
  
    @media only screen and (max-width: 768px){
      width: 60vw;
      height: 60vw;
      padding-top: 5vw;
      border-radius: 4.4vw;
    }
`;

const popUp = keyframes`
  0% {
    transform: scale(0);
    opacity:0;
  }

  100% {
    transform: scale(1);
    opacity:1;
  }
`;

const CardImgBubble = style.div`
    opacity:0;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 1vw;
    margin-left: 1.2vw;
    transform-origin: 0 50%;
    animation: ${popUp} 0.3s ease-in;
    animation-delay: ${props => (props.isFirst ? '0s' : '0.4s')};
    animation-fill-mode: forwards;

    @media only screen and (max-width: 1024px){
      margin-bottom: 1.4vw;
      margin-left: 1.68vw;
    }
  
    @media only screen and (max-width: 768px){
      margin-bottom: 2vw;
      margin-left: 2.4vw;
    }
`;

const CardSmallImg = style.div`
    width: 3.5vw;
    height: 3.5vw;
    border-radius: 50%;
    margin-top: 2vw; 
    margin-right: 1vw;
    background-image: ${props => 'url(' + props.link});
    background-repeat:no-repeat;
    background-size: auto 100%;
    background-position: center center;

    @media only screen and (max-width: 1024px){
      width: 4.9vw;
      height: 4.9vw;
      margin-top: 2.8vw; 
      margin-right: 1.4vw;
    }
  
    @media only screen and (max-width: 768px){
      width: 7vw;
      height: 7vw;
      margin-top: 4vw; 
      margin-right: 2vw;
    }
`;

const CardSpeechBubble = style.div`
    padding: 1.8vw 1vw;
    font-size: 0.9vw;
    font-weight: 500;
    width: auto;
    max-width: 23vw;
    background-color: #ffffff;
    border-radius: 0.5vw;
    position: relative;
    &:after{
        right: 100%;
        top: 50%;
        border: solid transparent;
        content: "";
        height: 0;
        width: 0;
        position: absolute;
        pointer-events: none;
        border-color: rgba(255, 255, 255, 0);
        border-right-color: #ffffff;
        border-width: 0.5vw;
        margin-top: -0.2vw;
    }

    @media only screen and (max-width: 1024px){
      padding: 2.16vw 2.4vw;
      font-size: 10px;
      max-width: 32.2vw;
      border-radius: 0.7vw;
      &:after{
        border-width: 0.7vw;
        margin-top: -0.28vw;
      }
    }
  
    @media only screen and (max-width: 768px){
      padding: 3.6vw 2vw;
      font-size: 10px;
      max-width: 46vw;
      border-radius: 1vw;
      &:after{
        border-width: 1vw;
        margin-top: -0.4vw;
      }
    }
`;

const CardContents = style.div`
    width: 30vw;
    height: 7.5vw;
    z-index: 2;
    float: right;
    background-color: #ffffff;

    @media only screen and (max-width: 1024px){
      width: 42vw;
      height: 10.5vw;
    }
  
    @media only screen and (max-width: 768px){
      width: 60vw;
      height: 15vw;
    }
`;

const CardMbtiTag = style.div`
    display: ${props => (props.isHover ? 'none' : 'box')};
    
    font-size: 0.9vw;
    font-weight: bold;
    color: #ffffff;
    background-color: #BA34B5;
    width: 6.5vw;
    height: auto;
    padding: 0.4vw 0;
    text-align: center;
    line-height: 0.9vw;
    border-radius: 1vw;
    position: relative;
    top: 50%; left: 7%;

    @media only screen and (max-width: 1024px){
      font-size: 10px;
      width: 9.1vw;
      padding: 0.56vw 0;
      line-height: 10px;
      border-radius: 1.4vw;
      top: 50%; left: 7%;
    }
  
    @media only screen and (max-width: 768px){
      font-size: 10px;
      width: 13vw;
      padding: 0.8vw 0;
      line-height: 10px;
      border-radius: 2vw;
      top: 50%; left: 4%;
    }
`;

const CardPartName = style.div`
    /*display: flex;*/
    display: ${props => (props.isHover ? 'none' : 'flex')};
    flex-direction: column;
    align-items: flex-end;
    margin-right: 3vw;

    @media only screen and (max-width: 1024px){
      margin-right: 4.2vw;
    }
  
    @media only screen and (max-width: 768px){
      margin-right: 6vw;
    }
`;

const CardPart = style.div`
    font-size: 0.9vw;
    font-weight: 500;

    @media only screen and (max-width: 1024px){
      font-size: 10px;
    }
  
    @media only screen and (max-width: 768px){
      font-size: 9px;
    }
`;

const CardName = style.div`
    font-size: 1.43vw;
    font-weight: bold;

    @media only screen and (max-width: 1024px){
      font-size: 15px;
    }
  
    @media only screen and (max-width: 768px){
      font-size: 13px;
    }
`;

const CardContentWrap = style.div`
    display: ${props => (props.isHover ? 'flex' : 'none')};
    flex-direction: column;
    margin-top: 0.5vw;
    margin-left: 3vw;

    @media only screen and (max-width: 1024px){
      margin-top: 0.7vw;
      margin-left: 4.2vw;
    }
  
    @media only screen and (max-width: 768px){
      margin-top: 1vw;
      margin-left: 6vw;
    }
`;

const CardContent = style.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 0.8vw;

    @media only screen and (max-width: 1024px){
      margin-top: 1.12vw;
    }
  
    @media only screen and (max-width: 768px){
      margin-top: 1.6vw;
    }
`;

const CardContentIcon = style.img`
    width: 1.3vw;
    height: 1.3vw;
    margin-right: 0.6vw;
    margin-top: 0.15vw;

    @media only screen and (max-width: 1024px){
      width: 1.82vw;
      height: 1.82vw;
      margin-right: 0.84vw;
      margin-top: 0.21vw;
    }
  
    @media only screen and (max-width: 768px){
      width: 2.6vw;
      height: 2.6vw;
      margin-right: 1.2vw;
      margin-top: 0.3vw;
    }
`;

const CardContentText = style.div`
    font-size: 0.9vw;
    font-weight: 500;
    height: 0.9vw;

    @media only screen and (max-width: 1024px){
      font-size: 10px;
      height: 10px;
    }
  
    @media only screen and (max-width: 768px){
      font-size: 10px;
    }
`;

const str1 = 'Manzu';
const str2 = 'If you want to contact me, plz send a email below. Thank you!';
const str3 = '#mbti';
const str4 = 'Grapthic Designer';
const str5 = 'SiCei Kim';
const str6 = 'hyunjin@gmail.com';
const str7 = '+821087245697';

const Card = ({ memberData }) => {
  const [isHover, setIsHover] = useState(false);

  const onHandleMouseOver = () => {
    setIsHover(true);
    console.log(isHover);
  };

  const onHandleMouseLeave = () => {
    setIsHover(false);
    console.log(isHover);
  };

  return (
    <>
      <CardWrap>
        <CardImg onMouseOver={onHandleMouseOver} />
        <CardImgHover onMouseLeave={onHandleMouseLeave} isHover={isHover}>
          <CardImgBubble isFirst={true}>
            <CardSmallImg
              link="https://i.pinimg.com/originals/a5/17/e3/a517e38cc2aa4003a639acd54680d516.jpg"
            />
            <CardSpeechBubble>Hi, I'm {str1}!</CardSpeechBubble>
          </CardImgBubble>
          <CardImgBubble isFirst={false}>
            <CardSmallImg
              link="https://i.pinimg.com/originals/a5/17/e3/a517e38cc2aa4003a639acd54680d516.jpg"
            />
            <CardSpeechBubble>{str2}</CardSpeechBubble>
          </CardImgBubble>
        </CardImgHover>
        <CardContents>
          <CardMbtiTag isHover={isHover}>{str3}</CardMbtiTag>
          <CardPartName isHover={isHover}>
            <CardPart>{str4}</CardPart>
            <CardName>{str5}</CardName>
          </CardPartName>
          <CardContentWrap isHover={isHover}>
            <CardContent>
              <CardContentIcon src={ic_email} />
              <CardContentText>{str6}</CardContentText>
            </CardContent>
            <CardContent>
              <CardContentIcon src={ic_phone} />
              <CardContentText>{str7}</CardContentText>
            </CardContent>
          </CardContentWrap>
        </CardContents>
      </CardWrap>
    </>
  );
};

export default Card;
