import React, { useState } from "react";
import styled from 'styled-components'
import { Image, Title2, Paragraph, Linea } from "../atoms/Atoms";
import { WpFaq, WpQuestion } from "../molecules/Molecules";
import Arrow from "../images/icon-arrow-down.svg";
const Arroww=styled(Image)`
transform:${props=>props.rotate?'rotate(180deg)':'rotate(0deg)'};
`;
const Card = (props) => {
  const {question1,response} =props.faq

  /* esatdo oontrolador de arrow */
  const [activeQuestion, setActiveQuestion] = useState(false);

  /* estado del parrafo respuesta */

  const [hiddenParagraph, setHiddenParagraph] = useState(true);

  /* funcion que se activa al clickear la arrow */
  
  const activeFaq = (event) => {
    setActiveQuestion(!activeQuestion)
    setHiddenParagraph(!hiddenParagraph)
  };
  return (
    <WpFaq>
      <WpQuestion>
        <Title2>{question1}</Title2>
        <Arroww src={Arrow} rotate={activeQuestion} onClick={(event) => activeFaq(event)} />
      </WpQuestion>
      <Paragraph hidden={hiddenParagraph}>{response}</Paragraph>
      <Linea />
    </WpFaq>
  );
};

export default Card;
