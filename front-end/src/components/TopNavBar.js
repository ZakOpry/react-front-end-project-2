import React from 'react'
import '../styles/topNavBarStyles.css'
import {Link} from 'react-router-dom'




export default function TopNavBar() {
    
    return (
        <div className="topNavBarMainDiv">
    
        <div  id="brewedUp"><h1>YouBrew</h1></div>
        <Link className="link" to="/"><div className="navBarButton" id="home"><h2>Home</h2></div></Link>
       <Link className="link" to="/recipes"> <div className="navBarButton" id="recipes"><h2>Recipes</h2></div></Link>
        <Link className="link" to="/favorites"><div className="navBarButton" id="forecast"><h2>Favorites</h2></div></Link>
        <Link className="link" to="/about"><div className="navBarButton" id="about"><h2>About</h2></div></Link>
        </div>
    )
}
