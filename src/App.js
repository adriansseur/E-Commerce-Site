import React from "react"
import { Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Menu from "./components/Menu"
import Cart from "./components/Cart"
import Home from "./components/Home"
import About from "./components/About"
import Products from "./components/Products.tsx"
import Recipes from "./components/Recipes"
import Newsletter from "./components/Newsletter"
import Contact from "./components/Contact"
import Checkout from "./components/Checkout"
import data from "./productsData"
import {gsap} from "gsap"

export default function App() {

    // Source of truth. Controls menu and cart visibility
    const [isToggled, setIsToggled] = React.useState({
        menu: false,
        cart: false
    })

    // Source of truth. Controls product data
    const [productsItems, setProductsItems] = React.useState(data)

    // Source of truth. Controls opacity of components
    const [componentOpacity, setComponentOpacity] = React.useState("1")

    // Displaying products data  and toggled state in console. For testing
    React.useEffect(() => {
        console.log(productsItems, isToggled)
    }, [productsItems, isToggled])

    // Controlling opacity if menu or cart are open
    React.useEffect(() => {
        if (isToggled.menu || isToggled.cart) {
            setComponentOpacity("0.1")
        } else if (!isToggled.menu && !isToggled.cart) {
            setComponentOpacity("1")
        }
    }, [isToggled])

    // Close the cart and menu
    function closeCartMenu() {
        setIsToggled({
            menu: false,
            cart: false
    })
    }

    // Watching for proceeded to checkout
    const [proceededToCheckout, setProceededToCheckout] = React.useState(false)

    return (
        <div className="app-container">
            <Header
                isToggled={isToggled}
                productsItems={productsItems}
                setIsToggled={setIsToggled}
                closeCartMenu={closeCartMenu}
                proceededToCheckout={proceededToCheckout}
                setProceededToCheckout={setProceededToCheckout} />
            <Menu
                // tl={tl}
                isToggled={isToggled}
                setIsToggled={setIsToggled}
                closeCartMenu={closeCartMenu} />
            <Cart
                // tl={tl}
                isToggled={isToggled}
                setProductsItems={setProductsItems}
                productsItems={productsItems}
                closeCartMenu={closeCartMenu}
                setProceededToCheckout={setProceededToCheckout} />
            
            <Routes >
                <Route path="/" element={<Home componentOpacity={componentOpacity}/>} />
                <Route path="/about" element={<About componentOpacity={componentOpacity}/>} />
                <Route path="/products" element={<Products
                    componentOpacity={componentOpacity}
                    productsItems={productsItems}
                    setProductsItems={setProductsItems} />} />
                <Route path="/recipes" element={<Recipes componentOpacity={componentOpacity}/>} />
                <Route path="/newsletter" element={<Newsletter componentOpacity={componentOpacity}/>} />
                <Route path="/contact" element={<Contact componentOpacity={componentOpacity} />} />
                <Route path="/checkout" element={<Checkout
                    componentOpacity={componentOpacity}
                    productsItems={productsItems}
                    setProductsItems={setProductsItems}
                />} />
            </Routes>

        </div>
    )
}