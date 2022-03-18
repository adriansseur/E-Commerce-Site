import React from "react"

export default function Home({componentOpacity}) {
    return (
        <div className="home-container" style={{opacity: componentOpacity}}>
            <h1>Home Here</h1>
            <p>Fourth Test Here</p>
        </div>
    )
}