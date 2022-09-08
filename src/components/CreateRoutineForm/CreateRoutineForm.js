import React, { useState } from "react";
import Header from "../Header/Header";
import {useNavigate} from "react-router-dom"
import './CreateRoutineForm.css';

function CreateRoutineForm({handleAddRoutine}) {
  const [formData, setFormData] = useState({
    routine_name: "",
    muscle_group: "",
    personal_trainer_id: "",
    routine_image: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    const newRoutine = {...formData}
    e.preventDefault();
    handleAddRoutine(newRoutine)
    reset();
    navigate('/mainpage')
    window.location.reload();
  };

  const reset = () => {
    setFormData({
      routine_name: "",
      muscle_group: "",
      personal_trainer_id: "",
      routine_image: "",
    });
  };

  return (
    <>
      <Header />
      <div className="layout">
        <form onSubmit={handleSubmit}>
          <div className="layoutdiv">
            <label htmlFor="RoutineName"> Routine Name: </label>
            <input
              id="RoutineName"
              type="text"
              name="routine_name"
              placeholder="Routine name here..."
              value={formData.routine_name}
              onChange={handleChange}
            />
          </div>

          <div className="layoutdiv">
            <label htmlFor="MuscleGroup"> Muscle Group: </label>
            <input
              type="text"
              id="MuscleGroup"
              name="muscle_group"
              placeholder="Muscle Group here..."
              value={formData.muscle_group}
              onChange={handleChange}
            />
          </div>

          <div className="layoutdiv">
            <label htmlFor="PersonalTrainer"> Personal Trainer ID: </label>
            <input
              type="number"
              id="PersonalTrainerID"
              name="personal_trainer_id"
              placeholder="Personal Trainer ID here..."
              value={formData.personal_trainer_id}
              onChange={handleChange}
            />
          </div>

          <div className="layoutdiv">
            <label htmlFor="image"> Picture URL: </label>
            <input
              id="imageInput"
              type="url"
              name="routine_image"
              placeholder="Image here..."
              value={formData.routine_image}
              onChange={handleChange}
            />
          </div>
          <button className="layout-btn" type="reset" onClick={handleSubmit}>
            Add Routine{" "}
          </button>
        </form>
      </div>
    </>
  );
}

export default CreateRoutineForm;
