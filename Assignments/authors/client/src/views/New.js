import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import AuthorForm from '../components/AuthorForm'

export default (props) => {
    const [author, setAuthors] = useState([])
    const [loaded, setLoaded] = useState(false)

    return (
        <div>
            <h1>Favorite Authors</h1>
            <hr />
            <Link to={'/authors'}>Home</Link>
            <h3>Add a new Author:</h3>
            <AuthorForm />
        </div>
    )
}
