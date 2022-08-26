
import { Container, withStyles,Switch } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";
import React, {  useState } from "react";
import Header from "./components/Header/Header"
import LandingPage from "./components/LandingPage.js/LandingPage";
import {Router} from "react-router-dom";

import './App.css';

function App() {



  const [LightMode, setLightMode] = useState(true)


  const DarkMode = withStyles({
    switchBase: {
      color: grey[300],
      "&$checked" : {
        color: grey[500],
      },
      "&$checked + $track": {
        backgroundColor: grey[500],
      },
    },
    checked: {},
    track: {},
  })(Switch)
  return (
    <div style={{ backgroundColor:LightMode ? "gold" : "black", backgroundRepeat: 'no-repeat', backgroundsize:"cover",
    color: LightMode ? "black" : "white"}}>
      <Container maxWidth="md" style={{display: "flex", flexDirection:"column", height : "100vh"}}>
      
      <Header/>

      <div style={{ position: "absolute", top: 0, right: 15, paddingTop: 10 }}>
          <span>{LightMode ? "Dark" : "Light"} Mode</span>
          <DarkMode checked={LightMode} onChange={() => setLightMode(!LightMode)}/>
        </div>
        <LandingPage/>
        
        
      </Container>
    </div>
  );
}

export default App;
