import React from 'react'
import {  useDispatch } from 'react-redux'
import '../styles/RecipesStyles.css'
import { useState } from 'react'
import RecipeCardAdditionalDetails from './RecipeCardAdditionalDetails'

export default function RecipeCards(props) {

    const [additionalDets, setAdditionalDets] = useState(false)
    
    const dispatch = useDispatch()
    

    return (
        <>
        <div className="recipeCardsMainDiv">
            
            <div className="cardTitlesDiv"><h2>{props.beers.name}</h2></div>
            <div className="tagLine"><p>{props.beers.tagline}</p></div>
            <div className="cardImgDiv"><img src={props.beers.image_url} alt="beers"/></div>
            <div className="discription"><p>{props.beers.description}</p></div>
            <div className="cardButtonsDiv">
            <button className="cardSaveButton" onClick={()=> dispatch({type: 'SET_FAVORITE', payload: props.beers})}>Save</button>
            <button className="seeMoreButton" onClick={()=>setAdditionalDets(true)}>See More</button>
            </div>
            

        </div>
        {additionalDets ? <RecipeCardAdditionalDetails beers={props.beers} setAdditionalDets={setAdditionalDets}/> : <> </>}
            </>
    )
}
