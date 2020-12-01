import style from 'styled-components';
import React, {useState} from 'react';
import ic_email from './ic_email.png';
import ic_phone from './ic_phone.png';


const CardWrap = style.div`

    width: 30vw;
    height: 35vw;
    border-radius: 2.2vw;
    box-shadow: 0.3vw 0.3vw 1vw 0 rgba(38, 44, 52, 0.1);
    display: flex;
    flex-direction: column;
    overflow: hidden;
`;

const CardImg = style.img`
    width: 30vw;
    height: 27.5vw;
    @media (max-width: 1024px){

    }
`;

const CardImgHover = style.div`
    display: ${(props) => (props.isHover ? 'flex' : 'none')};  
    flex-direction: column;
    background-color: rgba(0,0,0,0.3);
    border-radius: 2.2vw;
    width: 30vw;
    height: 30vw;
    position: absolute;
    z-index: 1;
    padding-top: 2.5vw;
`;

const CardImgBubble = style.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 1vw;
    margin-left: 1.2vw;
`;

const CardSmallImg = style.img`
    border: solid 1px;
    width: 3.5vw;
    height: 3.5vw;
    border-radius: 50%;
    margin-top: 2vw; 
    margin-right: 1vw;
`;

const CardSpeechBubble = style.div`
    padding: 1.8vw 1vw;
    font-size: 0.9vw;
    font-weight: 500;
    width: auto;
    max-width: 21vw;
    background-color: #ffffff;
    border-radius: 1vw;
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
`;

const CardContents = style.div`
    width: 30vw;
    height: 7.5vw;
    z-index: 2;
    float: right;
    background-color: #ffffff;
`;

const CardMbtiTag = style.div`
    display: ${(props) => (props.isHover ? 'none' : 'box')};
    
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
`;

const CardPartName = style.div`
    /*display: flex;*/
    display: ${(props) => (props.isHover ? 'none' : 'flex')};
    flex-direction: column;
    align-items: flex-end;
    margin-right: 3vw;
`;

const CardPart = style.div`
    font-size: 0.9vw;
    font-weight: 500;
`;

const CardName = style.div`
    font-size: 1.43vw;
    font-weight: bold;
`;

const CardContentWrap = style.div`
    display: ${(props) => (props.isHover ? 'flex' : 'none')};
    flex-direction: column;
    margin-top: 0.5vw;
    margin-left: 3vw;
`;


const CardContent = style.div`
    display: flex;
    flex-direction: row;
    margin-top: 0.8vw;
`;

const CardContentIcon = style.img`
    width: 1.3vw;
    height: 1.3vw;
    margin-right: 0.6vw;
    margin-top: 0.3vw;
`;

const CardContentText = style.div`
    font-size: 0.9vw;
    font-weight: 500;
`;

const str1 = "Manzu";
const str2 = "If you want to contact me, plz send a email below. Thank you!";
const str3 = "#mbti";
const str4 = "Grapthic Designer";
const str5 = "SiCei Kim";
const str6 = "hyunjin@gmail.com";
const str7 = "+821087245697";

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
    
    return(
        <>
            <CardWrap>
                <CardImg onMouseOver={onHandleMouseOver}/>
                <CardImgHover onMouseLeave = {onHandleMouseLeave} isHover={isHover}>
                    <CardImgBubble>
                        <CardSmallImg />
                        <CardSpeechBubble>Hi, I'm {str1}!</CardSpeechBubble>
                    </CardImgBubble>
                    <CardImgBubble>
                        <CardSmallImg />
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
                            <CardContentIcon src={ic_email}/>
                            <CardContentText>{str6}</CardContentText>
                        </CardContent>
                        <CardContent>
                            <CardContentIcon src={ic_phone}/>
                            <CardContentText>{str7}</CardContentText>
                        </CardContent>
                    </CardContentWrap>
                </CardContents>
            </CardWrap>
        </>
    );
}

export default Card;