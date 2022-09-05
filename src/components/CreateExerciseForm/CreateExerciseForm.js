import React, { useState } from 'react';
import Header from '../Header/Header';
import "./CreateExerciseForm.css"

function CreateExerciseForm(){

    const [formData, setFormData] = useState({
        name: '',
        instructions: '',
        personal_trainer_id: '',
        routine_id: ''
    })
    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]:e.target.value})
    }

    const handleSubmit = (e) => {
        
        e.preventDefault() 
       
        reset()
    }

    const reset = () => {
        setFormData({
            name: '',
            instructions: '',
            personal_trainer_id: '',
            routine_id: ''
        })
    }



    return (
        <div>
            <Header />
            <div className="layout">
            <form onSubmit={handleSubmit}>
                <div className="layoutdiv">
                    <label htmlFor='ExerciseName'> Exercise Name: </label>            
                    <input 
                        id='ExerciseName' 
                        type ='text' 
                        name='name' 
                        placeholder='Exercise name here...' 
                        value={formData.name}
                        onChange={handleChange}>
                    </input>
                </div>
                <div className="layoutdiv">
                    <label htmlFor='Instructions' > Instructions: </label>
                    <input  
                        type='text' 
                        id='Instructions' 
                        name='instructions' 
                        placeholder='Instructions here...'
                        value={formData.instructions}
                        onChange={handleChange}>
                    </input>
                </div>
                <div className="layoutdiv">
                    <label htmlFor='PersonalTrainerId'> Personal Trainer ID: </label>
                    <input 
                        type='number' 
                        id='PersonalTrainerId' 
                        name='personal_trainer_id' 
                        placeholder='Personal Trainer ID here...'
                        value={formData.personal_trainer_id}
                        onChange={handleChange}>                    
                    </input>
                </div>
                <div className='layoutdiv'>
                    <label htmlFor='RoutineId'> Routine ID: </label>
                    <input 
                        type='number' 
                        id='RoutineId' 
                        name='routine_id' 
                        placeholder='Routine ID here...' 
                        value={formData.routine_id}
                        onChange={handleChange}/>
                </div>
                <button className="layout-btn" type="reset" onClick={handleSubmit}>Add Exercise </button>
            </form>
        
            </div>
        </div>
    )
}

export default CreateExerciseForm
