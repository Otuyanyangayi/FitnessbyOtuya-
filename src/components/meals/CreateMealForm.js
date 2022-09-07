import React, { useState } from "react";
import Header2 from "../Header/Header2";

function CreateMealForm({handleAddMeal}) {
  const [formData, setFormData] = useState({
    meal_name: "",
    food_groups: "",
    meal_url: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newMeal = {...formData}
    handleAddMeal(newMeal)
    reset();

  };

  const reset = () => {
    setFormData({
      meal_name: "",
      food_groups: "",
      meal_url: ""
    });
  };

  return (
    <>
      <Header2 />
      <div className="layout">
        <form onSubmit={handleSubmit}>
          <div className="layoutdiv">
            <label htmlFor="MealName"> Meal Name: </label>
            <input
              id="MealName"
              type="text"
              name="meal_name"
              placeholder="Meal name here..."
              value={formData.meal_name}
              onChange={handleChange}
            />
          </div>

          <div className="layoutdiv">
            <label htmlFor="FoodGroups"> Food Groups: </label>
            <input
              type="text"
              id="FoodGroups"
              name="food_groups"
              placeholder="Food Groups here..."
              value={formData.food_groups}
              onChange={handleChange}
            />
          </div>

          <div className="layoutdiv">
            <label htmlFor="MealUrl"> Meal URL: </label>
            <input
              type="text"
              id="MealUrl"
              name="meal_url"
              placeholder="Meal URL here..."
              value={formData.meal_url}
              onChange={handleChange}
            />
          </div>

          <button className="layout-btn" type="reset" onClick={handleSubmit}>
            Add Meal{" "}
          </button>
        </form>
      </div>
    </>
  );
}

export default CreateMealForm;
