import styled from "styled-components";

export const NewsCardContainer = styled.div`
  width: 350px;
  height: 512px;
  background: #ffffff;
  box-shadow: 10px 40px 50px rgba(229, 233, 246, 0.4);
  border-radius: 30px;
  display: flex;
  flex-direction: column;
`;

export const NewsCardImage = styled.div`
  width: 369px;
  height: 246px;
  object-fit: cover;
`;

export const NewsTextContainer = styled.div`
  padding: 25px 50px 35px 50px;
`;

export const NewsCardTitle = styled.div`
  font-family: "Mulish";
  font-weight: bold;
  font-size: 21px;
  line-height: 32px;
  color: #000000;
  margin-bottom: 10px;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
    transition: opacity 0.3s;
  }
`;

export const NewsCardDescription = styled.div`
  font-family: "Mulish";
  font-weight: 300;
  font-size: 16px;
  line-height: 28px;
  margin-bottom: 30px;
  color: #7d7987;
`;

export const ReadMoreLink = styled.div`
  display: flex;
  flex-direction: row;
  cursor: pointer;
  color: #4089ed;
  text-align: center;
  &:hover {
    opacity: 0.7;
    transition: opacity 0.3s;
  }
`;

export const LinkText = styled.div`
  font-family: "Mulish";
  font-weight: 600;
  font-size: 17px;
  line-height: 28px;
  margin-right: 12px;
`;

export const LinkArrow = styled.img`
  margin-top: 3px;
`;
