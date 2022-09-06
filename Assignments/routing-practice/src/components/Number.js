import React from 'react'
import { useParams } from 'react-router'

const Number = (props) => {
    const { num } = useParams()
    return (
        <h1>{!isNaN(num) ? num : "Not a number!"}</h1>
    )
}

export default Number