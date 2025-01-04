
import React, { useState } from "react";
import * as S from "./navigationBar.styled";
import logo from "../../assets/icons/Logo2.svg";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <S.Wrapper>
      <S.LeftSide>
        <S.LogoContainer src={logo} />
      </S.LeftSide>
      <S.RightSide>
        <S.NavigationLink>Home</S.NavigationLink>
        {/* <S.NavigationLink>About Us</S.NavigationLink> */}
        <S.NavigationLink>Services</S.NavigationLink>
        <S.NavigationLink>Vision</S.NavigationLink>
        <S.NavigationLink>Contact Us</S.NavigationLink>
      </S.RightSide>
      <S.ButtonsContainer>
        <S.SignupButton onClick={handleDropdownToggle}>
          Signup
          {isDropdownOpen && (
            <S.Dropdown>
              <Link to="/register">
                <S.DropdownItem>Patient</S.DropdownItem>
              </Link>
              <Link to="/register">
                <S.DropdownItem>Doctor</S.DropdownItem>
              </Link>
            </S.Dropdown>
          )}
        </S.SignupButton>
        <Link to="/login">
          <S.LoginButton>Login</S.LoginButton>
        </Link>
      </S.ButtonsContainer>
    </S.Wrapper>
  );
};

export default NavigationBar;
