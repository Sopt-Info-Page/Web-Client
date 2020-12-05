import './Member.scss';
import TitleHeader from '../../components/titleheader/TitleHeader';
import style from 'styled-components';
import Card from '../../components/card/Card';

const CardListWrap = style.div`
  width: 100%;
  padding: 5vw 0;

  @media only screen and (max-width: 1024px){
    padding: 3vw 0;
  }

  @media only screen and (max-width: 768px){
    padding: 6vw 0;
  }

`;


const CardList = style.div`
  width: 100%;
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 5vw 0;
  justify-items: center;
  
  @media only screen and (max-width: 1024px){
    grid-template-columns: 1fr 1fr;
  }

  @media only screen and (max-width: 768px){
    grid-template-columns: 1fr;
  }

`;



function Member({ match }) {
  // match : { params, url, path ... }
  // match.path : '/member'
  return (
    <section>
      <TitleHeader member />
      {/* <div id="MemberList" style={{ height: '200px' }}></div> */}
      <CardListWrap>
        <CardList>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </CardList>
      </CardListWrap>
    </section>
  );
}

export default Member;
