import React from "react"
import "../styles/AmountSelector.scss"

export default function AmountSelector({product, setProductsItems, desiredAmount}) {

    // Updates productsData state according to selector
    function handleSelectorClick(itemNumber, objProperty, identifier) {
        setProductsItems(prev => {
            const newState = prev.map(product => {
                if (product.itemNumber === itemNumber) {
                    const modifiedProduct =
                    {
                        ...product,
                        [objProperty]: updateCount(product, objProperty, identifier)
                    }
                    return modifiedProduct
                } else return product
            })
            return newState
        })
    }

    // A function to prevent negative numbers in the selectors and establish minimum value of 1
    function updateCount(product, objProperty, identifier) {
        if (identifier === "plus") {
            return product[objProperty] + 1
        } else {
            let decreasedValue = product[objProperty] - 1
            if (decreasedValue < 1) {
                decreasedValue = 1
            }
            return decreasedValue
        }
    }

    return (
        <div className="amount-selector-container">
            <svg className="sign" width="2rem" onClick={() => {
                    const identifier = "minus"
                    handleSelectorClick(product.itemNumber, desiredAmount, identifier)}
                }
                enableBackground="new 0 0 512 512" version="1.1" viewBox="0 0 512 512" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg">
                    <path d="m256 0c-141.16 0-256 114.84-256 256s114.84 256 256 256 256-114.84 256-256-114.84-256-256-256zm0 490.67c-129.4 0-234.67-105.27-234.67-234.67 0-129.39 105.27-234.67 234.67-234.67s234.67 105.27 234.67 234.67c0 129.4-105.27 234.67-234.67 234.67z"/>
                    <rect x="94.896" y="246.05" width="309.33" height="21.333"/>
            </svg>
            <div className="number-container">{product[desiredAmount]}</div>
            <svg className="sign" width="2rem" onClick={() => {
                    const identifier = "plus"
                    handleSelectorClick(product.itemNumber, desiredAmount, identifier)}
                }
                enableBackground="new 0 0 490.2 490.2" version="1.1" viewBox="0 0 490.2 490.2" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg">
                    <path d="m418.5 418.5c95.6-95.6 95.6-251.2 0-346.8s-251.2-95.6-346.8 0-95.6 251.2 0 346.8 251.2 95.6 346.8 0zm-329.5-329.5c86.1-86.1 226.1-86.1 312.2 0s86.1 226.1 0 312.2-226.1 86.1-312.2 0-86-226.1 0-312.2z"/>
                    <path d="m245.1 336.9c3.4 0 6.4-1.4 8.7-3.6 2.2-2.2 3.6-5.3 3.6-8.7v-67.3h67.3c3.4 0 6.4-1.4 8.7-3.6 2.2-2.2 3.6-5.3 3.6-8.7 0-6.8-5.5-12.3-12.2-12.2h-67.3v-67.3c0-6.8-5.5-12.3-12.2-12.2-6.8 0-12.3 5.5-12.2 12.2v67.3h-67.3c-6.8 0-12.3 5.5-12.2 12.2 0 6.8 5.5 12.3 12.2 12.2h67.3v67.3c-0.3 6.9 5.2 12.4 12 12.4z"/>
            </svg>
        </div>
    )
}