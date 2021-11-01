import React from 'react'
import '../styles/FavoritesPageStyles.css'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import FavoriteCardsAdditional from './FavoriteCardsAdditional'
import { DeleteFavorite } from '../redux/action-types/ActionTypes'

export default function FavoritesCards(props) {
    const [additionalDets, setAdditionalDets] = useState(false)
    const dispatch = useDispatch()

    return (
        <>
        <div className="recipeCardsMainDiv">
        <div className="cardTitlesDiv"><h2>{props.cards.name}</h2></div>
            <div className="tagLine"><p>{props.cards.tagline}</p></div>
            <div className="cardImgDiv"><img src={props.cards.image_url} alt="beers"/></div>
            <div className="discription"><p>{props.cards.description}</p></div>
            <div className="cardButtonsDiv">
            <button className="seeMoreButton" onClick={()=>setAdditionalDets(true)}>See More</button>
            <button className="removeButton" onClick={()=>{dispatch({type: DeleteFavorite, payload: props.cards})}}>Remove</button>
            </div>
            </div>

            {additionalDets ? <FavoriteCardsAdditional beers={props.cards} setAdditionalDets={setAdditionalDets}/>: <></>}
            </>
    )
}
