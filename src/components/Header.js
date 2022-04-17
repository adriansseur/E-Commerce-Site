import React from "react"
import "../styles/Header.scss"
import { Link } from "react-router-dom"
import { gsap } from "gsap"

export default function Header({isToggled, setIsToggled, closeCartMenu, productsItems, proceededToCheckout, setProceededToCheckout}) {

    const cart = React.useRef()
    const c = gsap.utils.selector(cart)
    const shapes = React.useRef()
    const s = gsap.utils.selector(shapes)
    const tl = gsap.timeline({defaults: {
        duration: 0.3
    }
    })
    
    const totalCartItems = productsItems.reduce((total, i) => {
        total = total + i.amountInCart
        return total
    }, 0)
    
    function handleToggleMenu() {
        if (isToggled.cart === true) {
            handleToggleCart()
            tl.to(cart.current, {
                onComplete: () => {
                    setIsToggled(prevState => 
                        ({menu: !prevState.menu, cart: false})
                    )
            }})

        } else if (isToggled.cart === false) {
            setIsToggled(prevState => 
                ({menu: !prevState.menu, cart: prevState.cart})
            )
        }
    }

    function handleToggleCart() {
        if (isToggled.menu === true) {
            setIsToggled(prevState => 
                ({menu: false, cart: prevState.cart}))
            toggleCart()
        } else if (isToggled.menu === false) {
            toggleCart()
        }
    }

    function toggleCart() {
        if (isToggled.cart === false) {
            gsap.set(shapes.current, {opacity: 0})
            tl.to(cart.current, {scale: 0.8})
                .to(cart.current, { scale: 1 })
            // this condition avoids cart counter when necessary
            if (totalCartItems !== 0) {
                tl.to(c(".cart-counter"), {duration: 0.25, scale: 3, y: 5})
                    .to(c(".cart-counter"), {background: "#e9ebea", color: "black", duration: 0.2}, "<50%")
            }
            tl.to(cart.current, {rotate: 10})
                .to(cart.current, {rotate: -10})
                .to(shapes.current, {opacity: 1}, "<")
                .to(s(".circle"), {y:-10, duration: 0.2, rotation: 10}, "<30%")
                .to(s(".square"), {y:-10, duration: 0.2, rotation: -5}, "<")
                .to(s(".triangle"), {y:-10, duration: 0.2, rotation: 15}, "<")
                .to(cart.current, {yPercent: 110})
                .to(s(".circle"), {y: -5, x: 0, scale: 1.3, rotation: -20}, "<")
                .to(s(".square"), {y: 0, x: -5, scale: 1.3, rotation: 30}, "<")
                .to(s(".triangle"), {
                  y: 5, x: -8, scale: 1.3, rotation: -25, onComplete: () => {
                    setIsToggled(prevState => 
                        ({menu: prevState.menu, cart: !prevState.cart})) 
                  }}, "<")
            
        } else if (isToggled.cart === true) {
            tl.to(shapes.current, {scale: 0.8})
                .to(shapes.current, {scale: 1})
                .to(s(".circle"), {y:-10, x: 0, duration: 0.2, rotation: 10, scale: 1})
                .to(s(".square"), {y:-10, x: 0, duration: 0.2, rotation: -5, scale: 1}, "<")
                .to(s(".triangle"), {y:-10, x: 0, duration: 0.2, rotation: 15, scale: 1}, "<")
                .to(cart.current, {yPercent: 0})
                .to(s(".circle"), {y: 0, rotation: 0}, "<")
                .to(s(".square"), {y: 0, rotation: 0}, "<")
                .to(s(".triangle"), {y: -10, rotation: 0}, "<")
                .to(cart.current, {rotate: 0})
                .to(s(".triangle"), { y: 0 }, "<")
            // this conditional block avoids cart counter when necessary
            // and ensures state is changed after animations end
            if (totalCartItems !== 0) {
                tl.to(c(".cart-counter"), {
                    background: "red", color: "white", scale: 4, y: 0, onComplete: () => {
                        setIsToggled(prevState => 
                        ({menu: prevState.menu, cart: !prevState.cart}))
                    }
                })
            } else {
                tl.to(cart.current, {duration: 0, onComplete: () => {
                        setIsToggled(prevState => 
                        ({menu: prevState.menu, cart: !prevState.cart}))
                    }
                })
            }
        }
    }

    // if proceed checkout and cart was open, close cart
    if (proceededToCheckout === true && isToggled.cart === true) {
        toggleCart()
    }

    return (
        <div className="header-container">
            <Link
                id="logo"
                to="/"
                onClick={() => {
                    if (isToggled.cart === true) {
                        toggleCart()
                    } else if (isToggled.menu === true) {
                        setIsToggled(prevState => 
                            ({menu: false, cart: prevState.cart}))
                    }
                }}
            >Weston Farms
            </Link>
            <div id="clickables-container">
                <Link
                    id="header-products-link"
                    to="/products"
                    onClick={() => {
                        if (isToggled.cart === true) {
                            toggleCart()
                        } else if (isToggled.menu === true) {
                            setIsToggled(prevState => 
                                ({menu: false, cart: prevState.cart}))
                        }
                    }}
                >Products
                </Link>
                <div className="cart-wrapper" onClick={() => {
                    setProceededToCheckout(false)
                    handleToggleCart()
                }}>
                    <div ref={shapes} className="shapes-wrapper">
                        <div className="circle"></div>
                        <div className="triangle"></div>
                        <div className="square"></div>
                    </div>
                    <div id="cart" ref={cart}>
                        {totalCartItems !== 0 && <div className="cart-counter">{totalCartItems}</div>}
                        <svg height="1.75rem" viewBox="0 0 60 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 10H58V34H17L12 10Z" fill="#e9ebea"/>
                        <path d="M11.68 8L10.847 3H7.857C7.411 1.28 5.859 0 4 0C1.794 0 0 1.794 0 4C0 6.206 1.794 8 4 8C5.859 8 7.411 6.72 7.858 5H9.152L9.652 8H9.614L14.785 34.016C12.32 34.204 10.267 36.102 10.025 38.49C9.883 39.895 10.345 41.302 11.293 42.348C12.242 43.397 13.594 44 15 44H17C17 47.309 19.691 50 23 50C26.309 50 29 47.309 29 44H40C40 47.309 42.691 50 46 50C49.309 50 52 47.309 52 44H56C56.553 44 57 43.553 57 43C57 42.447 56.553 42 56 42H51.65C50.824 39.673 48.607 38 46 38C43.393 38 41.176 39.673 40.35 42H28.65C27.824 39.673 25.607 38 23 38C20.393 38 18.176 39.673 17.35 42H15C14.158 42 13.348 41.638 12.776 41.007C12.199 40.368 11.928 39.546 12.015 38.691C12.167 37.182 13.561 36.001 15.188 36.001H55.012C57.763 36 60 33.763 60 31.013V8H11.68ZM4 6C2.897 6 2 5.103 2 4C2 2.897 2.897 2 4 2C5.103 2 6 2.897 6 4C6 5.103 5.103 6 4 6ZM46 40C48.206 40 50 41.794 50 44C50 46.206 48.206 48 46 48C43.794 48 42 46.206 42 44C42 41.794 43.794 40 46 40ZM23 40C25.206 40 27 41.794 27 44C27 46.206 25.206 48 23 48C20.794 48 19 46.206 19 44C19 41.794 20.794 40 23 40ZM58 31.013C58 32.66 56.66 34 55.013 34H16.821L12.051 10H58V31.013Z" fill="black"/>
                        </svg>
                    </div>
                </div>

                <svg id="menu" onClick={handleToggleMenu} height="1.5rem" enableBackground="new 0 0 150 150" version="1.1" viewBox="0 0 150 150" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15,30h120c8.284,0,15-6.716,15-15s-6.716-15-15-15H15C6.716,0,0,6.716,0,15S6.716,30,15,30z"/>
                    <path d="M135,60H15C6.716,60,0,66.716,0,75s6.716,15,15,15h120c8.284,0,15-6.716,15-15S143.284,60,135,60z"/>
                    <path d="m135 120h-120c-8.284 0-15 6.716-15 15s6.716 15 15 15h120c8.284 0 15-6.716 15-15s-6.716-15-15-15z"/>
                </svg>
            </div>
        </div>
    )
}