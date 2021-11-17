import styled from "styled-components";
import React, { Component } from "react";
import SidebarContent from "./component/Sidebar/SidebarContent";

const Home = () => {
  return (
    <div>
      <Navbar>
        <img src="././Images/youtube_icon.jpg" alt="Cinque Terre" />
        <p>Youtube</p>
        <input type="text" placeholder="Search.." />
      </Navbar>

      <Center>
        <SideBar>
          <SidebarContent />
        </SideBar>
        <ContentView>
          <SuggestionBar></SuggestionBar>
        </ContentView>
      </Center>
      <Footer>Copy Rights</Footer>
    </div>
  );
};

export default Home;

const Navbar = styled.div`
  display: flex;
  flex-wrap: nowrap;
  z-index: 1;
  background-color: white;
  height: 55px;
  color: black;
  padding: 0px;
  decoration: none;
  position: relative;

  > p {
    font-size: 30px;
    font-weight: 900;
    position: relative;
    top: -25px;
    left: 80px;
  }
  > img {
    height: 50px;
    width: 50px;
    position: relative;
    top: 5px;
    padding-right: 6px;
    left: 80px;
  }
  > input {
    position: relative;

    padding-left: 20px;
    margin-top: 5px;
    left: 340px;
    height: 35px;
    width: 540px;
  }
`;

const Center = styled.div`
  display: flex;
  height: 100vh;
  width: 215vh;
`;

const Footer = styled.div`
  background-color: purple;
`;

const HeroImage = styled.div`
  height: 300px;
  width: 500px;
  position: relative;
  background-color: gray;
  top: 0px;
  right: 200px;
  left: 200px;
`;

const SideBar = styled.div`
  width: 40vh;
  background-color: white;
  height: 100%;
`;

const ContentView = styled.div`
  width: 100%;
  background-color: #f2f3f5;
  height: 100%;
`;

const SuggestionBar = styled.div`
  widht: 100%;
  height: 50px;
  background-color: white;
  border-style: solid;
  border-width: 1px;
`;
