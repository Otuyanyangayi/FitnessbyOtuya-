import React, { useState } from "react";
import {Link} from "react-router-dom"
import MealDetails from "./MealDetails";
import './style.css';
const Meal = () => {
    const[search,setSearch]=useState("");
    const[Mymeal,setMeal]=useState();
    const searchMeal=(evt)=>{
        if(evt.key==="Enter")
        {
            fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`).then(res=>res.json()).then(data=> {setMeal(data.meals);setSearch("")})
        }
    }
    return (
        <>
            <div className="main">
                <div className="heading">
                <Link to="/" style={{fontSize: "2em", textDecoration: 'none', color:"white"}}>
           Fitness By Otuya
        </Link>
                    <h1>Health is Wealth</h1>
                    <h4>The first step to loving youself is eating right!</h4>
                </div>
                <div className="searchBox" >
                    <input type="search" className="search-bar" onChange={(e)=>setSearch(e.target.value)} value={search} onKeyPress={searchMeal}/>
                </div>
                <div className="container">
                   {   
                  
                    (Mymeal==null)? <p className="notSearch">Not found</p> : 
                         Mymeal.map((res)=>{
                             return(
                            <MealDetails data={res}/>)} 
                     
                    ) 
                   
                   }
                </div>
            </div>
        </>
    )
}
export default Meal;