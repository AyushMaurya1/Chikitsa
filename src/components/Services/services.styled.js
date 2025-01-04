import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 120px 140px;
`;

export const DecorationBackground = styled.img`
  width: 940px;
  height: 670px;
  display: block;
  position: absolute;
  opacity: 0.6;
  left: -50px;
  right: auto;
  margin-top: 300px;
  background-size: contain;
  z-index: 1;
  background-repeat: no-repeat;
`;

export const DecorationBackgroundDots = styled.img`
  position: absolute;
  opacity: 0.6;
  background-size: contain;
  z-index: 1;
  background-repeat: no-repeat;
  right: 100px;
  margin-top: 35%;
`;

export const ServicesTitle = styled.div`
  font-family: "Mulish";
  font-weight: bold;
  font-size: 36px;
  line-height: 56px;
  color: #000000;
  text-align: center;
`;

export const ServicesDescription = styled.div`
  font-family: "Mulish";
  font-weight: 300;
  font-size: 18px;
  line-height: 30px;
  text-align: center;
  color: black;
  white-space: normal;
`;

export const LimitingLine = styled.div`
  border-bottom: ${({ isServices }) =>
    isServices ? "2px solid #fff;" : "2px solid #000;"};
  height: auto;
  width: 56px;
  margin: ${({ isServices }) => (isServices ? "35px auto" : "35px 0")};
`;

export const CardsContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 25px;
  margin-top: 20px;
  overflow-x: auto;
  z-index: 99;
  @media (min-width: 868px) {
    grid-template-columns: repeat(3, 1fr);
    overflow-x: initial;
  }
`;

export const ButtonContainer = styled.div`
  margin: 50px auto;
`;
