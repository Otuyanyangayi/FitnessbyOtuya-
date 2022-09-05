
import { Container, withStyles,Switch } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";
import React, {  useState, useEffect } from "react";
import background from "../images/bg2.jpg"
import Background from "../images/bg4.jpg"
import LandingPage from "./LandingPage/LandingPage";
import Search from "./meals/Search";
import MainPage from "./MainPage/MainPage";
import CreateRoutineFrom from "./CreateRoutineForm/CreateRoutineForm";
import CreateExerciseForm from "./CreateExerciseForm/CreateExerciseForm";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";



function App() {



  const [LightMode, setLightMode] = useState(true)
  const [routines, setRoutines] = useState([])
  const [exercise, setExercise] = useState([])


  useEffect(() => {
    fetch("http://localhost:9292/routines")
    .then(res => res.json())
    .then(setRoutines)
  }, [])



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
    
      <Container  style={{display: "flex", flexDirection:"column",  backgroundImage: LightMode ? `url(${Background})`: `url(${background})`, backgroundRepeat: 'no-repeat', backgroundSize:"cover",
    color: LightMode ? "black" : "white", height: "100vh"}}>
      <div style={{ position: "fixed", top: 0, right: 15, paddingTop: 10 }}>
          <span>{LightMode ? "Dark" : "Light"} Mode</span>
          <DarkMode checked={LightMode} onChange={() => setLightMode(!LightMode)}/>
        </div>

        <Router>
      <Routes>
        <Route  path = "/" element={<LandingPage />}></Route>
        <Route path = "/mealspage" element={<Search />}></Route>
        <Route  path = "/mainpage"element={<MainPage />}></Route>
        <Route path = "/newroutine" element={<CreateRoutineFrom />}></Route>
        <Route path = "/newexercise" element={<CreateExerciseForm />} ></Route>
      </Routes>
      </Router>
        
        
       
      </Container>
    
  );
}

export default App;
