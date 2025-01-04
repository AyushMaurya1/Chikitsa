import React from "react";
import * as S from "./services.styled";
import ServicesCard from "../Cards/ServicesCard/ServicesCard";
// import Button from "../Button/Button";
import { servicesCards } from "./cardsData";

const Services = () => (
  <div>
      <S.Wrapper>
      <S.ServicesTitle>Our services</S.ServicesTitle>
      <S.LimitingLine isservices />
      <S.ServicesDescription>
        We are here for you to provide you with a personalised platform where you can freely discuss any of your problems with us and get instant solutions and results.
      </S.ServicesDescription>
      <S.CardsContainer>
        {servicesCards.map((card) => (
          <ServicesCard
            key={card.id}
            image={card.image}
            title={card.title}
            text={card.text}
          />
        ))}
      </S.CardsContainer>
      <S.ButtonContainer>
      </S.ButtonContainer>
    </S.Wrapper>
  </div>
);

export default Services;
