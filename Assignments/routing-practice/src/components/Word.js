import React from 'react'
import { useParams } from 'react-router'

const Word = (props) => {
    const { word, color1, color2 } = useParams()
    console.log(word)
    console.log(color1)
    console.log(color2)
    return (
        <h1 style={{ backgroundColor: color1, color: color2 }}>{word}</h1>
    )
}

export default Word