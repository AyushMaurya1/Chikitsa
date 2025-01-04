// import React from "react";
// import * as S from "./footer.styled";
// import logo_white from "../../assets/icons/logo_white.svg";
// import element_dots_square from "../../assets/img/element_dots_square.svg";
// import element_dots_white from "../../assets/img/element_dots_white.svg";

// const Footer = () => (
//   <div>
//     <S.DecorationBackgroundDots src={element_dots_square} />
//     <S.DecorationDots src={element_dots_white} />
//     <S.Wrapper>
//       <S.InfoTextTrafalgar>
//         <S.CompanyLogo>
//           <img src={logo_white} alt="Company logo" />
//         </S.CompanyLogo>
//         <S.CompanyDescription>
//           Trafalgar provides progressive, and affordable healthcare, accessible
//           on mobile and online for everyone
//         </S.CompanyDescription>
//         <S.Copyright>
//           ©Trafalgar PTY LTD {String(new Date().getFullYear())}. All rights
//           reserved
//         </S.Copyright>
//       </S.InfoTextTrafalgar>
//       <S.ColumnsWrapper>
//         <S.CompanyColumn>
//           <S.ColumnTitle>Company</S.ColumnTitle>
//           <div>
//             <S.ColumnText>About</S.ColumnText>
//             <S.ColumnText>Testimonials</S.ColumnText>
//             <S.ColumnText>Find a doctor</S.ColumnText>
//             <S.ColumnText>Apps</S.ColumnText>
//           </div>
//         </S.CompanyColumn>
//         <S.RegionColumn>
//           <S.ColumnTitle>Region</S.ColumnTitle>
//           <div>
//             <S.ColumnText>Indonesia</S.ColumnText>
//             <S.ColumnText>Singapore</S.ColumnText>
//             <S.ColumnText>Hongkong</S.ColumnText>
//             <S.ColumnText>Canada</S.ColumnText>
//           </div>
//         </S.RegionColumn>
//         <S.HelpColumn>
//           <S.ColumnTitle>Help</S.ColumnTitle>
//           <div>
//             <S.ColumnText>Help center</S.ColumnText>
//             <S.ColumnText> Contact support</S.ColumnText>
//             <S.ColumnText>Instructions</S.ColumnText>
//             <S.ColumnText>How it works</S.ColumnText>
//           </div>
//         </S.HelpColumn>
//       </S.ColumnsWrapper>
//     </S.Wrapper>
//   </div>
// );

// export default Footer;
import React from "react";
import * as S from "./footer.styled";
import logo from "../../assets/icons/Logo2.svg";

const Footer = () => (
  <div>
    {/* <S.DecorationBackgroundDots src={element_dots_square} /> */}
    {/* <S.DecorationDots src={element_dots_white} /> */}
    <S.Wrapper>
      <S.InfoTextTrafalgar>
        <S.CompanyLogo>
          <img src={logo} alt="Company logo" />
        </S.CompanyLogo>
        <S.CompanyDescription>
          Chikitsa provides progressive, and affordable healthcare, accessible
          on mobile and online for everyone.
        </S.CompanyDescription>
        <S.Copyright>
          ©CHIKITSA Pvt LTD {String(new Date().getFullYear())}. All rights
          reserved
        </S.Copyright>
      </S.InfoTextTrafalgar>
      <S.ColumnsWrapper>
        <S.CompanyColumn>
          <S.ColumnTitle>Company</S.ColumnTitle>
          <div>
            <S.ColumnText>About</S.ColumnText>
            <S.ColumnText>Testimonials</S.ColumnText>
            <S.ColumnText>Find a doctor</S.ColumnText>
            <S.ColumnText>Apps</S.ColumnText>
          </div>
        </S.CompanyColumn>
        <S.RegionColumn>
          <S.ColumnTitle>Region</S.ColumnTitle>
          <div>
            <S.ColumnText>India</S.ColumnText>
            <S.ColumnText>Pakistan</S.ColumnText>
            <S.ColumnText>Bangladesh</S.ColumnText>
            <S.ColumnText>Sri Lanka</S.ColumnText>
          </div>
        </S.RegionColumn>
        <S.HelpColumn>
          <S.ColumnTitle>Help</S.ColumnTitle>
          <div>
            <S.ColumnText>Help center</S.ColumnText>
            <S.ColumnText> Contact support</S.ColumnText>
            <S.ColumnText>Instructions</S.ColumnText>
            <S.ColumnText>How it works</S.ColumnText>
          </div>
        </S.HelpColumn>
      </S.ColumnsWrapper>
    </S.Wrapper>
  </div>
);

export default Footer;
