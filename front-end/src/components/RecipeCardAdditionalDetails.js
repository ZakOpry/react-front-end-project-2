import React from 'react'
import "../styles/RecipesStyles.css"
import { useDispatch } from 'react-redux'

export default function RecipeCardAdditionalDetails(props) {
    const setAdditionalDets = props.setAdditionalDets
    const dispatch = useDispatch()

    return (
        <div className="additionalDetailsDiv">
            <div className="additionalPageTitle"><h1>{props.beers.name}</h1></div>
            <div className="infoPointsDiv">
               <p>ABV: {props.beers.abv}</p> 
               <p>IBU: {props.beers.ibu}</p>
               <p>PH: {props.beers.ph}</p>
               <p>SRM: {props.beers.srm}</p>
            </div>
            <div className="ingredientsMainDiv">
            <div className="ingredients"><h2 >Ingredients</h2></div>
            <div className="hopsDiv">
            <h3>Hops:</h3>
            <p> {props.beers.ingredients.hops.map((names) => <p>{names.name + ":" + " " + names.amount.value + " " + "grams"}</p>)}</p>
            </div>
            <div className="maltsDiv">
            <h3>Malts:</h3>
            <p> {props.beers.ingredients.malt.map((malts) => <p>{malts.name + ":" + " " + malts.amount.value + " " + "kilograms"}</p>)}</p>
            </div>
            <div className="InstructionsHeaderDiv"><h2>Instructions</h2></div>
            <div className="instructionsBodyDiv">
            <p> {props.beers.brewers_tips}</p>
            <p>Fermentation Temp: {props.beers.method.fermentation.temp.value + "c"}</p>
            <p>Mash Temp: {props.beers.method.mash_temp.map((mash) => <p>{mash.temp.value + "c"}</p>)}</p>
            
            </div>
            </div>
            <div className="backButtonDiv">
                <button className="backButton" onClick={()=>setAdditionalDets(false)}>Back</button>
                <button className="saveButton" onClick={()=> dispatch({type: 'SET_FAVORITE', payload: props.beers})}>Save</button>
            </div>
        </div>
    )
}
