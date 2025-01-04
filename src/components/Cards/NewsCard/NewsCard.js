import React from "react";
import * as S from "../NewsCard/newsCard.styled";
import right_arrow from "../../../assets/icons/right_arrow.svg";
import PropTypes from "prop-types";

const NewsCard = ({ image, title, text }) => (
  <S.NewsCardContainer>
    <S.NewsCardImage>
      <img src={image} alt="Card image" />
    </S.NewsCardImage>
    <S.NewsTextContainer>
      <S.NewsCardTitle>{title}</S.NewsCardTitle>
      <S.NewsCardDescription>{text}</S.NewsCardDescription>
      <S.ReadMoreLink>
        <S.LinkText>Read more </S.LinkText>
        <S.LinkArrow src={right_arrow} />
      </S.ReadMoreLink>
    </S.NewsTextContainer>
  </S.NewsCardContainer>
);

NewsCard.propTypes = {
  image: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default NewsCard;
