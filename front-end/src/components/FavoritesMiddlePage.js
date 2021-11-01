import React from 'react'
import '../styles/FavoritesPageStyles.css'
import { useSelector } from 'react-redux'
import FavoritesCards from './FavoritesCards'
import { useState } from 'react'
import { useEffect } from 'react'
import { favoritePageSetting } from '../functions/generalFunctions'

export default function FavoritesMiddlePage() {
    const cardData = useSelector((state) => state.favoriteReducer.favorite)
    
    const [trueOrFalse, setTrueOrFalse] = useState(false)
    

        useEffect(() => {
            favoritePageSetting(setTrueOrFalse, cardData)
        }, [favoritePageSetting])

        

    return (
        <>
        {trueOrFalse  ? 
        <div className="favoritesMiddlePageDiv">
        
            { cardData && cardData.map((cards) => <FavoritesCards cards={cards}/>)}
            
        </div> : <div className="favoritesMiddlePageDiv"><p className="noFavoritesAdded">No Favorites Added</p></div>}
        </>
    )
}
