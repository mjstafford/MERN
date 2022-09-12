import React, { useEffect, useState } from 'react'
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from 'axios';

const Detail = (props) => {
    const [product, setProduct] = useState({})
    //from path "/api/products/:id"
    const { id } = useParams();

    let navigate = useNavigate()

    useEffect(() => {
        //where id is the long id (something like '631d18610ed739e32cda9dc2')
        //This could be moved to a service folder
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(res => {
                console.log(res.data)
                setProduct(res.data)

            })
            .catch(err => console.error(err));
    }, []);

    //update the product PUT
    const deleteHandler = e => {
        e.preventDefault();
        //update fetch
        axios.delete(`http://localhost:8000/api/products/${id}/delete`)
            .then(res => {
                navigate(`/products`)
                console.log(res)
            })
            .catch(err => console.error(err));
    }


    return (
        <div id="detail-container">
            <h1>{product.title}</h1>
            <p><b>Description: </b>{product.description}</p>
            <p><b>Price: </b>${product.price}</p>
            <button className='edit-button'>
                <Link to={`/products/${id}/edit`}>Edit</Link>
            </button>
            <button className='delete-button' onClick={deleteHandler}>
                <Link to={`/products/${id}/delete`}>Delete</Link>
            </button>
        </div>
    )
}

export default Detail;

