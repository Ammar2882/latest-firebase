import React, { Component , useState  } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import '../Firebase/Firebase';
import { useAlert } from 'react-alert'
import firebase from 'firebase'


const SignUp = () => {
  const alert = useAlert()
  const history = useHistory()
  const [email , setEmail] = useState('')
  const [password , setPassword]  = useState('')


  const  handleEmail=(e)=> {
    setEmail(e.target.value);
}
const  handlePassword=(e)=> {
  setPassword(e.target.value);
}

  const handleSignup = (e) =>{
    // app.auth().createUserWithEmailAndPassword(email, password)
    // .then((u) => {
    //   console.log('Successfully Signed Up');
    // })
    // .catch((err) => {
    //   console.log('Error: ' + err.toString());
    // })

    firebase.auth().createUserWithEmailAndPassword( email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      alert.show("Signup Successful")
      history.push('/SignInSide')
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert.show("Please Enter Valid Signup Details")
      // ..
    });
  }
  return (
    <ContentBox>
      <Navbar>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </Navbar>

      <Contain style={{width:'100vh' , backgroundColor:'white' , marginLeft:'50px'}}>

        <div style={{width:'100vh' , backgroundColor:'white' , marginLeft:'50px'}}>
        <input
            placeholder="Email"
            value={email}
            onChange={handleEmail}
          />
          <input
            placeholder="password"
            value={password}
            onChange={handlePassword}
          />
        <button style={{margin: '10px'}} onClick={handleSignup}>Sign Up</button>
        </div>
      </Contain>
      <Header>
        <p>Copy Rights Ahmed</p>
      </Header>
    </ContentBox>
  );
};

export default SignUp;

const ContentBox = styled.div`
  margin: -10px -10px;
`;

const Navbar = styled.div`
  top-margin: -30px
  position: top;
  background-color: black;
  color: white;
`;

const Contain = styled.div`
  height: 90vh;
  color: white;
  background: red url("butt.jpg") no-repeat fixed right top;
`;

const Header = styled.div`
  background-color: purple;
`;
