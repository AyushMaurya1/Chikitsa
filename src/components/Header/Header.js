import React from "react";
import * as S from "./header.styled";
import Button from "../Button/Button";
import illustration from "../../assets/img/illustration1.svg";
import newBackgroundSvg from "../../assets/img/background_header.svg";
const Header = () => (
  <div>
    <S.BackgroundSvg src={newBackgroundSvg} alt="New Background SVG" /> {/* Add this line */}
    <S.HeaderContainer $isheader="true">
      <S.HeaderDescription $isheader="true" $isleft="true">
        <S.HeaderTitle>Your Healthcare</S.HeaderTitle>
        <S.HeaderText>
          Chikitsa is a web application that provides users with the detection models as well as the cures/solutions for the problems
          faced by people in the field of healthcare.
        </S.HeaderText>
        <S.ButtonContainer>
          <Button isblue="true">Explore now</Button>
        </S.ButtonContainer>
      </S.HeaderDescription>
      <S.HeaderImageContainer>
        <S.HeaderImage src={illustration} />
      </S.HeaderImageContainer>
    </S.HeaderContainer>
  </div>
);

export default Header;
