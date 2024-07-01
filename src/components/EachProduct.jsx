
import React from "react";
import { Link } from 'react-router-dom';
import './EachProduct.css';

const EachProduct = ({ product }) => {
    const { id, image_link, category, price, name } = product;

    return (
        <div className="product">
            <img src={image_link} height='250px' alt={name} />
            <h6>{name}</h6>
            <h6>{category}</h6>
            <p>Price: ${price}</p>
            <Link 
                to={{
                    pathname: `/product/${id}`, 
                    state: { product } // Pass the product object as state
                }} 
                className="view-more"
            >
                View more
            </Link>
        </div>
    );
}

export default EachProduct;
