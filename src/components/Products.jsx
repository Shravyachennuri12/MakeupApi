import React from "react";
import EachProduct from "./EachProduct";

const Products=(props)=>{
    const {allProducts}=props;


    const eachproductInfo=allProducts.map((product, index)=><EachProduct key={index} product={product} />)

    return(
        <div>
            <h1>Products</h1>
            <div className="card ">
                {eachproductInfo}
            </div>

        </div>
    )
}
export default Products;