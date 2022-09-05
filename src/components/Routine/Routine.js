import React from 'react';
import "./Routine.css"

function Routine( isTrue){

    return(
        <>
        <div className="routine-box">
            <h3 style={{fontSize: "1.30em" }}>Example name</h3>
            <div className="routine-content">
                <li>Routine ID: 30</li>
                Focus: example
            </div>
            <button className='routine-btn' onClick={() => {
                isTrue()
               
            }}>
                Details
            </button>
            <button className='routine-btn'>Delete</button>
        
        </div>
        <div className="routine-box">
            <h3 style={{fontSize: "1.30em" }}>Example name</h3>
            <div className="routine-content">
                <li>Routine ID: 30</li>
                Focus: example
            </div>
            <button className='routine-btn'>
                Details
            </button>
            <button className='routine-btn'>Delete</button>
        
        </div>
        

        </>


    )
}

export default Routine