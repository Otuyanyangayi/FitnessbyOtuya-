import React, { useState } from "react";
import Header2 from "../Header/Header2";

function CreateMealForm({handleAddFood}) {
  const [formData, setFormData] = useState({
    food_name: "",
    meal_id: "",
    
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    const newFood = {...formData}
    e.preventDefault();
    handleAddFood(newFood);
    reset();
  };

  const reset = () => {
    setFormData({
      food_name: "",
      meal_id: ""
    });
  };

  return (
    <>
      <Header2 />
      <div className="layout">
        <form onSubmit={handleSubmit}>
          <div className="layoutdiv">
            <label htmlFor="FoodName"> Food Name: </label>
            <input
              id="FoodName"
              type="text"
              name="food_name"
              placeholder="Food name here..."
              value={formData.food_name}
              onChange={handleChange}
            />
          </div>

          <div className="layoutdiv">
            <label htmlFor="MealId"> Meal ID: </label>
            <input
              type="number"
              id="MealId"
              name="meal_id"
              placeholder="Meal ID here..."
              value={formData.meal_id}
              onChange={handleChange}
            />
          </div>

          

          <button className="layout-btn" type="reset" onClick={handleSubmit}>
            Add Food{" "}
          </button>
        </form>
      </div>
    </>
  );
}

export default CreateMealForm;
