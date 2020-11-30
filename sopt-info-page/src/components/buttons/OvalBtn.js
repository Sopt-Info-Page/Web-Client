import style from 'styled-components';

const Oval = style.div`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  background: ${(props) => props.background};
  border: ${(props) => props.border_width}px solid ${(props) => props.border_color};
  color: ${(props) => props.color};
  font-size: ${(props) => props.font_size};
  justify-content: center;
  align-items: center;
  display: flex;
  border-radius: ${props => props.width/2}px / ${(props) => props.height/2}px;
`
function OvalBtn({text, border_color, border_width, background, color, width, height, font_size, className}) {
  return (
  <>
    <Oval className={className} border_color={border_color} border_width={border_width} background={background} color={color} height={height} width={width} font_size={font_size}>{text}</Oval>
  </>
  );
}
export default OvalBtn;