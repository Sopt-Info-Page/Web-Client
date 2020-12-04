import left from '../../assets/buttonsImg/left.png'
import right from '../../assets/buttonsImg/right.png'
import style from 'styled-components';

const Icon = style.img`
    width: 52.2px;
    margin-right: 0.6vw;
    margin-top: 0.3vw;
    z-index: 1;
    margin-top: 50px;
`
const Btn = style.div`
  box-shadow: 0.3vw 0.3vw 1vw 0 rgba(38, 44, 52, 0.1);
  width: 127px;
  height: 127px;
  border-radius: 75px;
  z-index: 2;
`

function IconBtn({direction}) {
  return(
    <Btn>
      <Icon className='iconbtn' src={direction == 'left' ? left : right}/>
    </Btn>
   )
}

export default IconBtn;
