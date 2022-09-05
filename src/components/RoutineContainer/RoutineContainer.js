
import Routine from "../Routine/Routine";
import React from "react";
import "./RoutineContainer.css"
import DisplayDetails from "../DisplayDetails/DisplayDetails";

function RoutinesContainer () {

    
    return (
        <>
        <div className="routine-header">Routine List:</div>
        <div className="routine-class">
        <div className="routine-grid-layout">
            
                <Routine />
        </div>
        <DisplayDetails />
        </div>
        </>
    )}

export default RoutinesContainer;