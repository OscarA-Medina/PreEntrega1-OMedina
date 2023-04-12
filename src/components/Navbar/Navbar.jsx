import React from "react";
import "./Navbar.css";
import { CartWidget } from "../CartWidget/CartWidget";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid position-relative">
    <NavLink className="navbar-brand" to="/" >La Tienda del Café</NavLink>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink className="menu-item nav-link active" aria-current="page" to="/categoria/economy">Productos Economy</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="menu-item nav-link active" aria-current="page" to="/categoria/premium">Productos Premium</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="menu-item nav-link active " to="/cart"> <CartWidget /> </NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
  );
}

export default Navbar;