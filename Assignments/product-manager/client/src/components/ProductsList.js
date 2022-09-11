import React from "react";
import { Link } from 'react-router-dom';
import axios from "axios";

const ProductsList = (props) => {
    return (
        <div id="products-div">
            <h2>All Products:</h2>
            {
                props.products.map((product, i) => {
                    return (
                        <div className="product-link" key={i} style={{ backgroundColor: "purple", color: "white" }}>
                            <Link to={`/products/${product._id}`}>
                                {product.title}
                            </Link>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default ProductsList