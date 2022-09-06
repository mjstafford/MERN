import React from 'react'

const Person = (props) => {
    return (
        <div>
            <h2>Name: {props.person.name}</h2>
            <h3>Height: {props.person.height} cm</h3>
            <h3>Mass: {props.person.mass} kg</h3>
            <h3>Hair Color: {props.person.hair_color}</h3>
            <h3>Eye Color: {props.person.eye_color}</h3>
        </div >
    )
}

export default Person