import React, { Component } from "react";
import styled from "styled-components";

const SidebarContent = () => {
  return (
    <SideWalaContent>
      <ButtonTab>
        <img src="././Images/home.png" alt="" />
        <p>Home</p>
      </ButtonTab>
      <ButtonTab>
        <img src="././Images/home.png" alt="" />
        <p>Explore</p>
      </ButtonTab>
      <ButtonTab>
        <img src="././Images/home.png" alt="" />
        <p>Subscription</p>
      </ButtonTab>
      <Br />
      <ButtonTab>
        <img src="././Images/home.png" alt="" />
        <p>Library</p>
      </ButtonTab>
      <ButtonTab>
        <img src="././Images/home.png" alt="" />
        <p>History</p>
      </ButtonTab>
      <Br />
      <p>Sign In to like the Videos</p>
    </SideWalaContent>
  );
};

export default SidebarContent;

const SideWalaContent = styled.div`
  display: flex;
  flex-direction: column;
`;
const Br = styled.div`
  width: 100%;
  height: 2px;
  background-color: lightgray;
  margin-top: 30px;
`;

const ButtonTab = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  justify-content: center;
  align-items: baseline;
  height: 40px;
  width: 100%;
  padding-bottom: 10px;
  > p {
    padding-bottom: 10px;
    font-size: 22px;
    font-weight: heavy;
  }
  > img {
    height: 30px;
    width: 30px;
    padding-right: 30px;
    postion: fixed;
    right: 20px;
  }
`;
