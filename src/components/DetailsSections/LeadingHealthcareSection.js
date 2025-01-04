import React from "react";
import * as S from "../Header/header.styled";
import * as C from "../Services/services.styled";
import leading_healthcare_illustration from "../../assets/img/leading_healthcare_illustration.svg";

const LeadingHealthcareSection = () => (
  <S.HeaderContainer>
    <S.HeaderImageContainer>
      <S.HeaderImage src={leading_healthcare_illustration} />
    </S.HeaderImageContainer>
    <S.HeaderDescription>
      <S.HeaderTitle>Your Health, Our Priority</S.HeaderTitle>
      <C.LimitingLine />
      <S.HeaderText>
        “At our core, we offer forward-thinking and cost-effective healthcare
        solutions that are accessible via mobile devices and online platforms.
        But it’s more than just a job for us; we genuinely take pride in the impactful solutions we bring to people."
      </S.HeaderText>
      <S.ButtonContainer>
      </S.ButtonContainer>
    </S.HeaderDescription>
  </S.HeaderContainer>
);

export default LeadingHealthcareSection;

