import Table from "./../../component/Table/Table";
import React,{useEffect , useState} from 'react'
import styled from "styled-components";
import firebase from "firebase/app";
import "firebase/auth";
import '../../Firebase/Firebase';


import TextField from "@mui/material/TextField";
import Header from "../../Header/Header";
var db = firebase.firestore();

const SearchPage = () => {
const [tenetData , setTenetData] = useState([])
const [loading , setLoading] = useState(true)

  useEffect(()=>{
    db.collection("tenets").get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        setTenetData(currentArray => [...currentArray, doc.data()])
        setLoading(false)
          
      });
  })
  
},[]);

if(loading){
  return(
    <div>Loading Please Wait ....</div>
  )
}
else{
  return (
    <>
      <Header />
      <SearchContainer>
        <h2>Search Page</h2>
        <SearchF>
          <TextField
            id="standard-search"
            label="Search Items"
            type="search"
            variant="standard"
            style={{ width: "500px" }}
          />
        </SearchF>
        <TableF>
          <Table tenets={tenetData}/>
        </TableF>
      {/* <table>
        <th>Name</th>
        <th>Address</th>
        <th>Phone Number</th>
        <th>Direction</th>
      
          <tr>
            {tenetData.name}
            {tenetData.address}
            {tenetData.phoneNumber}
            {tenetData.direction}
          </tr>
      
      </table> */}

      </SearchContainer>
    </>
  );
}
};

export default SearchPage;

const SearchContainer = styled.div``;

const TableF = styled.div`
  height: 800px;
  width: 1200px;
  margin: 50px 30px 30px 50px;
`;

const SearchF = styled.div`
  display: flex;
  align-items: center;
  margin: 50px 30px 30px 50px;
`;
