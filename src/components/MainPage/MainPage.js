import React from "react";
import Header from "../Header/Header";
import RoutinesContainer from "../RoutineContainer/RoutineContainer";
import "./MainPage.css"


function MainPage({routines, handleDelete}){
    return(
        <div className="mainpage">
            <Header />
            <RoutinesContainer routines={routines} handleDelete={handleDelete} />
        </div>
    )
}

export default MainPage