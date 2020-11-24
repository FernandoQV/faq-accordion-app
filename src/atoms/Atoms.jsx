import styled from 'styled-components'
export const Image=styled.img`
max-width:100%;
`;
export const Title1=styled.h1`
font-weight:700;
font-size:2rem;
color:hsl(237, 12%, 33%);
text-align:center;
margin:1rem 0;
`;
export const Title2=styled.h2`
font-weight:400;
font-size:1rem;
color:hsl(237, 12%, 33%);
margin-bottom:.5rem;
:hover{
    font-weight:700;
    cursor: pointer;
}
`;
export const Paragraph=styled.p`
display:${prosp=>prosp.hidden || 'block'};
font-weight:400;
font-size:1rem;
margin:.5rem 0;
color:hsl(240, 6%, 50%);
`;
export const Linea=styled.hr`
color:hsl(240, 5%, 91%);
height: 2px;
width:100%;
margin:1rem 0;
`;



