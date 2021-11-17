import React, { Component } from "react";

import styled from "styled-components";

const SignIn = () => {
  return (
    <SignInLayout>
      <h2>HELOO</h2>
      <ImageHero />
      <SignInStructure></SignInStructure>
    </SignInLayout>
  );
};

export default SignIn;

const SignInLayout = styled.div`
  display: flex;
  flex-direction: row;
`;
const ImageHero = styled.div`
  background-image: url("/Images/britlandHome");
  height: 500px;
  width: 1000px;
`;

const SignInStructure = styled.div``;
