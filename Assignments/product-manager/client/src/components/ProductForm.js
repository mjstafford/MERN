import React, { useState } from 'react'
import axios from 'axios';

const ProductForm = () => {
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState(0)
    const [description, setDescription] = useState("")

    const submitHandler = (event) => {
        event.preventDefault()

        console.log("...attempting to POST new product")
        axios.post('http://localhost:8000/api/products/new', {
            title,
            price,
            description
        })
            .then(res => console.log(res))
            .catch(err => console.log(err))
            .finally(() => {
                setTitle("")
                setPrice(0)
                setDescription("")
            })
    }

    return (
        <form onSubmit={submitHandler}>
            <p>
                <label>Title
                    <input type="text" onChange={(e) => setTitle(e.target.value)} value={title} />
                </label>
            </p>
            <p>
                <label>Price
                    <input type="number" step=".01" onChange={(e) => setPrice(e.target.value)} value={price} />
                </label>
            </p>
            <p>
                <label>Description
                    <input type="text" onChange={(e) => setDescription(e.target.value)} value={description} />
                </label>
            </p>

            <input type="submit" value="Create" />
        </form>
    )
}


export default ProductForm