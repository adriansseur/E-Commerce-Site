import React from "react"
import "../styles/AmountSelector.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons'
import { faCircleMinus } from '@fortawesome/free-solid-svg-icons'

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
            <FontAwesomeIcon className="sign" icon={faCircleMinus} onClick={() =>
                {
                    const identifier = "minus"
                    handleSelectorClick(product.itemNumber, desiredAmount, identifier)}
                } />
            <div className="number-container">{product[desiredAmount]}</div>
            <FontAwesomeIcon className="sign" icon={faCirclePlus} onClick={() =>
                {
                    const identifier = "plus"
                    handleSelectorClick(product.itemNumber, desiredAmount, identifier)}
                } />
        </div>
    )
}