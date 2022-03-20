import React from "react"
import "../styles/Header.scss"
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
                id="logo"
                to="e-commerce-site/"
                onClick={closeCartMenu}
            >Weston Farms
            </Link>
            <div id="clickables-container">
                <Link
                    to="e-commerce-site/products"
                    onClick={closeCartMenu}
                >Products
                </Link>
                <FontAwesomeIcon id="cart" icon={faCartShopping} onClick={handleCartClick}/>
                <FontAwesomeIcon id="menu" icon={faBars} onClick={handleMenuClick}/>
            </div>
        </div>
    )
}