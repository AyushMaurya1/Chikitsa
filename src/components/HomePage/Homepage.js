// import React from "react";
// import * as S from "./homePage.styled";
// import NavigationBar from "../NavigationBar/NavigationBar";
// import Header from "../Header/Header";
// import Services from "../Services/Services";
// import LeadingHealthcareSection from "../DetailsSections/LeadingHealthcareSection";
// import DownloadApp from "../DetailsSections/DownloadApp";
// import ImageSlider from "../ImageSlider/ImageSlider";
// import LatestSection from "../LatestSection/LatestSection";
// import Footer from "../Footer/Footer";

// const Homepage = () => (
//   <S.Wrapper>
//     <NavigationBar />
//     <Header />
//     <Services />
//     <LeadingHealthcareSection />
//     <DownloadApp />
//     {/* <ImageSlider /> */}
//     {/* <LatestSection /> */}
//     <Footer />
//   </S.Wrapper>
// );

// export default Homepage;
import React from "react";
import * as S from "./homePage.styled";
import NavigationBar from "../NavigationBar/NavigationBar";
import Header from "../Header/Header";
import Services from "../Services/Services";
import LeadingHealthcareSection from "../DetailsSections/LeadingHealthcareSection";
import DownloadApp from "../DetailsSections/DownloadApp";

import Footer from "../Footer/Footer";
console.log("Homepage component loaded");
const Homepage = () => (
  <S.Wrapper>
    <NavigationBar />
    <Header />
    <Services />
    <LeadingHealthcareSection />
    <DownloadApp />
    {/* <ImageSlider /> */}
    {/* <LatestSection /> */}
    <Footer />
  </S.Wrapper>
);

export default Homepage;

