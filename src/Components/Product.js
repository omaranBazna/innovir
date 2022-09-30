import './Product.css';
import React from 'react'
import ProductLogo from '../graphics/product.svg'

export default function Product(){
    return (
        <div className="product">
            <img src={ProductLogo} className='product-logo' />
            <h1>Title</h1>
            <h2>Describtion</h2>
        </div>
    )
}