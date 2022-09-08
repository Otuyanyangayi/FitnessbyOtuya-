import React from 'react';
import {Link} from 'react-router-dom'
import "./LandingPage.css"

function LandingPage(){
    return(
        <div className="landingpage">
            <Link to="/mainpage">
            <button className="button">My Routines</button>
            </Link>
            <Link to="/mainpage2">
            <button className="button">My Meals</button>
            </Link>


            <span className="span">Fitness By Otuya </span>
            <p className="p">Created by <a href="https://otuyanyangayi.github.io/my-portfolio/">Otuya</a> | <span className="fa fa-copyright"></span> 2022 All rights reserved.</p>
        </div>
    )
}

export default LandingPage
