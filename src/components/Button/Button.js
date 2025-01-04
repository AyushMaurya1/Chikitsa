// import React from "react";
// import * as S from "./button.styled";
// import PropTypes from "prop-types";

// const Button = ({ isBlue, children }) => (
//   <S.Button isBlue={isBlue}>{children}</S.Button>
// );

// Button.defaultProps = {
//   isBlue: false,
// };

// Button.propTypes = {
//   isBlue: PropTypes.bool,
//   children: PropTypes.node.isRequired,
// };

// export default Button;

// import React from "react";
// import * as S from "./button.styled";
// import PropTypes from "prop-types";

// const Button = ({ isBlue = false, children }) => (
//   <S.Button isBlue={isBlue}>{children}</S.Button>
// );

// Button.propTypes = {
//   isBlue: PropTypes.bool,
//   children: PropTypes.node.isRequired,
// };

// export default Button;


import React from "react";
import * as S from "./button.styled";
import PropTypes from "prop-types";

const Button = ({ isblue=true, children }) => (
  <S.Button isblue={isblue.toString()}>{children}</S.Button>
);

Button.propTypes = {
  isblue: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default Button;
