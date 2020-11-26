import React from 'react';
import styled, {createGlobalStyle, keyframes, css} from "styled-components";
import Header from "../header/Header";
import FlowBanner from "../banner/FlowBanner";
import img_top1 from './img_top1.png';
import img_top2 from './img_top2.png';
import img_top3 from './img_top3.png';
import img_top4 from './img_top4.png';
import img_top5 from './img_top5.png';
import img_top6 from './img_top6.png';
import img_top7 from './img_top7.png';
import eyes from './eyes.png';

const NavWrap = styled.div`
    width: 100%;
    background-color: #8DFF65;  
`;

const DesignPart = styled.div`
    width:100%;
    height: 540px;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:flex-end;
`

const DesignPartTitleBox = styled.div`
    width: 700px;
    height: 350px;
    position:relative;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const CloudImg = styled.img.attrs(props => ({
    src: props.img,
}))
`   
    position: absolute;
    top: ${props=>props.top}%;
    bottom:${props=>props.bottom}%;
    left:${props=>props.left}%;
    right: ${props=>props.right}%;
    width: ${props=>props.size}px;
    height: ${props=>props.size}px;
    display: block;
`


const DesignPartTitle = styled.span`
    display: block;
    text-align:center;
    font-size:60px;
    font-weight:700;
    line-height: 72px;
    margin-bottom: 0px;
    letter-spacing: 2px;
`


const DesignPartItem = styled.span`
    display: block;
    text-align: center;
    font-size:25;
    font-weight: 400;
    line-height: 30px;
    margin-bottom: 60px;
    letter-spacing: 2px;
`

const JoinPart = styled.div`
    width: 100%;
    height: 920px;
    display:flex;
    flex-direction: column;
    align-items:center;
    justify-content: space-around;
`;

const JoinPartDescBox = styled.div`
    width: 100%;
    height: 280px;
    display:flex;
    justify-content: center;
    align-items: center;
`;

const JoinPartDesc = styled.span`
    font-size:38px;
    text-align:center;
`;

const JoinUs = styled.div`
    width: 350px;
    height:70px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`;

const JoinUsText = styled.span`
    font-size:60px;
    font-weight:700;
    color:#fff;
    line-height: 72px;
    letter-spacing: 3px;
`;


// We are, Part 임시 구분 용
const Temp = styled.div`     
    width: 100%;
    height: 400px;
    background-color: #fff;
`;

const EyesImg = styled.img.attrs({
    src : eyes
})
`
    display:block;
    width: 100px;
    height: 100px;

`;

const GlobalNav = (props) => {

    return(
        <>  
            <Header />
            <NavWrap>
                <DesignPart>
                    <DesignPartTitleBox>
                        <CloudImg img={img_top1} top={63} bottom={0} left={0} right={0} size={68}/>
                        <CloudImg img={img_top2} top={23} bottom={0} left={15} right={0} size={30}/>
                        <CloudImg img={img_top3} top={75} bottom={9} left={15} right={0} size={28}/>
                        <CloudImg img={img_top4} top={15} bottom={0} left={73} right={0} size={65}/>
                        <CloudImg img={img_top5} top={32} bottom={0} left={82} right={0} size={30}/>
                        <CloudImg img={img_top6} top={35} bottom={0} left={88} right={10} size={30}/>
                        <CloudImg img={img_top7} top={70} bottom={0} left={100} right={10} size={30}/>
                        <DesignPartTitle>ON SOPT <br/>DESIGN TEAM </DesignPartTitle>
                    </DesignPartTitleBox>
                    <DesignPartItem>Shout our passion together</DesignPartItem>
                </DesignPart>
                <FlowBanner firstflow/>
                <JoinPart>
                    <JoinPartDescBox>
                        <JoinPartDesc>
                        S.O.P.T. stands for Shout Our Passion Together<br/>
                        and is a college student union club.<br/>
                        The club consists of college students<br/> 
                        from universities in the Seoul metropolitan area<br/> 
                        and aims to start an IT business.
                        </JoinPartDesc>
                    </JoinPartDescBox>

                    <JoinUs>
                        <JoinUsText>Join us!</JoinUsText>
                        <EyesImg />
                    </JoinUs>
                </JoinPart>
                <Temp></Temp>
                <FlowBanner secondflow/>
            </NavWrap>
        </>
    );
};

export default GlobalNav;