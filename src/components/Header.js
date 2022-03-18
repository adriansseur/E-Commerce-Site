import React from "react"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'

export default function Header({setIsToggled, closeCartMenu}) {

    // Two handleClick functions to close one component if another opens
    function handleCartClick() {
        setIsToggled(prevState => 
            ({menu: false, cart: !prevState.cart})
        )
    }

    function handleMenuClick() {
        setIsToggled(prevState => 
            ({menu: !prevState.menu, cart: false})
        )
    }

    return (
        <div className="header-container">
            <Link
                to="/e-commerce-site/"
                onClick={closeCartMenu}
            >Weston Farms</Link>
            <div className="header-container-links">
                <Link
                    to="/products"
                    onClick={closeCartMenu}
                >Products</Link>
                <FontAwesomeIcon className="header-container-cart" icon={faCartShopping} onClick={handleCartClick}
                />
                <FontAwesomeIcon className="header-container-menu" icon={faBars} onClick={handleMenuClick}
                />
            </div>
        </div>
    )
}