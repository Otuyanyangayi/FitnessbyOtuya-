import Meal from "./Meal";
import React, { useState }from "react";
import MealDetails from "./MealDetails";
import "../RoutineContainer/RoutineContainer.css"


function MealContainer ({meals, handleDeleteMeal}) {
    const [mealFoods, setMealFoods] = useState([])
    const [mealImage, setMealImage] = useState([])
    const [clicked, setClicked] = useState(false)

    const displayDetails = (mealFoods) => {
        setMealFoods(mealFoods)
    
    }
    const displayMealImage = (mealImage) => {
        setMealImage(mealImage)
    }
    const isTrue = (clicked) => {
        setClicked(clicked => !clicked)
    }
   
    
    return (
        <>
        <div className="routine-header">Meal List: The first step to loving yourself is eating right</div>
        
        <div className="routine-class">
        <div className="routine-grid-layout">
        {meals.map(meal => 
                <Meal 
                key={meal.id} 
                meal={meal}
                handleDeleteMeal={handleDeleteMeal}
                displayDetails={displayDetails}
                displayMealImage={displayMealImage}
                isTrue={isTrue}
                />)}
        </div>
        <MealDetails mealImage={mealImage} mealFoods={mealFoods} />
        </div>
        </>
    )}

export default MealContainer;