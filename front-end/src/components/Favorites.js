import React from 'react'
import '../styles/FavoritesPageStyles.css'
import UpperFavPagePic from './UpperFavPagePic'
import FavoritesMiddlePage from './FavoritesMiddlePage'


export default function Favorites() {
    return (
        <div className="favoritesPageMainDiv">
           <UpperFavPagePic/> 
           <FavoritesMiddlePage/>
           
        </div>
    )
}
