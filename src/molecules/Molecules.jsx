import styled from "styled-components";
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
  padding: 3rem 1rem;
  background:#fff;
  border-radius:15px;
`;
export const WpImages = styled.div`

`;
export const WpApp=styled.div`
background:linear-gradient(hsl(273, 75%, 66%), hsl(240, 73%, 65%));
padding:1rem;
`;
