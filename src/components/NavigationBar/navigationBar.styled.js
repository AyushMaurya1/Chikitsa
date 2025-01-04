import styled, { keyframes } from "styled-components";

// Define a keyframes animation for the signup button
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Wrapper = styled.div`
  position: -webkit-sticky; /* For Safari */
  position: sticky;
  border-radius:10%,
  color:black,
  top: 0;
  z-index: 1000; /* Ensures the navbar stays on top of other content */
  padding: 15px 50px; /* Padding inside the navbar */
  margin: 0 0 0px 0; /* Margin at the bottom to separate from content below */
  height: 50px; /* Increased height for a more prominent navbar */
  display: flex;
  justify-content: space-between;
  align-items: center; /* Center items vertically */
  background-color: #fff; /* Ensure the background is solid */
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1); /* Add a subtle shadow for better separation from the content */
`;

export const LeftSide = styled.div`
  cursor: pointer;
`;

export const NavigationLink = styled.div`
  font-family: "Mulish";
  font-size: 18px;
  line-height: 23px;
  color: black;
  opacity: 0.5;
  margin-left: 30px; /* Increased margin between links */
  cursor: pointer;

  &:hover {
    color: #000;
    opacity: 1;
    transition: color 0.3s;
  }
`;

export const LogoContainer = styled.img`
  width: 180px;
  height: 61px;

  &:hover {
    opacity: 0.7;
    transition: opacity 0.3s;
  }
`;

export const RightSide = styled.div`
  display: none;

  @media (min-width: 868px) {
    display: flex;
    justify-content: space-between; /* Center the links within the available space */
    flex-grow: 1;
    margin-left: 100px; /* Adjust this to control centering */
  }
`;

export const LinksContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-grow: 1;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const LoginButton = styled.div`
  cursor: pointer;
  padding: 10px 20px;
  margin-left: 20px;
  // border: 1px solid #1f1534;
  border-radius: 15px;
  background-color: lightblue;
  font-family: "Mulish";
  font-size: 16px;
  color: #1f1534;
  opacity: 0.7;

  /* Apply animation on render */
  animation: ${fadeIn} 0.5s ease-out;

  /* Add transition effects on hover */
  &:hover {
    background-color: #e8e8e8;
    transform: scale(1.05); /* Slightly enlarge on hover */
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1); /* Add shadow on hover */
    transition: background-color 0.3s, transform 0.3s, box-shadow 0.3s;
  }
`;

export const SignupButton = styled.div`
  cursor: pointer;
  padding: 10px 20px;
  margin-left: 70px;
  // border: 1px solid #1f1534;
  border-radius: 15px;
  background-color: lightblue;
  font-family: "Mulish";
  font-size: 16px;
  color: #1f1534;
  opacity: 0.7;

  /* Apply animation on render */
  animation: ${fadeIn} 0.5s ease-out;

  /* Add transition effects on hover */
  &:hover {
    background-color: #e8e8e8;
    transform: scale(1.05); /* Slightly enlarge on hover */
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1); /* Add shadow on hover */
    transition: background-color 0.3s, transform 0.3s, box-shadow 0.3s;
  }
`;

export const Dropdown = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  width: 150px; /* Increased width for dropdown */
`;

export const DropdownItem = styled.div`
  padding: 10px 15px;
  cursor: pointer;
  background-color: white;
  font-family: "Mulish";
  font-size: 16px;
  line-height: 21px;
  color: #1f1534;
  opacity: 0.7;

  &:hover {
    background-color: #f0f0f0;
    opacity: 1;
    transition: background-color 0.3s, opacity 0.3s;
  }
`;
