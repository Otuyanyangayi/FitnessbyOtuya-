
import Routine from "../Routine/Routine";
import React, { useState }from "react";
import "./RoutineContainer.css"
import DisplayDetails from "../DisplayDetails/DisplayDetails";

function RoutinesContainer ({routines,handleDelete}) {
    const [routineExercises, setRoutineExercises] = useState([])
    const [routineImage, setRoutineImage] = useState([])
    const [clicked, setClicked] = useState(false)

    const displayDetails = (routineExercises) => {
        setRoutineExercises(routineExercises)
    
    }
    const displayRoutineImage = (routineImage) => {
        setRoutineImage(routineImage)
    }
    const isTrue = (clicked) => {
        setClicked(clicked => !clicked)
    }
    
    return (
        <>
        <div className="routine-header">Routine List:</div>
        <div className="routine-class">
        <div className="routine-grid-layout">
        {routines.map(routine => 
                <Routine 
                key={routine.id} 
                routine={routine}
                handleDelete={handleDelete}
                displayDetails={displayDetails}
                displayRoutineImage={displayRoutineImage}
                isTrue={isTrue}
                />)}
        </div>
        <DisplayDetails routineImage={routineImage} routineExercises={routineExercises}/>
        </div>
        </>
    )}

export default RoutinesContainer;