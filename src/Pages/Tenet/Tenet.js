import React, { Component, useState } from "react";
import styled from "styled-components";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import Header from "../../Header/Header";
import '../../Firebase/Firebase';
import firebase from 'firebase'
var db = firebase.firestore();

const Tenet = () => {
  const [name , setName] = useState('')
  const [address , setAddress]  = useState('')
  const [phoneNumber , setPhoneNumber] = useState('')
  const [direction , setDirection]  = useState('')

  const  handleName=(e)=> {
    setName(e.target.value);
}
const  handleAddress=(e)=> {
  setAddress(e.target.value);
}
const  handleNumber=(e)=> {
  setPhoneNumber(e.target.value);
}
const  handleDirection=(e)=> {
  setDirection(e.target.value);
}

const handleSubmit=()=>{
  db.collection("tenets").add({
    name: name,
    address: address,
    phoneNumber: phoneNumber,
    direction : direction
})
.then((docRef) => {
    console.log("Document written with ID: ", docRef.id);
})
.catch((error) => {
    console.error("Error adding document: ", error);
});
}

  return (
    <>
      <Header />
      <Boxx>
        <LandLordContainer>
          <h1>Tenet</h1>
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
              onChange={handleName}
              variant="standard"
            />
            <br />
            <TextField
              style={{ width: "500px" }}
              id="standard-search"
              label="Address"
              type="text"
              onChange={handleAddress}
              variant="standard"
            />
            <br />
            <TextField
              style={{ width: "500px" }}
              id="standard-search"
              label="Phone Number"
              type="text"
              onChange={handleNumber}
              variant="standard"
            />
            <br />
            <TextField
              style={{ width: "500px" }}
              id="standard-search"
              label="Direction"
              type="text"
              onChange={handleDirection}
              variant="standard"
            />
            <br />
            <Button
              style={{
                margin: "30px 0px 0px 450px",
                backgroundColor: "gray",
                color: "white",
              }}
              onClick={handleSubmit}
            >
              Save
            </Button>
          </Box>
        </LandLordContainer>
      </Boxx>
    </>
  );
};

export default Tenet;

const LandLordContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Boxx = styled.div`
  height: 500px;
  width: 800px;

  margin: 200px 60px 60px 100px;
`;
