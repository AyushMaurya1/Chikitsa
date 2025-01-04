import React from "react";
import * as S from "./Patientheader.styled";
import Button from "../Button/Button";
import illustration from "../../assets/img/illustration.svg";
import newBackgroundSvg from "../../assets/img/background_header.svg";

const Header = () => (
  <div>
    {/* <S.BackgroundSvg src={newBackgroundSvg} alt="New Background SVG" /> Add this line */}
    <S.HeaderContainer $isheader="true">
      <S.HeaderDescription $isheader="true" $isleft="true">
        <S.HeaderTitle>Welcome to our Platform</S.HeaderTitle>
        <S.HeaderText>
          You are all set to use Chikitsa. Do explore all the options below.
        </S.HeaderText>
        <S.ButtonContainer>
          <Button isblue>Explore now</Button>
        </S.ButtonContainer>
      </S.HeaderDescription>
      <S.HeaderImageContainer>
        <S.HeaderImage src={illustration} />
      </S.HeaderImageContainer>
    </S.HeaderContainer>
  </div>
);


export default Header;
