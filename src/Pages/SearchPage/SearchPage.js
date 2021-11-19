// import Table from "./../../component/Table/Table";
import React,{useEffect , useState} from 'react'
import styled from "styled-components";
import firebase from "firebase/app";
import "firebase/auth";
import '../../Firebase/Firebase';
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import Paper from "@mui/material/Paper"


import TextField from "@mui/material/TextField";
import Header from "../../Header/Header";
var db = firebase.firestore();

const SearchPage = () => {

  
const [allData , setAllData] = useState([])
const [loading , setLoading] = useState(true)
const [searchItem , setSearchItem] = useState('')

  useEffect(()=>{
    db.collection("tenets").get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        setAllData(currentArray => [...currentArray, doc.data()])
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
            type="text" 
            onChange={(event) =>setSearchItem(event)}
            variant="standard"
            style={{ width: "500px" }}
          />
        </SearchF>
        <TableF>
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name </TableCell>
            <TableCell align="right">Address</TableCell>
            <TableCell align="right">Phone Number</TableCell>
            <TableCell align="right">Direction</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {allData.map((val) => (
            <TableRow
              key={val.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {val.name}
              </TableCell>
              <TableCell align="right">{val.address}</TableCell>
              <TableCell align="right">{val.phoneNumber}</TableCell>
              <TableCell align="right">{val.direction}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </TableF>
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
