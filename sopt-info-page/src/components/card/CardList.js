import style from 'styled-components';
import Card from './Card';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
// import 'swiper/swiper.scss';
// import 'swiper/components/pagination/pagination.scss';
// import 'swiper/components/navigation/navigation.scss';
import { React, useState, useEffect, useRef } from 'react';


const Wrap = style.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
`;

const HeadWrap = style.div`
    width: 100vw;
    height: 10vw;
    margin-top: 15vw;
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

    @media only screen and (max-width: 768px){
      font-size: 8px;
    }
`;

const CardWrap = style.div`
    width: 100vw;
    height: 45vw;
    overflow: hidden;
    margin: 0;

    @media only screen and (max-width: 1024px){
      height: 59vw;
    }
  
    @media only screen and (max-width: 768px){
      height: 80vw;
    }
`;

const Cards = style.div`
    width: ${props =>
    props.getWidth < 1024 ? (
      props.getWidth < 768 ?
        props.getWidth * 0.65 * props.number + 'px'
        : props.getWidth * 0.46 * props.number + 'px')
      : props.getWidth * 0.33 * props.number + 'px'
  };
    height: ${props =>
    props.getWidth < 1024 ? (
      props.getWidth < 768 ?
        props.getWidth * 0.7 + 'px'
        : props.getWidth * 0.49 + 'px')
      : props.getWidth * 0.35 + 'px'
  };
   
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
    max-width:150px;
    height: 10vw;
    max-height:150px;
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

const CardList = ({ history }) => {
  const size = useWindowSize();

  function useWindowSize() {
    const isClient = typeof window === 'object';

    function getSize() {
      return {
        width: isClient ? window.innerWidth : undefined,
        height: isClient ? window.innerHeight : undefined
      };
    }

    const [windowSize, setWindowSize] = useState(getSize);

    useEffect(() => {
      if (!isClient) {
        return false;
      }

      function handleResize() {
        setWindowSize(getSize());
      }

      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);
    console.log(windowSize);
    return windowSize;
  }

  const [Xposition, setXposition] = useState(0);
  const slideRef = useRef(null);

  const onClickLeft = e => {
    if (Xposition > 0) {
      console.log('left');
      setXposition(Xposition - size.width);
      slideRef.current.style.transition = "2s";
      slideRef.current.style.transform = `translateX(-${Xposition}px)`;
    }
  };

  const onClickRight = e => {
    //console.log(slideRef);
    if (Xposition < slideRef.current.offsetWidth) {
      console.log('right');
      async function setPosition() {
        const a = await setXposition(Xposition + size.width);
        slideRef.current.style.transition = "2s";
        slideRef.current.style.transform = `translateX(-${Xposition}px)`;
      };
      setPosition();
      // 이게 setXpositino() 실행한 다음에 
      // slideRef~ 코드 부분이 실행이 되야 되는데 그게 안돼....
      // 이 부분 어떻게 고쳐야 할지 모르겠어.....
      //console.log(slideRef.current.offsetLeft);
    }
  };



  return (
    <>
      <Wrap>
        <HeadWrap>
          <HeadText>We are,</HeadText>
          <SideText
            className="c-pointer"
            onClick={() => history.push('/member#MemberList')}
          >
            See ALL
          </SideText>
        </HeadWrap>
        <CardWrap>
          <Cards ref={slideRef} getWidth={size.width} number={8}>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </Cards>
        </CardWrap>
        <BtnWrap>
          <Btn onClick={onClickLeft}>&larr;</Btn>
          <Btn onClick={onClickRight}>&rarr;</Btn>
        </BtnWrap>
      </Wrap>
    </>
  );
};

export default CardList;
