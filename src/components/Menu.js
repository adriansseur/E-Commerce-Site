import React from "react"
import "../styles/Menu.scss"
import { Link } from "react-router-dom"

export default function Menu({isToggled, setIsToggled, closeCartMenu}) {

    // Controls whether the menu is displayed
    const style = {
        display: isToggled.menu ? "flex" : "none"
    }

    return (
        <div className="menu-container" style={style}>
            <Link to="/e-commerce-site/" onClick={closeCartMenu}>Home</Link>
            <Link to="/about" onClick={closeCartMenu}>About</Link>
            <Link to="/products" onClick={closeCartMenu}>Products</Link>
            <Link to="/recipes" onClick={closeCartMenu}>Recipes</Link>
            <Link to="/newsletter" onClick={closeCartMenu}>Newsletter</Link>
            <Link to="/contact" onClick={closeCartMenu}>Contact</Link>
        </div>
    )
}