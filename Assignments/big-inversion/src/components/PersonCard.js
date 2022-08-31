//functional Component version!
import React from "react"

let PersonCard = props => {
    //destructure incoming props (from App.js where they are initialized)
    const { firstName, lastName, age, hairColor } = props

    return (
        <div>
            <h1> {lastName}, {firstName}</h1>
            <p id={"age-" + firstName} >Age: {age}</p>
            <p>Hair Color: {hairColor}</p>
            {/* <input type="button" value="Happy Birthday!" onClick={this.birthday} /> */}
        </div >
    )
}

export default PersonCard