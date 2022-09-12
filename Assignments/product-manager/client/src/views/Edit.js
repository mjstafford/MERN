import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, useNavigate } from "react-router-dom";

const Update = (props) => {
    const { id } = useParams();
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState(0)
    const [description, setDescription] = useState("")

    let navigate = useNavigate()

    //GET the data for the right product
    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(res => {
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDescription(res.data.description);
            })
    }, []);

    //update the product PUT
    const updateProduct = e => {
        e.preventDefault();
        //update fetch
        axios.put(`http://localhost:8000/api/products/${id}/edit`, {
            title,
            price,
            description
        })
            .then(res => {
                navigate(`/products/${id}`)
                console.log(res)
            })
            .catch(err => console.error(err));
    }

    return (
        <div>
            <h1>Update Product</h1>
            <form onSubmit={updateProduct}>
                <div>
                    <label htmlFor='title'>Title</label>
                    <input type="text" onChange={(e) => setTitle(e.target.value)} value={title} id="title" />
                </div>

                <div>
                    <label htmlFor='price'>Price</label>
                    <input type="number" step=".01" onChange={(e) => setPrice(e.target.value)} value={price} id="price" />
                </div>

                <div>
                    <label htmlFor='description'>Description</label>
                    <input type="text" onChange={(e) => setDescription(e.target.value)} value={description} id='description' />
                </div>

                <input type="submit" value="update" />
            </form>
        </div>
    )
}

export default Update;

