import React, { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import axios from 'axios';
import './ProductionInfo.css';

const ProductInfo = () => {
    const { id } = useParams();  
    const [product, setProduct] = useState(null);
    const location = useLocation();

    useEffect(() => {
        const getProductInfo = async () => {
            try {
                const response = await axios.get(`http://makeup-api.herokuapp.com/api/v1/products/${id}.json`);
                setProduct(response.data);
            } catch (error) {
                console.log('Error fetching product:', error);
            }
        };

        getProductInfo();
    }, [id, location]);

    const handleAddToCart = () => {
        
        console.log(`Product added to cart: ${product.name}`);
    };

    const handleBuyNow = () => {
        
        console.log(`Product purchased: ${product.name}`);
    };

    if (!product) {
        return <div>Loading...</div>;  
    }

    const { image_link, category, price, name, description, rating } = product;

    return (
        <div className=" product-info">
            <img src={image_link} alt={name} height="250px" />
            <h4>{name}</h4>
            <h6>Category: {category}</h6>
            <p>Price: ${price}</p>
            <p>Description: {description}</p>
           {rating && <p>Rating: {rating}</p>}
            
            <div>
                <button className="btn btn-warning" onClick={handleAddToCart}>Add to Cart</button>
                <button className="btn btn-info ms-3" onClick={handleBuyNow}>Buy Now</button>
            </div>
        </div>
    );
};

export default ProductInfo;

