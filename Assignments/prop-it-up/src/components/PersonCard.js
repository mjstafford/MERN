import React, { Component } from "react"

class PersonCard extends Component {
    render() {
        //destructure 
        const { firstName, lastName, age, hairColor } = this.props

        //return jsx
        return (
            <div>
                <h1> {lastName}, {firstName}</h1>
                <p>Age: {age}</p>
                <p>Hair Color: {hairColor}</p>
            </div>
        )
    }
}

export default PersonCard