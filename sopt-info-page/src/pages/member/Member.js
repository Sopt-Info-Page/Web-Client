import './Member.scss';

function Member({ match }) {
  // match : { params, url, path ... }
  // match.path : '/member'
  return (
    <section>
      <h1>멤버페이지 입니다</h1>
    </section>
  );
}

export default Member;
