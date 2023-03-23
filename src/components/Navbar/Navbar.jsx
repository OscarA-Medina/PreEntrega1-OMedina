import React from "react";
import "./Navbar.css";
import { CartWidget } from "../CartWidget/CartWidget";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid position-relative">
    <a className="navbar-brand" href="#inicio">La Tienda del Café</a>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="menu-item nav-link active" aria-current="page" href="#productos">Productos</a>
        </li>
        <li className="nav-item">
          <a className="menu-item nav-link active" href="#caracteristicas">Características</a>
        </li>
        <li className="nav-item">
          <a className="menu-item nav-link active " href="#carrito"> <CartWidget /> </a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  );
}

export default Navbar;