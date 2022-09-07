import React from "react";
import "./DisplayDetails.css";

function DisplayDetails({ routineExercises, routineImage }) {
  return (
    <div className="display-layout">
      <div>
        {routineImage ? (
          <img
            style={{ margin: "2rem" }}
            alt="routineImage"
            src={routineImage}
          />
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
          <>
            <div className="exercise-box">
              <p>Exercise Name: {exercise.name}</p>
              <p>Instructions: {exercise.instructions}</p>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}

export default DisplayDetails;
