import React from 'react';
import {Link} from "react-router-dom"
import "../Header/Header.css";

function Header () {
    return (
    <div className="header">
         <Link to="/" style={{fontSize: "0.7em", textDecoration: 'none', color:"gray"}}>
           Fitness By Otuya
        </Link>
        <Link to="/mainpage2">
          <button>Home</button>
        </Link>
        <Link to="/newmeal">
            <button>Design New Meal</button>
        </Link>
        <Link to="/newfood">
        <button>Add New food </button>
        </Link>
            
    </div>

    )}

export default Header;