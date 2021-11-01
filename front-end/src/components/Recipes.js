import React from 'react'
import UpperRecipePagePic from './UpperRecipePagePic'
import '../styles/RecipesStyles.css'
import RecipeMiddlePage from './RecipeMiddlePage'

export default function Recipes() {
    return (
        <div className="recipePageMainDiv">
            
            <UpperRecipePagePic/>
            <RecipeMiddlePage/>
        </div>
    )
}
