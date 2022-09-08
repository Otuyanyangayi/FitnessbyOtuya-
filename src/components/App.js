import { Container, withStyles, Switch } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";
import React, { useState, useEffect } from "react";
import background from "../images/bg2.jpg";
import Background from "../images/bg4.jpg";
import LandingPage from "./LandingPage/LandingPage";

import MainPage from "./MainPage/MainPage";
import MainPage2 from "./MainPage/MainPage2";
import CreateRoutineFrom from "./CreateRoutineForm/CreateRoutineForm";
import CreateExerciseForm from "./CreateExerciseForm/CreateExerciseForm";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreateMealForm from "./meals/CreateMealForm";
import CreateFoodForm from "./meals/CreateFoodForm";

function App() {
  const [LightMode, setLightMode] = useState(false);
  const [routines, setRoutines] = useState([]);
  const [exercises, setExercise] = useState([]);
  const [meals, setMeals] = useState([]);
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9292/routines")
      .then((res) => res.json())
      .then(setRoutines);
  }, []);

  

  function handleAddRoutine(newRoutine) {
    fetch("http://localhost:9292/routines", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newRoutine),
    })
      .then((res) => res.json())
      .then((newRoutineFromBackend) => {
        const updatedRoutines = [newRoutineFromBackend, ...routines];
        setRoutines(updatedRoutines);
        
      });
  }

  function handleAddExercise(newExercise) {
    fetch("http://localhost:9292/exercises", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newExercise),
    })
      .then((res) => res.json())
      .then((newExerciseFromBackend) => {
        const updatedExercises = [newExerciseFromBackend, ...exercises];
        setExercise(updatedExercises);
      });
  }

  function handleDelete(id) {
    fetch(`http://localhost:9292/routines/${id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then(setRoutines);
  }

  useEffect(() => {
    fetch("http://localhost:9292/meals")
      .then((res) => res.json())
      .then(setMeals);
  }, []);

  function handleAddMeal(newMeal) {
    fetch("http://localhost:9292/meals", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newMeal),
    })
      .then((res) => res.json())
      .then((newMealFromBackend) => {
        const updatedMeals = [newMealFromBackend, ...meals];
        setMeals(updatedMeals);
      });
  }

  function handleAddFood(newFood) {
    fetch("http://localhost:9292/foods", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newFood),
    })
      .then((res) => res.json())
      .then((newFoodFromBackend) => {
        const updatedFoods = [newFoodFromBackend, ...foods];
        setFoods(updatedFoods);
      });
  }

  function handleDeleteMeal(id) {
    fetch(`http://localhost:9292/meals/${id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then(setMeals);
  }
 

  const DarkMode = withStyles({
    switchBase: {
      color: grey[300],
      "&$checked": {
        color: grey[500],
      },
      "&$checked + $track": {
        backgroundColor: grey[500],
      },
    },
    checked: {},
    track: {},
  })(Switch);
  return (
    <Container 
      style={{
        display: "flex",
        flexDirection: "column",
        backgroundImage: LightMode
          ? `url(${Background})`
          : `url(${background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        color: LightMode ? "black" : "white",
        height: "100vh",
      }}
    >
      <div style={{ position: "fixed ", top: 0, right: 230 }}>
        <span>{LightMode ? "Dark" : "Light"} Mode</span>
        <DarkMode
          checked={LightMode}
          onChange={() => setLightMode(!LightMode)}
        />
      </div>

      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          
          <Route path="/mainpage" element={<MainPage routines={routines} handleDelete={handleDelete} />} ></Route>
          <Route exact path="/mainpage2" element={<MainPage2 meals={meals} handleDeleteMeal={handleDeleteMeal} />}></Route>
          <Route path="/newroutine" element={<CreateRoutineFrom handleAddRoutine={handleAddRoutine} />}></Route>
          <Route path="/newexercise" element={ <CreateExerciseForm handleAddExercise={handleAddExercise} /> }></Route>
          <Route path="/newmeal" element={<CreateMealForm handleAddMeal={handleAddMeal} />} ></Route>
          <Route path="/newfood" element={<CreateFoodForm handleAddFood={handleAddFood} />} ></Route>
        </Routes>
      </Router>
    </Container>
  );
}

export default App;
