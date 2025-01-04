// import styled from "styled-components";

// export const Wrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   padding: 100px;
//   background: linear-gradient(183.41deg, #67c3f3 -8.57%, #5a98f2 82.96%);
//   @media (min-width: 768px) {
//     flex-direction: row;
//   }
// `;

// export const DecorationBackgroundDots = styled.img`
//   position: absolute;
//   opacity: 0.6;
//   background-size: contain;
//   z-index: 1;
//   background-repeat: no-repeat;
//   right: 7%;
//   margin-top: -5%;
// `;

// export const DecorationDots = styled.img`
//   position: absolute;
//   opacity: 0.6;
//   background-size: contain;
//   background-repeat: no-repeat;
// `;

// export const InfoTextTrafalgar = styled.div`
//   display: flex;
//   flex-direction: column;
//   flex: 1;
//   margin-right: 150px;
// `;

// export const CompanyLogo = styled.div`
//   float: left;
// `;

// export const CompanyDescription = styled.div`
//   font-family: "Mulish";
//   font-weight: 300;
//   font-size: 18px;
//   line-height: 28px;
//   color: #ffffff;
//   margin: 20px 0 90px 0;
// `;

// export const Copyright = styled.div`
//   font-family: "Mulish";
//   font-weight: 300;
//   font-size: 16px;
//   line-height: 28px;
//   color: #ffffff;
//   margin-bottom: 30px;
//   @media (min-width: 768px) {
//     margin-bottom: 0;
//   }
// `;

// export const ColumnsWrapper = styled.div`
//   display: flex;
//   flex: 1;
//   flex-direction: column;
//   @media (min-width: 576px) {
//     flex-direction: row;
//   }
// `;

// export const CompanyColumn = styled.div`
//   display: flex;
//   flex-direction: column;
//   flex: 1;
//   margin-right: 0;
//   @media (min-width: 768px) {
//     margin-right: 30px;
//   }
//   @media (min-width: 1200px) {
//     margin-right: 0;
//   }
// `;

// export const RegionColumn = styled.div`
//   display: flex;
//   flex-direction: column;
//   flex: 1;
//   margin-right: 0;
//   @media (min-width: 768px) {
//     margin-right: 30px;
//   }
//   @media (min-width: 1200px) {
//     margin-right: 0;
//   }
// `;

// export const HelpColumn = styled.div`
//   display: flex;
//   flex-direction: column;
//   flex: 1;
// `;

// export const ColumnTitle = styled.div`
//   font-family: "Mulish";
//   font-weight: 600;
//   font-size: 20px;
//   line-height: 60px;
//   color: #ffffff;
//   margin: 30px 0 10px 0;
//   @media (min-width: 576px) {
//     margin: 0 0 30px 0;
//   }
// `;

// export const ColumnText = styled.div`
//   font-family: "Mulish";
//   font-style: 400;
//   font-weight: 300;
//   font-size: 18px;
//   line-height: 38px;
//   color: #ffffff;
//   cursor: pointer;
//   &:hover {
//     text-decoration: underline;
//   }
// `;
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 100px;
  background: linear-gradient(183.41deg, #67c3f3 -8.57%, #5a98f2 82.96%);
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const DecorationBackgroundDots = styled.img`
  position: absolute;
  opacity: 0.6;
  background-size: contain;
  z-index: 1;
  background-repeat: no-repeat;
  right: 7%;
  margin-top: -5%;
`;

export const DecorationDots = styled.img`
  position: absolute;
  opacity: 0.6;
  background-size: contain;
  background-repeat: no-repeat;
`;

export const InfoTextTrafalgar = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-right: 150px;
`;

export const CompanyLogo = styled.div`
  float: left;
  img {
    width: 100px; /* Adjust the width as needed */
    height: auto; /* Ensures the aspect ratio is maintained */
  }
`;

export const CompanyDescription = styled.div`
  font-family: "Mulish";
  font-weight: 300;
  font-size: 18px;
  line-height: 28px;
  color: #ffffff;
  margin: 20px 0 90px 0;
`;

export const Copyright = styled.div`
  font-family: "Mulish";
  font-weight: 300;
  font-size: 16px;
  line-height: 28px;
  color: #ffffff;
  margin-bottom: 30px;
  @media (min-width: 768px) {
    margin-bottom: 0;
  }
`;

export const ColumnsWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  @media (min-width: 576px) {
    flex-direction: row;
  }
`;

export const CompanyColumn = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-right: 0;
  @media (min-width: 768px) {
    margin-right: 30px;
  }
  @media (min-width: 1200px) {
    margin-right: 0;
  }
`;

export const RegionColumn = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-right: 0;
  @media (min-width: 768px) {
    margin-right: 30px;
  }
  @media (min-width: 1200px) {
    margin-right: 0;
  }
`;

export const HelpColumn = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const ColumnTitle = styled.div`
  font-family: "Mulish";
  font-weight: 600;
  font-size: 20px;
  line-height: 60px;
  color: #ffffff;
  margin: 30px 0 10px 0;
  @media (min-width: 576px) {
    margin: 0 0 30px 0;
  }
`;

export const ColumnText = styled.div`
  font-family: "Mulish";
  font-style: 400;
  font-weight: 300;
  font-size: 18px;
  line-height: 38px;
  color: #ffffff;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;
