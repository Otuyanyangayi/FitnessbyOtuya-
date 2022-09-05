import React from 'react';
import {Link} from 'react-router-dom'
import "./LandingPage.css"

function LandingPage(){
    return(
        <div className="landingpage">
            <Link to="/mainpage">
            <button className="button">My Routines</button>
            </Link>
            <Link to="/mealspage">
            <button className="button">My Meals</button>
            </Link>


            <span className="span">Fitness By Otuya</span>
        </div>
    )
}

export default LandingPage
