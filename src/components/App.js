
import { Container, withStyles,Switch } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";
import React, {  useState } from "react";
import Background from "../images/bg4.jpg"
import background from "../images/bg5.jpeg"
import LandingPage from "./LandingPage.js/LandingPage";
import MainPage from "./MainPage/MainPage";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";



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
    <div style={{ backgroundImage: LightMode ? `url(${Background})`: `url(${background})`, backgroundRepeat: 'no-repeat', backgroundSize:"cover",
    color: LightMode ? "black" : "white", height: "100vh"}}>
      <Container maxWidth="md" style={{display: "flex", flexDirection:"column", height : "100vh"}}>
      <div style={{ position: "absolute", top: 0, right: 15, paddingTop: 10 }}>
          <span>{LightMode ? "Dark" : "Light"} Mode</span>
          <DarkMode checked={LightMode} onChange={() => setLightMode(!LightMode)}/>
        </div>

        <Router>
      <Routes>
        <Route  path = "/" element={<LandingPage />}></Route>
        <Route  path = "/mainpage"element={<MainPage />}></Route>
      </Routes>
      </Router>
        
        
       
      </Container>
    </div>
  );
}

export default App;
