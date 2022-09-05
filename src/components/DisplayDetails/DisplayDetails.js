import React from 'react';
import "./DisplayDetails.css"


function DisplayDetails () {
    
    return (
        
        <div className="display-layout">
            <div>
                
                <>
                <p style={{ marginTop: "17rem"}}>Click on a routine for more details</p><p>| 💪 | 🏋️ | 🏃‍♀️ |</p>
                </>
                
            </div>
            <div>
                
                    <>
                        <div className="exercise-box">
                            <p>Exercise Name: exercise.name</p>
                            <p>Instructions: exercise.instructions</p>
                        </div>
                    </> 
                
                
            </div>
        </div>

    );
}


export default DisplayDetails;
