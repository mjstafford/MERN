import React from "react";
import { Link } from 'react-router-dom';
import axios from "axios";

const ProductsList = (props) => {
    const { removeFromDom } = props

    const deleteHandler = (id) => {
        //update fetch
        axios.delete(`http://localhost:8000/api/products/${id}/delete`)
            .then(res => {
                removeFromDom(id)
                console.log(res)
            })
            .catch(err => console.error(err));
    }

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
                            <button className='delete-button' onClick={(e) => deleteHandler(product._id)}>
                                DELETE
                            </button>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default ProductsList