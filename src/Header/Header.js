import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  return (
    <Container>
      {/* <Image src="/Images/logo.svg" /> */}
      <HeaderLogo>
        <Link
          className="Link_head"
          style={{
            textDecoration: "none",
            textColor: "white",
            fontfamily: "Zen Kaku Gothic Antique, sans-serif",
          }}
          to="/"
        >
          <h2>Britland</h2>
        </Link>
      </HeaderLogo>

      <NavButtons>
        <p>
          <Link style={{ textDecoration: "none" }} to="/">
            <p>Home</p>
          </Link>
        </p>
        <p>
          <Link style={{ textDecoration: "none" }} to="/tenet">
            <p>Tenet</p>
          </Link>
        </p>
        <p>
          <Link style={{ textDecoration: "none" }} to="/">
            <p>Administration</p>
          </Link>
        </p>
        <p>
          <Link style={{ textDecoration: "none" }} to="/landlord">
            <p>LandLord</p>
          </Link>
        </p>
        <p>
          <a>Management</a>
        </p>
      </NavButtons>
      <RightMenu>
        <a href="#">Database Tables</a>
        <Link style={{ textDecoration: "none" }} to="/SignInSide">
          <p>Account</p>
        </Link>
        <h1>
          <a href="#">≡</a>
        </h1>
      </RightMenu>
      <BurgerNav></BurgerNav>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  min-height: 60px;
  color: white;
  background-color: #000000;
  display: flex;
  position: fixed;
  align-items: center;
  padding: 0 20px;
  top: 0;
  right: 0;
  left: 0;
  > h2 {
    color: white;
  }
`;

const Image = styled.img`
  height: 20px;
  margin: 10px 0px 20px 40px;
  width: 130px;
`;

const NavButtons = styled.div`
  margin-left: 350px;
  display: flex;
  direction: row;
  align-items: center;
  color: white;
  flex: 1;
  > p {
    font-weight: 900;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
    color: white;
  }
`;

const RightMenu = styled.div`
  display: flex;

  align-items: center;
  > a {
    font-weight: 900;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
    text-decoration: none;
    color: white;
  }
  h1 {
    font-weight: 900;
    lenght: 30px;
    color: white;
  }
`;

const BurgerNav = styled.div``;

const HeaderLogo = styled.div`
  height: 20px;
  margin: 10px 0px 20px 40px;
  width: 130px;
  font-family: "Zen Kaku Gothic Antique", sans-serif;
  > h2 {
    color: white;
  }
`;
