import React from 'react';
import {Link} from "react-router-dom"
import "./Header.css";

function Header () {
    return (
    <div className="header">
         <Link to="/" style={{fontSize: "0.7em", textDecoration: 'none', color:"white"}}>
           Fitness By Otuya
        </Link>
        <Link to="/mainpage">
          <button>Home</button>
        </Link>
        <Link to="/newroutine">
            <button>Design New Routine</button>
        </Link>
        <Link to="/newexercise">
        <button>Add New Exercises</button>
        </Link>
            
    </div>

    )}

export default Header;



