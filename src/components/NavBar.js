import React from 'react'
import { Link, Outlet} from "react-router-dom"
import { useNavigate } from 'react-router-dom'

export default function NavBar() {
  const navigate = useNavigate()
  function navigateToContacts(){
    navigate("#contacts")
  }
  return (
    <div className='header'>
        <Link to="/" className="logo">GADGET CENTRE</Link>
        <div className="header-right">
          <Link className="active" to="/">Home</Link>
          <Link to="products">Products</Link>
          <Link onClick={navigateToContacts}>Contacts</Link>
        </div>
        <Outlet/>
    </div>
  )
}
