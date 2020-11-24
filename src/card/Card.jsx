import React, { useState } from "react";
import { Image, Title2, Paragraph, Linea } from "../atoms/Atoms";
import { WpFaq, WpQuestion } from "../molecules/Molecules";
import Arrow from "../images/icon-arrow-down.svg";
const Card = (props) => {
  const {question1,response} =props.faq

  /* esatdo oontrolador de arrow */
  const [activeQuestion, setActiveQuestion] = useState(true);

  /* estado del parrafo respuesta */

  const [hiddenParagraph, setHiddenParagraph] = useState(false);

  /* funcion que se activa al clickear la arrow */
  const activeFaq = () => {
    const arrow = document.getElementById("arrow");
    activeQuestion
      ? (arrow.style.transform = "rotate(180deg)")
      : (arrow.style.transform = "rotate(360deg)");
    setActiveQuestion(!activeQuestion);
    setHiddenParagraph(!hiddenParagraph);
  };
  return (
    <WpFaq>
      <WpQuestion>
        <Title2>{question1}</Title2>
        <Image src={Arrow} id="arrow" onClick={() => activeFaq()} />
      </WpQuestion>
      <Paragraph hidden={hiddenParagraph}>{response}</Paragraph>
      <Linea />
    </WpFaq>
  );
};

export default Card;
