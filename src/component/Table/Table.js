import React,{useState , useEffect} from "react"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import Paper from "@mui/material/Paper"

// function createData(name, calories, fat, carbs, protein) {
//   return { name, calories, fat, carbs, protein }
// }

// const rows = [
//   createData(
//     "Mehar Grewal",
//     "+44 83743 3883",
//     "62 mayfair avenue ",
//     "5 acres",
//     "Adam Smith"
//   ),
//   createData(
//     "Will Anderson",
//     "+44 83743 3883",
//     "62 mayfair avenue ",
//     "5 acres",
//     "Adam Smith"
//   ),
//   createData(
//     "Will Anderson",
//     "+44 83743 3883",
//     "62 mayfair avenue ",
//     "5 acres",
//     "Adam Smith"
//   ),
//   createData(
//     "Will Anderson",
//     "+44 83743 3883",
//     "62 mayfair avenue ",
//     "5 acres",
//     "Adam Smith"
//   ),
//   createData(
//     "Will Anderson",
//     "+44 83743 3883",
//     "62 mayfair avenue ",
//     "5 acres",
//     "Adam Smith"
//   ),
//   createData(
//     "Will Anderson",
//     "+44 83743 3883",
//     "62 mayfair avenue ",
//     "5 acres",
//     "Adam Smith"
//   ),
//   createData(
//     "Will Anderson",
//     "+44 83743 3883",
//     "62 mayfair avenue ",
//     "5 acres",
//     "Adam Smith"
//   ),
//   createData(
//     "Will Anderson",
//     "+44 83743 3883",
//     "62 mayfair avenue ",
//     "5 acres",
//     "Adam Smith"
//   ),
//   createData(
//     "Will Anderson",
//     "+44 83743 3883",
//     "62 mayfair avenue ",
//     "5 acres",
//     "Adam Smith"
//   ),
//   createData(
//     "Will Anderson",
//     "+44 83743 3883",
//     "62 mayfair avenue ",
//     "5 acres",
//     "Adam Smith"
//   ),
// ];

const BasicTable = ({allData , filteredData}) => {


// useEffect=(()=>{

// },[])

  return (
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
          {allData.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.address}</TableCell>
              <TableCell align="right">{row.phoneNumber}</TableCell>
              <TableCell align="right">{row.direction}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
export default BasicTable
