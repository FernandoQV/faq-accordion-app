import styled from "styled-components";
import BgPatterMobile from '../images/bg-pattern-mobile.svg'
import BgPatterDesktop from '../images/bg-pattern-desktop.svg'
import BgImageMobile from '../images/illustration-woman-online-mobile.svg'
import BgImageDesktop from '../images/illustration-woman-online-desktop.svg'
import Box from '../images/illustration-box-desktop.svg'
const Flex = styled.div`
  display: flex;
`;
export const WpQuestion = styled(Flex)`
  justify-content: space-between;
  align-items: center;
  width:100%;
`;
export const WpFaq = styled(Flex)`
  flex-direction: column;
  align-items: center;
`;
export const WpFaqs = styled(WpFaq)`
  display:block;
  padding: 7rem 1rem 1rem;
  background:#fff;
  border-radius:15px;
  width:100%;
  position:relative;
`;
export const WpImages = styled.div`
  width:300px;
  height:230px;
  background:url(${BgPatterMobile}),
            url(${BgImageMobile}); 
  background-repeat:no-repeat,no-repeat;
  background-size:contain,cover; 
  background-position:center 100px,-20px;
  position:absolute;
  top:0;
  transform:translateY(-50%);
`;
export const WpApp=styled.div`
background:linear-gradient(to left,hsl(273, 75%, 66%), hsl(240, 73%, 65%));
padding:10rem 1rem 1rem;
display:flex;
flex-wrap:wrap;
align-items:center;
justify-content:flex-start;
min-height:100vh;
`;
