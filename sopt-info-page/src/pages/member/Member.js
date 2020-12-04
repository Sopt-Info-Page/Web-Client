import './Member.scss';
import TitleHeader from '../../components/titleheader/TitleHeader';

function Member({ match }) {
  // match : { params, url, path ... }
  // match.path : '/member'
  return (
    <section>
      <TitleHeader member />
    </section>
  );
}

export default Member;
