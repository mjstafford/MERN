import React, { useEffect, useState } from 'react';
import axios from 'axios';

import ProductForm from '../components/ProductForm';
import ProductsList from '../components/ProductsList';

export default (props) => {
    const [products, setProducts] = useState([])
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
            .then(res => {
                setProducts(res.data)
                setLoaded(true)
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <div>
            <h1>Project Manager</h1>
            <ProductForm />
            <hr />
            {loaded && <ProductsList products={products} />}
        </div>
    )
}
