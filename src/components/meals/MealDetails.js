import React from "react";


function MealDetails({mealFoods, mealImage, handleDeleteFood}) {
  return (
    <div className="display-layout">
      <div>
        {mealImage ? (
          <img
            style={{ margin: "2rem" }}
            alt="click details for more details"
            src={mealImage}
          />
        ) : (
          <>
            <p style={{ marginTop: "20rem" }}>
              Click on a Meal for more details
            </p>
            
          </>
        )}
      </div>
      <div>
        {mealFoods.map((food) => ( 
           <div key={food.id} className="exercise-box">
               <p>Food Name: {food.food_name}</p>
              
            </div>
           ))}
      </div>
    </div>
  );
}

export default MealDetails;