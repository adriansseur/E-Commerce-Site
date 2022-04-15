import React from "react"
import "../styles/Header.scss"
import { Link } from "react-router-dom"

export default function Header({setIsToggled, closeCartMenu, productsItems}) {

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

    const totalCartItems = productsItems.reduce((total, i) => {
        total = total + i.amountInCart
        return total
    }, 0)

    return (
        <div className="header-container">
            <Link
                id="logo"
                to="/"
                onClick={closeCartMenu}
            >Weston Farms
            </Link>
            <div id="clickables-container">
                <Link
                    id="header-products-link"
                    to="/products"
                    onClick={closeCartMenu}
                >Products
                </Link>
                <div className="cart-wrapper" onClick={handleCartClick}>
                    {totalCartItems !== 0 && <p className="cart-counter">{totalCartItems}</p>}
                    <svg id="cart"  height="2rem"enableBackground="new 0 0 60 60" version="1.1" viewBox="0 0 60 60" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg">
                    <path d="m11.68 13l-0.833-5h-2.99c-0.446-1.72-1.998-3-3.857-3-2.206 0-4 1.794-4 4s1.794 4 4 4c1.859 0 3.411-1.28 3.858-3h1.294l0.5 3h-0.038l5.171 26.016c-2.465 0.188-4.518 2.086-4.76 4.474-0.142 1.405 0.32 2.812 1.268 3.858 0.949 1.049 2.301 1.652 3.707 1.652h2c0 3.309 2.691 6 6 6s6-2.691 6-6h11c0 3.309 2.691 6 6 6s6-2.691 6-6h4c0.553 0 1-0.447 1-1s-0.447-1-1-1h-4.35c-0.826-2.327-3.043-4-5.65-4s-4.824 1.673-5.65 4h-11.7c-0.826-2.327-3.043-4-5.65-4s-4.824 1.673-5.65 4h-2.35c-0.842 0-1.652-0.362-2.224-0.993-0.577-0.639-0.848-1.461-0.761-2.316 0.152-1.509 1.546-2.69 3.173-2.69h0.791 0.039 38.994c2.751-1e-3 4.988-2.238 4.988-4.988v-23.013h-48.32zm-7.68-2c-1.103 0-2-0.897-2-2s0.897-2 2-2 2 0.897 2 2-0.897 2-2 2zm42 34c2.206 0 4 1.794 4 4s-1.794 4-4 4-4-1.794-4-4 1.794-4 4-4zm-23 0c2.206 0 4 1.794 4 4s-1.794 4-4 4-4-1.794-4-4 1.794-4 4-4zm35-8.987c0 1.647-1.34 2.987-2.987 2.987h-38.192l-4.77-24h45.949v21.013z"/>
                    </svg>
                </div>

                {/* <FontAwesomeIcon id="cart" icon={faCartShopping} onClick={handleCartClick}/> */}
                <svg id="menu" onClick={handleMenuClick} height="1.5rem" enableBackground="new 0 0 150 150" version="1.1" viewBox="0 0 150 150" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15,30h120c8.284,0,15-6.716,15-15s-6.716-15-15-15H15C6.716,0,0,6.716,0,15S6.716,30,15,30z"/>
                    <path d="M135,60H15C6.716,60,0,66.716,0,75s6.716,15,15,15h120c8.284,0,15-6.716,15-15S143.284,60,135,60z"/>
                    <path d="m135 120h-120c-8.284 0-15 6.716-15 15s6.716 15 15 15h120c8.284 0 15-6.716 15-15s-6.716-15-15-15z"/>
                </svg>

                {/* <FontAwesomeIcon id="menu" icon={faBars} onClick={handleMenuClick}/> */}
            </div>
        </div>
    )
}