import React from 'react'
import "./product.css"

export default function Products () {
    return (
        <div className='products'>
            <div className="heading_products">
                <p> Got questions?</p>
                <p> We've got answers</p>
            </div>
            <div className='productBtn'>
                <button className='product_btn'>
                   Our products
                </button>
                <button className='product_btn'>
                   Calculators
                </button>
                <button className='product_btn'>
                  Guides & FAQs
                </button>
            </div>
        </div>
    )
}
