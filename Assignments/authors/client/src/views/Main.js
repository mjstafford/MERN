import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import AuthorsList from '../components/AuthorsList';

export default (props) => {
    const [authors, setAuthors] = useState([])
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        //can refactor this part into a service
        axios.get("http://localhost:8000/api/authors")
            .then(response => {
                console.log(response.data)
                setAuthors(response.data)
                setLoaded(true)
            })
            .catch(err => console.log(err))
    }, [])

    //removes from front end so that frontend and DB are consistent 
    const removeOneAuthor = (id) => {
        const updatedAuthors = authors.filter(author => {
            return author._id != id
        })
        setAuthors(updatedAuthors)
    }

    return (
        <div className='main-container'>
            <h1>Favorite Authors</h1>
            <hr />
            <Link to={'/authors/new'}>Add an author</Link>
            <h3>We have quotes by:</h3>
            {loaded && <AuthorsList authors={authors} removeOneAuthor={removeOneAuthor} />}
        </div>
    )
}
