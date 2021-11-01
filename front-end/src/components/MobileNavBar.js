import React from 'react'
import '../styles/MobileNavBarStyles.css'
import {FiMenu} from 'react-icons/fi'
import { IconContext } from 'react-icons'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function MobileNavBar() {
    const [menuOpen, setMenuOpen] = useState(false)
   

    return (
        <>
        <div className="mainMobileNavBarDiv">
            <div className="brewedUp"> 
                <h1>YouBrew</h1>
                </div>
            <div className="menuDiv" onClick={()=> setMenuOpen( ! menuOpen)}>
                <IconContext.Provider value= {{className: "menuIcon"}}>
                <FiMenu/>
                 </IconContext.Provider>
                </div>
                
        </div>
             {menuOpen ? <div className="dropDown">
             <Link className="link" to="/"><div className="navBarButton" id="home"><h3>Home</h3></div></Link>
             <Link className="link" to="/recipes"> <div className="navBarButton" id="dropDownRecipes"><h3>Recipes</h3></div></Link>
             <Link className="link" to="/favorites"><div className="navBarButton" id="dropDownFavorites"><h3>Favorites</h3></div></Link>
             <Link className="link" to="/about"><div className="navBarButton" id="dropDownAbout"><h3>About</h3></div></Link>

             </div> : <></>}
        </>
    )
}
