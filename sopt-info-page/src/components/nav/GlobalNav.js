import React from 'react';
import './GlobalNav.scss';
import styled, {createGlobalStyle, keyframes, css} from "styled-components";
import Header from "../header/Header";
import FlowBanner from "../banner/FlowBanner";
import OvalBtn from "../buttons/OvalBtn";
import RoundPillBtn from "../buttons/RoundPillBtn";
import img_top1 from './img_top1.png';
import img_top2 from './img_top2.png';
import img_top3 from './img_top3.png';
import img_top4 from './img_top4.png';
import img_top5 from './img_top5.png';
import img_top6 from './img_top6.png';
import img_top7 from './img_top7.png';
import emoji1 from './emoji1.png';
import emoji2 from './emoji2.png';
import emoji3 from './emoji3.png';
import leftCloud from './left-cloud.png';
import rightCloud from './right-cloud.png';
import down from './down.png';
import blackdown from './blackdown.png';
import eyes from './eyes.png';


const NavWrap = styled.div`
    width: 100%;
    background-color: #8DFF65;  
`;

// Start Design Part

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
    flex-direction:column;
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
    margin-bottom: 80px;
    letter-spacing: 2px;
`

// End Design Part

// Start About & Join Part

const DownArrow = styled.img.attrs(props => ({
    src: down,
}))
`   
    display:block;
    width: 60px;
`

const AboutBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:center;
`;

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
    flex-direction:column;
    align-items:center;
    position: relative;
`;

const JoinBox = styled.div`
    padding-top: 50px;
    width:100%;
    height: 680px;
    display:flex;
    flex-direction:column;
    justify-content: center;
    align-items:center;
`;

const JoinPartDescBox = styled.div`
    width: 100%;
    height: 280px;
    display:flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 80px;
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
    margin-bottom: 50px;
`;

const JoinUsText = styled.span`
    font-size:60px;
    font-weight:700;
    color:#fff;
    line-height: 72px;
    letter-spacing: 3px;
`;

const EyesImg = styled.img.attrs({
    src : eyes
})
`
    display:block;
    width: 100px;
    height: 100px;

`;

// End About & Join Part


// Start We are Part 

const WeArePart = styled.div`     
    width: 100%;
    height: 800px;
    background-color: #FFFFFF;
`;

// End We are Part

// Start More Part

const MorePart = styled.div`
    width:100%;
    height: auto;
    background-color: #FFFFFF;
    padding-top:80px;
`;


const MoreBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:center;
`;

const DownArrowBlack = styled.img.attrs(props => ({
    src: blackdown,
}))
`   
    display:block;
    width: 60px;
`

const MoreContentWrapper = styled.div`
    width: 95%;
    margin: 0 auto;
    height: auto;
    display:grid;
    grid-template-columns: 1fr 1fr;
    background-color: #FFFFFF;
`;

const MoreContent = styled.div`
    width:100%;
    height: 220px;
    display: flex;
    flex-direction:column;
    align-items:flex-start;
    justify-content:space-between;
    position: relative;
    
`;

const MoreContentItem = styled.span`
    display: block;
    font-size: 30px;
    text-align: left;
`;


const MoreContentEmoji = styled.img.attrs(props => ({
    src: props.emoji,
}))`
    display:block;
`;

const MoreContentCloudImg = styled.img.attrs(props=>({
    src: props.cloud,
}))`
    display:block;
    width:160px;
    position:absolute;
    bottom:0;
    ${props =>
        props.evenCloud &&
        css`
            right:90px;
        `    
    }
`;

// End More Part


// Start Var

const MoreMsg1 = `Sopkathon #virtual hackathon Untact Covid 19 Hackathon`;
const MoreMsg2 = `A:live Sopt 16th hackthon app-jam App Jam's Final Presentation`;
const MoreMsg3 = `KB DNA Digital Native Alliance`;

// End Var

const GlobalNav = (props) => {
    return(
        <>  
            <Header />
            <NavWrap>
                <DesignPart>
                    <DesignPartTitleBox>
                        <OvalBtn className="yearOval" 
                                 border_color={'#FFFFFF'} 
                                 border_width={1} 
                                 background={'#FFFFFF'} 
                                 color={'#000'} 
                                 height={50} 
                                 width={120} 
                                 font_size={15} 
                                 text={'2020'}
                                 ></OvalBtn>
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
                    <JoinBox>
                        <AboutBox>
                            <OvalBtn className="aboutOval" 
                                     border_color={'#FFFFFF'} 
                                     border_width={1} 
                                     background={'#8DFF65'} 
                                     color={'#FFFFFF'} 
                                     height={50} 
                                     width={120} 
                                     font_size={15} 
                                     text={'about'}></OvalBtn>
                            <DownArrow />
                        </AboutBox>
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
                        
                    </JoinBox>
                    <RoundPillBtn className="roundPill" text={'so who are you?'}/>
                </JoinPart>

                <WeArePart>
                    
                </WeArePart>
                <FlowBanner secondflow/>
                
                <MorePart>
                    <MoreBox>
                        <OvalBtn className="moreOval" 
                                border_color={'#000'} 
                                border_width={1}
                                background={'#FFFFFF'} 
                                color={'#000'} 
                                height={50} 
                                width={120} 
                                font_size={15} 
                                text={'more'}></OvalBtn>
                        <DownArrowBlack />
                    </MoreBox>
                    <MoreContentWrapper>

                        <MoreContent>
                            <OvalBtn className="moreOval" 
                                    border_color={'#000'} 
                                    border_width={1}
                                    background={'#000'} 
                                    color={'#FFFFFF'} 
                                    height={40} 
                                    width={80} 
                                    font_size={15} 
                                    text={'01'}></OvalBtn>
                                <MoreContentItem>{MoreMsg1}</MoreContentItem>
                                <MoreContentEmoji emoji={emoji1}/>
                        </MoreContent>
                        <MoreContent>
                            <MoreContentCloudImg cloud={rightCloud}/>
                        </MoreContent>


                        <MoreContent>
                            <MoreContentCloudImg evenCloud cloud={leftCloud}/>
                        </MoreContent>
                        <MoreContent>
                            <OvalBtn className="moreOval" 
                                    border_color={'#000'} 
                                    border_width={1}
                                    background={'#000'} 
                                    color={'#FFFFFF'} 
                                    height={40} 
                                    width={80} 
                                    font_size={15} 
                                    text={'02'}></OvalBtn>
                            <MoreContentItem>{MoreMsg2}</MoreContentItem>
                            <MoreContentEmoji emoji={emoji2}/> 
                        </MoreContent>


                        <MoreContent>
                            <OvalBtn className="moreOval" 
                                    border_color={'#000'} 
                                    border_width={1}
                                    background={'#000'} 
                                    color={'#FFFFFF'} 
                                    height={40} 
                                    width={80} 
                                    font_size={15} 
                                    text={'03'}></OvalBtn>
                            <MoreContentItem>{MoreMsg3}</MoreContentItem>
                            <MoreContentEmoji emoji={emoji3}/>
                        </MoreContent>
                        <MoreContent>
                            <MoreContentCloudImg cloud={rightCloud}/>
                        </MoreContent>


                    </MoreContentWrapper>
                </MorePart>
            </NavWrap>
        </>
    );
};

export default GlobalNav;