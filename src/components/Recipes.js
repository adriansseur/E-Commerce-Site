import React from "react"
import "../styles/Recipes.scss"
import data from "../recipesData"

export default function Recipes({ componentOpacity }) {
    
    const recipesElements = data.map(recipe => {
        return (
            <div className="card">
                <img src={process.env.PUBLIC_URL + recipe.src}></img>
                <p>{recipe.text}</p>
            </div>
        )
    })
    return (
        <div className="recipes-container" style={{opacity: componentOpacity}}>
            <h1>Recipes</h1>
            {recipesElements}
        </div>
    )
}