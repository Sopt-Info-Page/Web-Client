import './WhereBox.scss';
import OvalBtn from '../buttons/OvalBtn';

function WhereBox({textList, emojiList, ovalButton}) {
  return (
    <>
      <OvalBtn border_color={ovalButton.border_color} border_width={ovalButton.border_width} background={ovalButton.background} 
        color={ovalButton.color} height={ovalButton.height} width={ovalButton.width} text={ovalButton.text}/>
      {textList.map((item)=><p className='text'>{item}</p>)}
      <p className='emoji'>{emojiList.map((item)=> item)}</p>
    </>
  );
}

export default WhereBox;
