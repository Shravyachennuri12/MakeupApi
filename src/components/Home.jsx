import React from "react";
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';



const Home = () => {
    return (
        <div className="container text-center my-5 py-5">
            <h1 className="display-4 mb-4">Welcome to the Makeup Store</h1>
            <p className="lead mb-4">Your one-stop shop for all makeup needs.</p>
            <p className="mb-4">
                Discover our wide range of products from top brands. Whether you are looking for the perfect foundation, a stunning lipstick, or the latest eyeshadow palette, we have got you covered.
            </p>
            <Link to="/products" className="btn btn-primary btn-lg">Shop Now</Link>
        </div>
    );
}

export default Home;
