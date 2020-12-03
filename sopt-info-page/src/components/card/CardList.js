import style from 'styled-components';
import Card from './Card';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/navigation/navigation.scss';

const Wrap = style.div`
    width: 100vw;
    height: 100vw;
    display: flex;
    flex-direction: column;
`;

const HeadWrap = style.div`
    width: 100vw;
    height: 10vw;
    margin-top: 20vw;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

const HeadText = style.div`
    font-size: 6vw;
    font-weight: bold;
`;

const SideText = style.div`
    position: absolute;
    right: 3%;
    margin-top: 3.5vw;
    font-size: 1.3vw;
    color: #969696;
`;

const CardWrap = style.div`
    width: 100vw;
    overflow: hidden;
    margin: 0;
`;

const Cards = style.div`
    width: 100vw;
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 5vw 5vw;
`;

const BtnWrap = style.div`
    width: 100vw;
    height: 20vw;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-bottom: 10vw;
`;

const Btn = style.button`
    width: 10vw;
    height: 10vw;
    border-radius: 50%;
    font-size: 4vw;
    background-color: white;
    border: none;
    box-shadow: 0.3vw 0.3vw 1vw 0 rgba(38, 44, 52, 0.1);
    margin: 0 1.5vw;
    outline: none;
    border: none;
    &:focus{
        outline:none;
    }
`;

const CardList = () => {
  const onClickLeft = e => {};

  const onClickRight = e => {};

  const onClickAll = () => {};

  return (
    <>
      <Wrap>
        <HeadWrap>
          <HeadText>We are,</HeadText>
          <SideText onClick={onClickAll}>See ALL</SideText>
        </HeadWrap>
        <CardWrap>
          {/* <Cards>
                       <Card/>
                       <Card/>
                       <Card/>
                    </Cards> */}
          <Swiper
            spaceBetween={0}
            slidesPerview={1}
            loop={true}
            style={{ width: '100vw', height: '40vw' }}
          >
            <SwiperSlide
              style={{
                width: '100vw',
                padding: '0 3vw',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center',
              }}
            >
              <Card className="invisible" />
              <Card />
              <Card />
            </SwiperSlide>
            <SwiperSlide
              style={{
                width: '100vw',
                padding: '0 3vw',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center',
              }}
            >
              <Card />
              <Card />
            </SwiperSlide>
            <SwiperSlide
              style={{
                width: '100vw',
                padding: '0 3vw',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center',
              }}
            >
              <Card />
            </SwiperSlide>
          </Swiper>
        </CardWrap>
        {/* <BtnWrap>
                    <Btn onClick={onClickLeft}>&larr;</Btn>
                    <Btn onClick={onClickRight}>&rarr;</Btn>
                </BtnWrap> */}
      </Wrap>
    </>
  );
};

export default CardList;
