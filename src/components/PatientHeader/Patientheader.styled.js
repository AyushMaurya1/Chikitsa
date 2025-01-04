import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: initial;
  @media (min-width: 576px) {
    flex-direction: row;
    margin: ${({ $isheader }) => ($isheader ? "10% 10% 5% 10%" : "12% 10%")};
  }
`;

export const BackgroundSvg = styled.img`
  position: absolute;
  opacity: 0.2;
  background-size: cover-line;
  z-index: 1;
  background-repeat: no-repeat;
  left: 0;
  margin-top: -10%;
  mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0)); /* Add gradient mask */

`;

export const DecorationBackgroundDots = styled.img`
  position: absolute;
  opacity: 0.6;
  background-size: contain;
  z-index: 1;
  background-repeat: no-repeat;
  right: 0;
  margin-top: -10%;
`;

export const HeaderDescription = styled.div`
  margin-top: ${({ $isheader }) => ($isheader ? "10%" : "0")};
  margin-right: ${({ $isleft }) => ($isleft ? "10%" : "0")};
  margin-left: ${({ $isleft }) => ($isleft ? "0" : "10%")};
  z-index: 99;
  width: 100%;
`;

export const HeaderTitle = styled.div`
  font-family: "Mulish";
  font-weight: bold;
  font-size: 48px;
  line-height: 56px;
  color: #000000;
  white-space: normal;
  margin-bottom: 10px;
  z-index: 99;
`;

export const HeaderText = styled.div`
  font-family: "Mulish";
  font-weight: 300;
  font-size: 21px;
  line-height: 32px;
  color: black;
  z-index: 99;
`;

export const ButtonContainer = styled.div`
  margin-top: 30px;
  z-index: 99;
`;

export const HeaderImageContainer = styled.div`
  z-index: 99;
  width: 100%;
  min-height: 300px; */
`;

export const HeaderImage = styled.img`
  object-fit: cover;
  opacity: 0.9;
  max-width: 80%; /* Reduce the size of the image to 80% of its container */
  height: auto; /* Maintain aspect ratio */
  // margin-left: 40%;
  /* You can also use specific width and height if needed */
  /* width: 300px; */
  /* height: 300px; */
`;
