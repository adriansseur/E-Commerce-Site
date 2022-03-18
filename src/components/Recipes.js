import React from "react"

export default function Recipes({componentOpacity}) {
    return (
        <div className="recipes-container" style={{opacity: componentOpacity}}>
            <h1>Recipes Here</h1>    
        </div>
    )
}