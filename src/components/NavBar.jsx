import React from 'react'
import { Link } from 'react-router-dom'
const NavBar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid justify-content-between mx-5">
        <Link className="navbar-brand fw-bolder fs-2" to="/">Ecommerce</Link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-between mx-5 align-items-center" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <Link className="nav-link active" aria-current="page" to="#">Home</Link>
            <Link className="nav-link" to="/products">products</Link>
            <Link className="nav-link" to="/about">About</Link>
            <Link className="nav-link" to="/contact">Contact</Link>
          </div>
          <div className="btns-container d-flex justify-content-between  flex-wrap">
            <Link to="/login" className="btn btn-outline-dark m-2"><i class="fa-solid fa-arrow-right-to-bracket me-2"></i><span>Login</span></Link>
            <Link to="/register" className="btn btn-outline-dark m-2"><i class="fa-solid fa-user-plus me-2"></i><span>Register</span></Link>
            <Link to="/cart" className="btn btn-outline-dark m-2"><i class="fa-solid fa-cart-shopping me-2"></i><span>Cart</span></Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar