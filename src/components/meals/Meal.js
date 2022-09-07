import React from 'react';



function Meal({meal, handleDeleteMeal, displayDetails, displayMealImage, isTrue}){

    return(
        <>
        <div className="routine-box">
            <h3 style={{fontSize: "1.30em" }}>{meal.meal_name}</h3>
            
            <div className="routine-content">
                <li>MEAL ID: {meal.id}</li>
                BENEFITS: {meal.food_groups}
            </div>
            <button className='routine-btn' onClick={() => {
                isTrue()
                displayMealImage(meal.meal_url)
                displayDetails(meal.foods)
               }}>
                Details
            </button>
            
            <button  className='routine-btn' onClick={() => handleDeleteMeal(meal.id)} >Delete</button>
        
        </div>
        
        

        </>


    )
}

export default Meal