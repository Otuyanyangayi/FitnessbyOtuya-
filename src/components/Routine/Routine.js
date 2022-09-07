import React from 'react';
import "./Routine.css"

function Routine({routine, handleDelete, displayDetails, displayRoutineImage, isTrue}){

    return(
        <>
        <div className="routine-box">
            <h3 style={{fontSize: "1.30em" }}>{routine.routine_name}</h3>
            <div className="routine-content">
                <li>Routine ID: {routine.id}</li>
                Focus: {routine.muscle_group}
            </div>
            <button className='routine-btn' onClick={() => {
                isTrue()
                displayRoutineImage(routine.routine_image)
                displayDetails(routine.exercises)
               }}>
                Details
            </button>
            <button className='routine-btn' onClick={() => handleDelete(routine.id)}>Delete</button>
        
        </div>
        
        

        </>


    )
}

export default Routine