import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import axios from 'axios';

const Detail = (props) => {
    const [product, setProduct] = useState({})
    //from path "/api/products/:id"
    const { id } = useParams();

    useEffect(() => {
        //where id is the long id (something like '631d18610ed739e32cda9dc2')
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(res => {
                console.log(res.data)
                setProduct(res.data)

            })
            .catch(err => console.error(err));
    }, []);

    return (
        <div id="detail-container">
            <h1>{product.title}</h1>
            <p><b>Description: </b>{product.description}</p>
            <p><b>Price: </b>${product.price}</p>
        </div>
    )
}

export default Detail;

