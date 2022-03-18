import React from "react"
import { useNavigate } from "react-router-dom"

export default function Checkout({ componentOpacity, productsItems, setProductsItems }) {
    let navigate = useNavigate()
    
    const checkoutElements = productsItems.map(product => {
        if (product.amountInCart !== 0) {
            return (
                <div key={product.itemNumber} className="checkout-container-card">
                    <img src={process.env.PUBLIC_URL + product.src} alt=""></img>
                    <div className="checkout-container-card-info">
                        <p>{product.name}</p>
                        <p>{product.price}</p>
                        <p>Items: {product.amountInCart}</p>
                    </div>
                </div>
            )
        }
    })

    // calculations for checkout
    let subtotal = 0
    let estimatedTax = 0
    for (let product of productsItems) {
        if (product.amountInCart !== 0) {
            subtotal += parseFloat((product.amountInCart * product.price).toFixed(2))
            estimatedTax = parseFloat((subtotal * 0.0825).toFixed(2))
        }
    }
    const total = parseFloat((subtotal + estimatedTax).toFixed(2))

    // controls events when "place order" is clicked
    // events include emptying cart
    function handlePlaceOrderClick() {
        const placeOrderBtn = document.querySelector(".place-order")
        placeOrderBtn.textContent = "Processing..."
        setTimeout(() => {
            placeOrderBtn.textContent = "Success!"
        }, 1500)
        setTimeout(() => {
            placeOrderBtn.textContent = "Redirecting..."
        }, 3000)
        setTimeout(() => {
            navigate("/e-commerce-site/")
            setProductsItems(prev => {
                const newState = prev.map(product => {
                    const modifiedProduct = {
                        ...product,
                        amountInCart: 0
                    }
                    return modifiedProduct
                })
                return newState
            })
        }, 4500)
    }

    return (
        <div className="checkout-container" style={{opacity: componentOpacity}}>
            <h1>Your Order</h1>
            {checkoutElements}
            <div className="checkout-container-calc">
                <p>Subtotal: ${subtotal.toFixed(2)}</p>
                <p>Estimated Tax: ${estimatedTax.toFixed(2)}</p>
                <p>Total: ${total.toFixed(2)}</p>
            </div>
            <button className="place-order" onClick={handlePlaceOrderClick}>Place Order</button>
        </div>
    )
}