// import React from "react";
// import * as S from "../ServicesCard/servicesCard.styled";
// import PropTypes from "prop-types";

// const ServicesCard = ({ image, title, text }) => (
//   <S.ServicesCardContainer>
//     <S.ServicesCardImage>
//       <img src={image} alt="Card image" />
//     </S.ServicesCardImage>
//     <S.ServicesCardTitle>{title}</S.ServicesCardTitle>
//     <S.ServicesCardDescription>{text}</S.ServicesCardDescription>
//   </S.ServicesCardContainer>
// );

// ServicesCard.propTypes = {
//   image: PropTypes.object.isRequired,
//   title: PropTypes.string.isRequired,
//   text: PropTypes.string.isRequired,
// };

// export default ServicesCard;
// ServicesCard.js
import React from "react";
import * as S from "../ServicesCard/servicesCard.styled";
import PropTypes from "prop-types";
import { Link } from "react-router-dom"; // Import the Link component

const ServicesCard = ({ image, title, text, path }) => (
  <S.ServicesCardContainer>
    <S.ServicesCardImage>
      <img src={image} alt="Card image" />
    </S.ServicesCardImage>
    <S.ServicesCardTitle>
      {/* Use the Link component with the specified path */}
      <Link to={path}>{title}</Link>
    </S.ServicesCardTitle>
    <S.ServicesCardDescription>{text}</S.ServicesCardDescription>
  </S.ServicesCardContainer>
);

ServicesCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired, // Add the 'path' prop
};

export default ServicesCard;