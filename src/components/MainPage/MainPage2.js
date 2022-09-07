import React from "react";
import Header from "../Header/Header2";
import MealContainer from "../meals/MealContainer";
import "./MainPage.css"


function MainPage2({meals, handleDeleteMeal}){
    return(
        <div className="mainpage">
            <Header />
            <MealContainer meals={meals} handleDeleteMeal={handleDeleteMeal}  />
        </div>
    )
}

export default MainPage2