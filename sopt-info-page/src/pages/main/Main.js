import React from 'react';
import './Main.scss';
import styled, { createGlobalStyle, keyframes, css } from 'styled-components';
import FlowBanner from '../../components/banner/FlowBanner';
import OvalBtn from '../../components/buttons/OvalBtn';
import RoundPillBtn from '../../components/buttons/RoundPillBtn';
import CardList from '../../components/card/CardList';
import TitleHeader from '../../components/titleheader/TitleHeader';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Img import
import emoji1 from '../../assets/navImg/emoji1.png';
import emoji2 from '../../assets/navImg/emoji2.png';
import emoji3 from '../../assets/navImg/emoji3.png';
import leftCloud from '../../assets/navImg/left-cloud.png';
import rightCloud from '../../assets/navImg/right-cloud.png';
import down from '../../assets/navImg/down.png';
import blackdown from '../../assets/navImg/blackdown.png';
import eyes from '../../assets/navImg/eyes.png';

const NavWrap = styled.div`
  width: 100%;
  background-color: #8dff65;
`;

// Start About & Join Part

const moveDown = keyframes`
  0% {
    transform: translateY(-10px)
  }

  100% {
    transform: translateY(10px)
  }
`;

const DownArrow = styled.img.attrs(props => ({
  src: down,
}))`
  display: block;
  width: 60px;
  animation: ${moveDown} 0.6s ease-in infinite alternate;
`;

const AboutBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const JoinPart = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

const JoinBox = styled.div`
  padding: 50px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const JoinPartDescBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const JoinPartDesc = styled.span`
  font-size: 3vw;
  text-align: center;
`;

const JoinUs = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 3vw 0;
`;

const JoinUsText = styled.span`
  font-size: 4vw;
  font-weight: 700;
  color: #fff;
  line-height: 72px;
  letter-spacing: 3px;
`;

const EyesImg = styled.img.attrs({
  src: eyes,
})`
  width: 10vw;
`;

// End About & Join Part

// Start We are Part

const WeArePart = styled.div`
  width: 100vw;
  background-color: #ffffff;
  height: auto;
`;

// End We are Part

// Start More Part

const MorePart = styled.div`
  width: 100%;
  height: auto;
  background-color: #ffffff;
  padding-top: 50px;
`;

const MoreBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const DownArrowBlack = styled.img.attrs(props => ({
  src: blackdown,
}))`
  display: block;
  width: 60px;
  animation: ${moveDown} 0.6s ease-in infinite alternate;
`;

const MoreContentWrapper = styled.div`
  width: 95%;
  margin: 0 auto;
  height: auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  background-color: #ffffff;
`;

const MoreContent = styled.div`
  width: 100%;
  height: 220px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  position: relative;
`;

const MoreContentItem = styled.span`
  display: block;
  font-size: 2vw;
  text-align: left;
`;

const MoreContentEmoji = styled.img.attrs(props => ({
  src: props.emoji,
}))`
  display: block;
`;

const MoreContentCloudImg = styled.img.attrs(props => ({
  src: props.cloud,
}))`
  display: block;
  width: 160px;
  position: absolute;
  bottom: 0;
  ${props =>
    props.evenCloud &&
    css`
      right: 90px;
    `}
`;

// End More Part

// Start Var

const MoreMsg1 = `Sopkathon #virtual hackathon Untact Covid 19 Hackathon`;
const MoreMsg2 = `A:live Sopt 16th hackthon app-jam App Jam's Final Presentation`;
const MoreMsg3 = `KB DNA Digital Native Alliance`;

// End Var

const Main = props => {
  return (
    <>
      <NavWrap>
        <TitleHeader main /> {/* TitleHeader 컴포넌트 추가 */}
        <FlowBanner firstflow />
        <JoinPart>
          <JoinBox>
            <AboutBox>
              <OvalBtn
                className="aboutOval"
                border_color={'#FFFFFF'}
                border_width={1}
                background={'#8DFF65'}
                color={'#FFFFFF'}
                height={50}
                width={120}
                font_size={15}
                text={'about'}
              ></OvalBtn>
              <DownArrow />
            </AboutBox>
            <JoinPartDescBox>
              <JoinPartDesc>
                S.O.P.T. stands for Shout Our Passion Together
                <br />
                and is a college student union club.
                <br />
                The club consists of college students
                <br />
                from universities in the Seoul metropolitan area
                <br />
                and aims to start an IT business.
              </JoinPartDesc>
            </JoinPartDescBox>
            <JoinUs>
              <JoinUsText>Join us!</JoinUsText>
              <EyesImg />
            </JoinUs>
          </JoinBox>
          <RoundPillBtn className="roundPill" text={'so who are you?'} />
        </JoinPart>
        <WeArePart>
          <Route component={CardList} />
        </WeArePart>
        <FlowBanner secondflow />
        <MorePart>
          <MoreBox>
            <OvalBtn
              className="moreOval"
              border_color={'#000'}
              border_width={1}
              background={'#FFFFFF'}
              color={'#000'}
              height={50}
              width={120}
              font_size={15}
              text={'more'}
            ></OvalBtn>
            <DownArrowBlack />
          </MoreBox>
          <MoreContentWrapper>
            <MoreContent>
              <OvalBtn
                className="moreOval"
                border_color={'#000'}
                border_width={1}
                background={'#000'}
                color={'#FFFFFF'}
                height={40}
                width={80}
                font_size={15}
                text={'01'}
              ></OvalBtn>
              <MoreContentItem>{MoreMsg1}</MoreContentItem>
              <MoreContentEmoji emoji={emoji1} />
            </MoreContent>
            <MoreContent>
              <MoreContentCloudImg cloud={rightCloud} />
            </MoreContent>

            <MoreContent>
              <MoreContentCloudImg evenCloud cloud={leftCloud} />
            </MoreContent>
            <MoreContent>
              <OvalBtn
                className="moreOval"
                border_color={'#000'}
                border_width={1}
                background={'#000'}
                color={'#FFFFFF'}
                height={40}
                width={80}
                font_size={15}
                text={'02'}
              ></OvalBtn>
              <MoreContentItem>{MoreMsg2}</MoreContentItem>
              <MoreContentEmoji emoji={emoji2} />
            </MoreContent>

            <MoreContent>
              <OvalBtn
                className="moreOval"
                border_color={'#000'}
                border_width={1}
                background={'#000'}
                color={'#FFFFFF'}
                height={40}
                width={80}
                font_size={15}
                text={'03'}
              ></OvalBtn>
              <MoreContentItem>{MoreMsg3}</MoreContentItem>
              <MoreContentEmoji emoji={emoji3} />
            </MoreContent>
            <MoreContent>
              <MoreContentCloudImg cloud={rightCloud} />
            </MoreContent>
          </MoreContentWrapper>
        </MorePart>
      </NavWrap>
    </>
  );
};

export default Main;
