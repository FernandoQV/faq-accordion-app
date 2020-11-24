import React from "react";
import { Title1 } from "../atoms/Atoms";
import { WpApp, WpFaqs, WpImages } from "../molecules/Molecules";
import Faqs from "../data.json";
import Card from "../card/Card";
const ListCards = () => {
  return (
    <WpApp>
      <WpFaqs>
      <WpImages/>
        <Title1>FAQ</Title1>
        {Faqs.map((faq) => (
          <Card key={faq.id} faq={faq} />
        ))}
      </WpFaqs>
    </WpApp>
  );
};

export default ListCards;
