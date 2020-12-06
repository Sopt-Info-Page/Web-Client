import style from 'styled-components';
import Card from './Card';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
// import 'swiper/swiper.scss';
// import 'swiper/components/pagination/pagination.scss';
// import 'swiper/components/navigation/navigation.scss';
import { React, useState, useEffect, useRef } from 'react';
import getUsers from '../../lib/api/userAPI';

const Wrap = style.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
`;

const HeadWrap = style.div`
    width: 100vw;
    height: 10vw;
    margin-top: 15vw;
    margin-bottom:2rem;
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
    display: flex;
    align-items: center;

    @media only screen and (max-width: 1024px){
      height: 59vw;
    }
  
    @media only screen and (max-width: 768px){
      height: 80vw;
    }
`;

const Cards = style.div`
    width: ${props =>
      props.getWidth < 1024
        ? props.getWidth < 768
          ? props.getWidth * 0.65 * props.number + 'px'
          : props.getWidth * 0.46 * props.number + 'px'
        : props.getWidth * 0.33 * props.number + 'px'};
    height: ${props =>
      props.getWidth < 1024
        ? props.getWidth < 768
          ? props.getWidth * 0.7 + 'px'
          : props.getWidth * 0.49 + 'px'
        : props.getWidth * 0.35 + 'px'};
   
    transition: 2s;
    transform: translateX(-${props =>
      props.getWidth * props.clickNumber + 'px'});

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
    margin-bottom: 2rem;
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
  const slideRef = useRef(null);
  const [clickNumber, setClickNumber] = useState(0);
  const [users, setUsers] = useState({
    users: null,
    status: 'idle',
  });

  useEffect(() => {
    (async () => {
      setUsers({ users: null, status: 'pending' });
      try {
        const result = await getUsers();
        setUsers({ users: result, status: 'resolved' });
      } catch (e) {
        setUsers({ users: null, status: 'rejected' });
      }
    })();
  }, []);

  function useWindowSize() {
    const isClient = typeof window === 'object';

    function getSize() {
      return {
        width: isClient ? window.innerWidth : undefined,
        height: isClient ? window.innerHeight : undefined,
      };
    }

    const [windowSize, setWindowSize] = useState(getSize);

    useEffect(() => {
      if (!isClient) {
        return false;
      }

      function handleResize() {
        setWindowSize(getSize());
        setClickNumber(0);
      }
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);
    return windowSize;
  }

  const onClickLeft = e => {
    if (clickNumber > 0) {
      setClickNumber(clickNumber - 1);
    }
  };

  const onClickRight = e => {
    if ((clickNumber + 1) * size.width < slideRef.current.offsetWidth) {
      setClickNumber(clickNumber + 1);
      console.log('right');
    }
  };

  return (
    <>
      <Wrap>
        <HeadWrap>
          <HeadText>We are,</HeadText>
          <SideText
            className="c-pointer"
            onClick={() => history.push('/member/#MemberList')}
          >
            See ALL
          </SideText>
        </HeadWrap>
        <CardWrap>
          <Cards
            ref={slideRef}
            getWidth={size.width}
            number={8}
            clickNumber={clickNumber}
          >
            {users.status === 'resolved' ? (
              users.users &&
              users.users.map((user, i) => {
                return <Card key={'card-' + i} userData={user} />;
              })
            ) : (
              <></>
            )}
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
