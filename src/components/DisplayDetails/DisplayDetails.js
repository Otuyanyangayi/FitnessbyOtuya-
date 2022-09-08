import React from "react";
import "./DisplayDetails.css";

function DisplayDetails({ routineExercises, routineImage }) {
  return (
    <div className="display-layout">
      <div>
        {routineImage ? (
          <>
          <img
            style={{ margin: "2rem" }}
            alt="click details for more details"
            src={routineImage}
          />
          </>
        ) : (
          <>
            <p style={{ marginTop: "20rem" }}>
              Click on a routine for more details
            </p>
            <p>| 💪 | 🏋️ | 🏃‍♀️ |</p>
          </>
        )}
      </div>
      <div>
        {routineExercises.map((exercise) => (
          
            <div key={exercise.id} className="exercise-box">
              <p>Personal Trainer ID: {exercise.personal_trainer_id}</p>
              <p>Exercise Name: {exercise.name}</p>
              <p>Instructions: {exercise.instructions}</p>
              
            </div>
          
        ))}
      </div>
    </div>
  );
}

export default DisplayDetails;
