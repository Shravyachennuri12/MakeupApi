import React from "react";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <section className="d-flex justify-content-between align-items-center bg-dark text-white p-3 shadow">
      <div className="ms-3">
        <h1 className="display-4">Makeup Products</h1>
      </div>
      <div>
        <ul className="nav">
          <li className="nav-item">
            <Link to='/' className="nav-link text-white">Home</Link>
          </li>
          <li className="nav-item">
            <Link to='/products' className="nav-link text-white">Products</Link>
          </li>
          <li className="nav-item">
            <Link to='/login' className="nav-link text-white">Login</Link>
          </li>
          <li className="nav-item">
            <Link to='/signup' className="nav-link text-white">Sign Up</Link>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Header;
