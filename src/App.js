import Background from './images/bg1.jpg';
import { Container, withStyles,Switch } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";
import React, { useEffect, useState } from "react";
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
    <div style={{ backgroundImage: `url(${Background})`, backgroundRepeat: 'no-repeat', backgroundsize:"cover",
    color: LightMode ? "black" : "white"}}>
      <Container maxWidth="md" style={{display: "flex", flexDirection:"column", height : "100vh"}}>

      <div
          style={{ position: "absolute", top: 0, right: 15, paddingTop: 10 }}
        >
          <span>{LightMode ? "Dark" : "Light"} Mode</span>
          <DarkMode 
            checked={LightMode}
            onChange={() => setLightMode(!LightMode)}
          />
        </div>
      </Container>
    </div>
  );
}

export default App;
