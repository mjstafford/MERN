import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.css'


const AuthorsList = (props) => {
    const { authors, removeOneAuthor } = props

    const deleteHandler = (e, id) => {
        e.preventDefault()

        //do something to handle delete 
        axios.delete(`http://localhost:8000/api/Authors/${id}/delete`)
            .then(res => console.log(res))
            .catch(err => console.error(err));

        //remove from front end, via passed down function
        removeOneAuthor(id)
    }

    authors.sort((a, b) => {
        const nameA = a.name.toUpperCase(); // ignore upper and lowercase
        const nameB = b.name.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
            return -1;
        }
        if (nameA > nameB) {
            return 1;
        } else {
            // names must be equal
            return 0;
        }
    });

    return (
        <table className='table  table-striped table-hover'>
            <thead>
                <tr>
                    <th>Author</th>
                    <th>Actions Available</th>
                </tr>
            </thead>
            <tbody>
                {
                    authors.map(author => {
                        return (
                            <tr key={author._id}>
                                <td>{author.name}</td>
                                <td>
                                    <Link className="btn btn-primary" to={`/authors/${author._id}/edit`}>Edit</Link>
                                    <button className="btn btn-danger" onClick={(e) => deleteHandler(e, author._id)}>Delete</button>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
}

export default AuthorsList