import './Member.scss';
import TitleHeader from '../../components/titleheader/TitleHeader';

function Member({ match }) {
  // match : { params, url, path ... }
  // match.path : '/member'
  return (
    <section>
      <TitleHeader member />
      <div id="MemberList" style={{ height: '200px' }}></div>
    </section>
  );
}

export default Member;
