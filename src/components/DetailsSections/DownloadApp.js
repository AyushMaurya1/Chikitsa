import React from "react";
import * as S from "../Header/header.styled";
import * as C from "../Services/services.styled";
// import Button from "../Button/Button";
import download_app_illustration from "../../assets/img/download_app_illustration.svg";
import element_dots_square from "../../assets/img/element_dots_square.svg";

const DownloadApp = () => (
  <div>
    <S.DecorationBackgroundDots src={element_dots_square} />
    <S.HeaderContainer>
      <S.HeaderDescription $isleft="true">
        <S.HeaderTitle>Instant access to Your's Retreat</S.HeaderTitle>
        <C.LimitingLine />
        <S.HeaderText>
        "Our patient engagement web portal offers instant and secure access to
         information with no app downloads required. Say goodbye to tedious forms and long phone calls!.
         Just with a single click, whenever you need help,visit Chikitsa a place to unwind and connect.""
        </S.HeaderText>
        <S.ButtonContainer>
          {/* <Button>Download &darr;</Button> */}
        </S.ButtonContainer>
      </S.HeaderDescription>
      <S.HeaderImageContainer>
        <S.HeaderImage src={download_app_illustration} />
      </S.HeaderImageContainer>
    </S.HeaderContainer>
  </div>
);

export default DownloadApp;
