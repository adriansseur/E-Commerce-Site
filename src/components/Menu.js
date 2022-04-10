import React from "react"
import "../styles/Menu.scss"
import { Link } from "react-router-dom"

export default function Menu({isToggled, setIsToggled, closeCartMenu, tl}) {

    // display menu animation
    const menuContainer = React.useRef(null)
    React.useEffect(() => {
        if (isToggled.menu && !isToggled.cart) {
            // delays in order to allow cart to close first
            setTimeout(() => {
                tl.to(menuContainer.current, { maxHeight: "100vh" })
            }, 0)
        } else {
            tl.to(menuContainer.current, { maxHeight: 0})
        }
    }, [isToggled])

    return (
        <div ref={menuContainer} className="menu-container">
            <Link to="/" onClick={closeCartMenu}>Home</Link>
            <Link to="/about" onClick={closeCartMenu}>About</Link>
            <Link to="/products" onClick={closeCartMenu}>Products</Link>
            <Link to="/recipes" onClick={closeCartMenu}>Recipes</Link>
            <Link to="/newsletter" onClick={closeCartMenu}>Newsletter</Link>
            <Link to="/contact" onClick={closeCartMenu}>Contact</Link>
        </div>
    )
}