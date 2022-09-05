import React from "react";
import Header from "../Header/Header";
import RoutinesContainer from "../RoutineContainer/RoutineContainer";
import "./MainPage.css"


function MainPage(){
    return(
        <div className="mainpage">
            <Header />
            <RoutinesContainer />
        </div>
    )
}

export default MainPage