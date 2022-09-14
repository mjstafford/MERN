import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import axios from "axios"

const AuthorForm = (props) => {
    const [name, setName] = useState("")
    const [errors, setErrors] = useState(null)

    const navigate = useNavigate()

    const submitHandler = (e) => {
        e.preventDefault()
        //save and redirect
        axios.post('http://localhost:8000/api/authors/new', {
            name
        })
            .then(res => {
                console.log(res)
                navigate("/authors")
            })
            .catch(err => {
                console.log(err)
                // const errorResponse = err.response.data.errors
                // const errorArray = []
                // for (const key of Object.keys(errorResponse)) {
                //     errorArray.push(errorResponse[key].message)
                // }
                // setErrors(errorArray)

                setErrors(err?.response?.data?.errors)
                //this method if plan to show errors next to their fields vs 
                //just a big error field of all errors at the top of form
            })
    }

    const handleCancel = (e) => {
        e.preventDefault()
        navigate("/authors")
    }

    return (
        <form onSubmit={submitHandler}>
            {/* below is the method to show erros as one main section at top of form*/}
            {/* {errors.map((err, index) => <p key={index}>{err}</p>)} */}

            {errors?.name && (<span style={{ color: 'red' }}> {errors?.name?.message}</span>)}
            {/* `?.` allows you to safely access keys that may not exist, instead of crashing*/}
            {/* above is the method to show erros per each field*/}

            <label htmlFor='name'>Name:
                <input className="form-control" type="text" id="name" onChange={e => setName(e.target.value)} value={name} />
            </label>
            <div>
                <button className="btn btn-secondary" onClick={handleCancel}>Cancel</button>
                <input className="btn btn-success" type="submit" value="Submit" />
            </div>
        </form>
    )
}

export default AuthorForm