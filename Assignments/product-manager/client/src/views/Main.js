import React, { useEffect, useState } from 'react';
import axios from 'axios';

import ProductForm from '../components/ProductForm';
import ProductsList from '../components/ProductsList';

export default (props) => {
    const [products, setProducts] = useState([])
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        //This could be moved to a service folder
        axios.get('http://localhost:8000/api/products')
            .then(res => {
                setProducts(res.data)
                setLoaded(true)
            })
            .catch(err => console.log(err))
    }, [])

    const removeFromDom = productId => {
        setProducts(products.filter(product => product._id != productId));
    }

    // is there a good way to refresh page after new item is added?? TBD
    const addToDom = product => {
        setProducts([...products, product]);
    }


    return (
        <div>
            <h1>Project Manager</h1>
            <ProductForm addToDom={addToDom} />
            <hr />
            {loaded && <ProductsList products={products} removeFromDom={removeFromDom} />}
        </div>
    )
}
