import React from "react"
import "../styles/Menu.scss"
import { Link } from "react-router-dom"

export default function Menu({isToggled, setIsToggled, closeCartMenu, tl}) {

    // display menu animation
    const menuContainer = React.useRef(null)
    React.useEffect(() => {
        let height = 0
        if (isToggled.menu) {
            height = "100vh"
        }
        tl.to(menuContainer.current, { maxHeight: height}, "<")
    }, [isToggled])

    return (
        <div ref={menuContainer} className="menu-container">
            <Link to="e-commerce-site/" onClick={closeCartMenu}>Home</Link>
            <Link to="e-commerce-site/about" onClick={closeCartMenu}>About</Link>
            <Link to="e-commerce-site/products" onClick={closeCartMenu}>Products</Link>
            <Link to="e-commerce-site/recipes" onClick={closeCartMenu}>Recipes</Link>
            <Link to="e-commerce-site/newsletter" onClick={closeCartMenu}>Newsletter</Link>
            <Link to="e-commerce-site/contact" onClick={closeCartMenu}>Contact</Link>
        </div>
    )
}