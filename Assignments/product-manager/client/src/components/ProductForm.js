import React, { useState } from 'react'
import axios from 'axios';

const ProductForm = (props) => {
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
            .then(res => {
                props.addToDom(res.data)
                console.log(res)
            })
            .catch(err => console.log(err))
            .finally(() => {
                setTitle("")
                setPrice(0)
                setDescription("")
            })
    }

    return (
        <form onSubmit={submitHandler}>
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

            <input type="submit" value="Create" />
        </form>
    )
}


export default ProductForm