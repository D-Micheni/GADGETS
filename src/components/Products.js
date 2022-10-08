import React, { useEffect, useState } from 'react'
import Product from './Product'
import Contact from "./Contact"

export default function Products() {

  const [products, setProducts] = useState([])
    useEffect(() => {
        fetch("https://my-json-server.typicode.com/D-Micheni/jsonapi/electronic")
        .then((res) => res.json())
        .then((data) => setProducts(data))
    }, [])

    return (
      <div id="display">
          <div id="products">
            <h2 style={{textAlign: "center"}}>Featured Products</h2>
            <p style={{textAlign: "center"}}>Click on the Product to View Specs</p>
          </div>
          {/* The grid: three columns */}
          <div className="row1">
            <div className="row" id="row" style={{display: "block"}}>
              {products.map((product) => 
                <Product key={product.id} product={product}/>
              )}
            </div>
          </div>
          <Contact/>
      </div>
    )
}
