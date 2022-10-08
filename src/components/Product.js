import React from 'react'

export default function Product({product}) {
    function handleProductClick(e){
        e.preventDefault()
        alert(product.description)
    }
    return (
        <div className='column' onClick={handleProductClick}>
            <img src={product.image} alt="product" />
            <p>{product.title}</p>
            <p>Kshs. {product.price}</p>
        </div> 
    )
}
