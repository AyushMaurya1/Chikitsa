import React from "react";
import * as S from "./latestSection.styled";
import * as C from "../Services/services.styled";
import NewsCard from "../Cards/NewsCard/NewsCard";
import Button from "../Button/Button";
import { newsCards } from "../Services/cardsData";
import vector_right from "../../assets/img/vector_right.svg";
import element_dots_square from "../../assets/img/element_dots_square.svg";

const LatestSection = () => (
  <div>
    <S.DecorationBackgroundDots src={element_dots_square} />
    <S.DecorationBackground src={vector_right} />
    <S.Wrapper>
      <S.SectionTitle>Check out our latest article</S.SectionTitle>
      <C.LimitingLine isservices="true" />
      <S.CardsContainer>
        {newsCards.map((card) => (
          <NewsCard
            key={card.id}
            image={card.image}
            title={card.title}
            text={card.text}
          />
        ))}
      </S.CardsContainer>
      <S.ButtonContainer>
        <Button>View all</Button>
      </S.ButtonContainer>
    </S.Wrapper>
  </div>
);

export default LatestSection;
