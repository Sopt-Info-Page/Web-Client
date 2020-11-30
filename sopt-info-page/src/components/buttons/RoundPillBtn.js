import './RoundPillBtn.scss';

function RoundPillBtn({text, className}) {
  return (
    <>
      <div className= {className} className="roundPill">{text}</div>
    </>
  );
}

export default RoundPillBtn;
