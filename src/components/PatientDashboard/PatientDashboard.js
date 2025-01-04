import React from "react";
import * as S from "./PatientDashboard.styled.js";
import PatientHeader from "../PatientHeader/PatientHeader";
import PatientServices from "../PatientServices/PatientServices.js";
import NavigationBar from "../NavigationBar/NavigationBar.js";
import Footer from "../Footer/Footer.js";

const Homepage = () => (
    <S.Wrapper>
      <NavigationBar />
      <PatientHeader />
      <PatientServices />
      {/* <LeadingHealthcareSection />
      <DownloadApp />  */}
      {/* <ImageSlider /> */}
      {/* <LatestSection /> */}
      <Footer />
    </S.Wrapper>
  );
  
  export default Homepage;