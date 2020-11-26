import styled, {keyframes, css} from "styled-components";

const scrolling = keyframes`
    0%{
       transform: translateX(0);     
    }
    100%{
       transform: translateX(-100vw); 
    }
`;

const Marq = styled.div`
    width: 100%;
    height:120px;
    background-color:${(props)=>props.flowstate ? '#FFFFFF':"#8DFF65"};
    overflow:hidden;
    display:flex;
    align-items:center;
`;

const MarqUl = styled.ul`
    list-style:none;
    height:100%;
    display: flex;
    animation: ${scrolling} 12s linear infinite;
`;

const MarqLi = styled.li`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 33vw;
    flex-shrink: 0;
    white-space: nowrap;
    color: ${(props)=>props.flowstate ? '#8DFF65':'#FFFFFF'};
    font-size: 30px;
    @media (max-width: 1024px){
        
    }   
    
    font-weight: 400;
    line-height: 36px;
`;

const bannerMsg1 = 'We make ux/ui design';
const bannerMsg2 = 'ON SOPT DESIGNER';

function FlowBanner({firstflow}) {
  return (
    <>  
        <Marq flowstate={firstflow}>
            <MarqUl>
                <MarqLi flowstate={firstflow}>{firstflow ? bannerMsg1:bannerMsg2}</MarqLi>
                <MarqLi flowstate={firstflow}>{firstflow ? bannerMsg1:bannerMsg2}</MarqLi>
                <MarqLi flowstate={firstflow}>{firstflow ? bannerMsg1:bannerMsg2}</MarqLi>
                <MarqLi flowstate={firstflow}>{firstflow ? bannerMsg1:bannerMsg2}</MarqLi>
                <MarqLi flowstate={firstflow}>{firstflow ? bannerMsg1:bannerMsg2}</MarqLi>
                <MarqLi flowstate={firstflow}>{firstflow ? bannerMsg1:bannerMsg2}</MarqLi>        
            </MarqUl>
        </Marq> 
    </>
  );
}


export default FlowBanner;
