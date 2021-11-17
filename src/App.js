import "./App.css";



import styled from "styled-components";
import { useState } from "react";
// import Countoo from "./counter";
import { useDispatch, useSelector } from "react-redux";
// import { decrement, increment, reset } from "./CounterSlice";
import SignUp from "./SignUp/SignUp";
import Home from "./Home";
// import TeslaHome from "./Tesla_Home";
import Header from "./Header/Header";
import SignInSide from "./SignIn/SignIn";
import BHome from "./component/BritLand_Home/BritHome";
import LandLord from "./component/LandLord/LandLord";
import Tenet from "./Pages/Tenet/Tenet";
import SearchPage from "./Pages/SearchPage/SearchPage";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      {/* <Header />
      <SearchPage /> */}

      <Switch>
        <Route path="/" exact component={BHome} />
        <Route path="/landlord" component={LandLord} />
        <Route path="/tenet" component={Tenet} />
        <Route path="/searchpage" component={SearchPage} />
        <Route path="/signInside" component={SignInSide} />
        <Route path="/signup" component={SignUp} />
      </Switch>

      {/* <TeslaHome
        Image="tesla1.jpg"
        details="Order Online for touchless delivery"
        ModelNo="Model h1"
       
      />
      <TeslaHome
        Image="model-y.jpg"
        details="Order Online for touchless delivery"
        ModelNo="Model Y"
      />

      <TeslaHome
        Image="model-x.jpg"
        details="Order Online for touchless delivery"
        ModelNo="Model 3"
      />

      <TeslaHome
        Image="model-s.jpg"
        details="Order Online for touchless delivery"
        ModelNo="Model S"
      />
      <TeslaHome
        Image="solar-panel.jpg"
        details="Order Online for touchless delivery"
        ModelNo="Solar Panel"
      />
      */}
    </div>
  );
}

export default App;
