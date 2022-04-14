import React from "react"
import "../styles/Menu.scss"
import { Link } from "react-router-dom"

// export default function Menu({ isToggled, setIsToggled, closeCartMenu, tl }) {
export default function Menu({ isToggled, setIsToggled, closeCartMenu }) {

    // display menu animation
    const menuContainer = React.useRef(null)
    React.useEffect(() => {
        if (isToggled.menu && !isToggled.cart) {
            menuContainer.current.style.maxHeight = "100vh"
        } else {
            menuContainer.current.style.maxHeight = "0"
        }
    }, [isToggled])

    return (
        <div ref={menuContainer} className="menu-container">
        {/* <div className="menu-container"> */}
            <Link to="/" onClick={closeCartMenu}>Home</Link>
            <Link to="/about" onClick={closeCartMenu}>About</Link>
            <Link to="/products" onClick={closeCartMenu}>Products</Link>
            <Link to="/recipes" onClick={closeCartMenu}>Recipes</Link>
            <Link to="/newsletter" onClick={closeCartMenu}>Newsletter</Link>
            <Link to="/contact" onClick={closeCartMenu}>Contact</Link>
        </div>
    )
}