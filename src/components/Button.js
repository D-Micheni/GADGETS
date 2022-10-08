import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Button() {
  const navigate = useNavigate()
  function navigateToProducts(){
    navigate("/products")
  }
  return (
    <React.Fragment>
        <div className="center">
            <button onClick={navigateToProducts} id="display">Show Gadgets</button>
        </div>
        <div id="products">
            <h2 style={{textAlign: "center"}}>Featured Products</h2>
            <p style={{textAlign: "center"}}>Click on the Product to View Specs</p>
        </div>
    </React.Fragment>
  )
}
