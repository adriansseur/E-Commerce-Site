import React from "react"
import "../styles/Products.scss"
import AmountSelector from "../subcomponents/AmountSelector"
import { ProductsDataState } from "../interfaces"

export default function Products({ productsItems, setProductsItems, componentOpacity}) {
    
    // submits desired products to "cart" (amountInCart) in products data
    function handleAddToCart(itemNumber: number) {
        setProductsItems((prev: ProductsDataState[]) => {
            const newState = prev.map(product => {
                if (product.itemNumber === itemNumber) {
                    const modifiedProduct = {
                        ...product,
                        amountInCart: product.amountInCart + product.amountInProducts,
                        amountInProducts: 1
                    }
                    return modifiedProduct
                } else return product
            })
            return newState
        })
        // visual confirmation of items added to cart
        document.querySelector(`#products-submitBtn-${itemNumber}`).textContent = "Added!"
        setTimeout(() => {
            document.querySelector(`#products-submitBtn-${itemNumber}`).textContent = "Add to cart"
        }, 1500)
    }

    // loops through productsData and builds elements
    const productsElements = productsItems.map((product: ProductsDataState) => {
        return (
            <div key={product.itemNumber} className="card">
                <img src={process.env.PUBLIC_URL + product.src} alt=""></img>
                <div className="info-container">
                    <p>{product.name}</p>
                    <p>{product.price}</p>
                    <AmountSelector
                        product={product}
                        setProductsItems={setProductsItems} desiredAmount="amountInProducts" />
                    <button id={`products-submitBtn-${product.itemNumber}`} onClick={() => handleAddToCart(product.itemNumber)}>Add to cart</button>
                </div>
            </div>
        )
    })

    return (
        <div className="products-container" style={{ opacity: componentOpacity }}>
            {productsElements}
        </div>
    )
}
