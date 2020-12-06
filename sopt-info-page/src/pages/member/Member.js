import './Member.scss';
import TitleHeader from '../../components/titleheader/TitleHeader';
import style from 'styled-components';
import Card from '../../components/card/Card';
import RoundPillBtn from '../../components/buttons/RoundPillBtn';
import { React, useState, useEffect } from 'react';
import getUsers from '../../lib/api/userAPI';

const CardListWrap = style.div`
  width: 100vw;
  padding: 5vw 0;

  @media only screen and (max-width: 1024px){
    padding: 5vw 0;
  }

  @media only screen and (max-width: 768px){
    padding: 6vw 0;
  }

`;

const CardList = style.div`
  width: 100vw;
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
  const [users, setUsers] = useState({
    users: null,
    status: 'idle',
  });

  useEffect(() => {
    (async () => {
      setUsers({users: null, status: 'pending'});
      try {
        const result = await getUsers();
        setUsers({users: result, status: 'resolved'});
      } catch(e) {
        setUsers({users: null, status: 'rejected'});
      }
    })();
  },[]);
  return (
    <section>
      <TitleHeader member />
      {/* <div id="MemberList" style={{ height: '200px' }}></div> */}
      <CardListWrap>
        <CardList>
          {users.status === 'resolved'? users.users && users.users.map((user,i) => {
              return <Card key={"card-" + i} userData={user}/>
            }) : <></>
          }
        </CardList>
      </CardListWrap>
      <div
        style={{
          position: 'relative',
          left: 'calc(50% - 20vw)',
          bottom: '-100px',
        }}
      >
        <RoundPillBtn className="roundPill" text={'join on sopt!'} />
      </div>
    </section>
  );
}

export default Member;
