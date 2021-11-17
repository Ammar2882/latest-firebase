import { Grid } from "@mui/material";
import React, { Component } from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";
import Header from "../../Header/Header";

const BHome = () => {
  return (
    <div>
      <Header />
      <HomeStructure>
        <Showcase>
          <Cards>
            <h2>
              <Link style={{ textDecoration: "none" }} to="/tenet">
                <p>Tenet</p>
              </Link>
            </h2>
          </Cards>
          <Cards>
            <h2>
              <Link style={{ textDecoration: "none" }} to="/SearchPage">
                <p>Search</p>
              </Link>
            </h2>
          </Cards>
          <Cards>
            <h2>
              <Link style={{ textDecoration: "none" }} to="/landlord">
                <p>Landlord</p>
              </Link>
            </h2>
          </Cards>
          <Cards>
            <h2>
              <Link style={{ textDecoration: "none" }} to="/landlord">
                <p>Admin</p>
              </Link>
            </h2>
          </Cards>
        </Showcase>
      </HomeStructure>
    </div>
  );
};

export default BHome;

const HomeStructure = styled.div`
  background-image: url("/Images/HomeBG.jpg");
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  flex-direction: column;
`;

const Cards = styled.div`
  height: 200px;
  width: 250px;
  background-color: #f5f5f5;
  border-radius: 5px;
  padding: 30px 2px 10px 2px;
  margin: 20px;
  align-items: center;
  text-align: center;

  > h2 {
    padding: 30px;
    font-size: 44px;
    text-decoration: none;
  }
`;

const Showcase = styled.div`
  display: flex;
  margin: 220px 100px 0px 100px;
`;
