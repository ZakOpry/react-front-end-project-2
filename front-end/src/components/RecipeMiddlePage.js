import React from 'react'
import '../styles/RecipesStyles.css'
import {useSelector , useDispatch} from 'react-redux'
import { useEffect } from 'react'
import { getData } from '../functions/generalFunctions'
import RecipeCards from './RecipeCards'


export default function RecipeMiddlePage() {
    const dispatch = useDispatch()

    useEffect(() => {
        
        
        getData(dispatch)

    }, [])

    
    const initialBeerCards = useSelector((state) => state.initialRecipeReducer[0])
    

    return (
        <div className="recipeMiddlePageMaindiv">

        {initialBeerCards && initialBeerCards.beerData.map((beers) => <RecipeCards beers={beers}></RecipeCards>)}
            
        </div>
    )
}
