import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router'

import axios from 'axios'
import AuthorFormEdit from '../components/AuthorFormEdit'

export default (props) => {
    const [author, setAuthor] = useState([])
    const [loaded, setLoaded] = useState(false)
    const [isWrongId, setIsWrongId] = useState(false)

    const { id } = useParams("id")

    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors/${id}`)
            .then(response => {
                // console.log(response.data)
                setAuthor(response.data)
                setLoaded(true) //withouth this the AuthorFormEdit component is added before promise completes
            })
            .catch(err => {
                console.log(err)
                setIsWrongId(true)
            })
    }, [])

    return (
        <div>
            <h1>Favorite Authors</h1>
            <hr />
            <Link to={'/authors'}>Home</Link>
            <h3>Edit this Author:</h3>
            {loaded && <AuthorFormEdit author={author} />}
            {isWrongId && <h1>No user with that id: {id} <br /> Add user <Link to={'/authors/new'}>Here</Link></h1>}
        </div>
    )
}
