import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import axios from "axios"

const AuthorFormEdit = (props) => {
    console.log("here", props)
    const [name, setName] = useState(props.author.name)
    const [errors, setErrors] = useState(null)

    const id = props.author._id
    const navigate = useNavigate()

    const submitHandler = (e) => {
        e.preventDefault()
        axios.put(`http://localhost:8000/api/authors/${id}/edit`, {
            name
        })
            .then(res => {
                console.log(res)
                navigate("/authors")
            })
            .catch(err => {
                console.log(err)

                setErrors(err?.response?.data?.errors)
            })
    }

    const handleCancel = (e) => {
        e.preventDefault()
        navigate("/authors")
    }

    return (
        <form onSubmit={submitHandler} >
            {errors?.name && (<span style={{ color: 'red' }}> {errors?.name?.message}</span>)}
            <label htmlFor='name' className="form-label">Name:
                <input className="form-control" type="text" id="name" onChange={e => setName(e.target.value)} value={name} />
            </label>
            <div>
                <button className="btn btn-secondary" onClick={handleCancel}>Cancel</button>
                <input className="btn btn-success" type="submit" value="update" />
            </div>
        </form>
    )
}

export default AuthorFormEdit