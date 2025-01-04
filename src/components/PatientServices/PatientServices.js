// import React from "react";
// import * as S from "./Patientservices.styled";
// import ServicesCard from "../Cards/ServicesCard/ServicesCard";
// // import Button from "../Button/Button";
// import { servicesCards } from "./PatientcardsData";

// const Services = () => (
//   <div>
//       <S.Wrapper>
//       <S.ServicesTitle>Nyaari's detection and wellness features</S.ServicesTitle>
//       <S.LimitingLine isServices />
//       <S.ServicesDescription>
//         Given below are the services provided by Nyaari for our beloved sisters.
//       </S.ServicesDescription>
//       <S.CardsContainer>
//         {servicesCards.map((card) => (
//           <ServicesCard
//             key={card.id}
//             image={card.image}
//             title={card.title}
//             text={card.text}
//           />
//         ))}
//       </S.CardsContainer>
//       <S.ButtonContainer>
//       </S.ButtonContainer>
//     </S.Wrapper>
//   </div>
// );

// export default Services;
import React from "react";
import * as S from "./Patientservices.styled";
import ServicesCard from "../Cards/ServicesCard/ServicesCard";
// import Button from "../Button/Button";
import { servicesCards } from "./PatientcardsData";

const Services = () => (
  <div>
    <S.Wrapper>
      {/* ... other components */}
      <S.CardsContainer>
        {servicesCards.map((card) => (
          <ServicesCard
            key={card.id}
            image={card.image}
            title={card.title}
            text={card.text}
            path={card.path} // Provide the appropriate path for each card
          />
        ))}
      </S.CardsContainer>
      {/* ... other components */}
    </S.Wrapper>
  </div>
);

export default Services;