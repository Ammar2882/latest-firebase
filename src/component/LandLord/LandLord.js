import React, { Component, useEffect, useState } from "react";
import styled from "styled-components";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";

import Header from "../../Header/Header";
import { useHistory, useParams } from "react-router-dom";

const LandLord = () => {
  return (
    <>
      <Header />
      <Boxx>
        <LandLordContainer>
          <h1>LandLord</h1>
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <h4>Please Enter the Following data</h4>
            <TextField
              style={{ width: "500px" }}
              id="standard-search"
              label="Name"
              type="text"
              variant="standard"
            />
            <br />
            <TextField
              style={{ width: "500px" }}
              id="standard-search"
              label="Address"
              type="text"
              variant="standard"
            />
            <br />
            <TextField
              style={{ width: "500px" }}
              id="standard-search"
              label="Phone Number"
              type="text"
              variant="standard"
            />
            <br />
            <Button
              style={{
                margin: "30px 0px 0px 450px",
                backgroundColor: "gray",
                color: "white",
              }}
              onClick={() => {
                alert("Saved");
              }}
            >
              Save
            </Button>
          </Box>
        </LandLordContainer>
      </Boxx>
    </>
  );
};

export default LandLord;

const LandLordContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Boxx = styled.div`
  height: 500px;
  width: 800px;

  margin: 100px 60px 60px 100px;
`;
