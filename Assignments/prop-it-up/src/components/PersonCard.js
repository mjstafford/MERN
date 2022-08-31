import React, { Component } from "react"

class PersonCard extends Component {
    //add a constructor to store the state
    constructor(props) {
        super(props)

        //props will always be the same (forever!)
        //BUT if you want something from props to change then put it into state
        //AND reference the property in state instead of property in props
        this.state = {
            age: this.props.age
        }
    }

    //add a function to change the state of age
    birthday = () => {
        this.setState({ age: this.state.age + 1 })
        // document.querySelector(`#age-${this.props.firstName}`).textContent = `Age: ${this.state.age}`
    }

    //render the code
    render() {
        //destructure in the render
        const { firstName, lastName, hairColor } = this.props
        const { age } = this.state      //age must come from state. If it was coming from props it would never change

        //return jsx
        return (
            <div>
                <h1> {lastName}, {firstName}</h1>
                <p id={"age-" + firstName} >Age: {age}</p>
                <p>Hair Color: {hairColor}</p>
                <input type="button" value="Happy Birthday!" onClick={this.birthday} />
            </div >
        )
    }
}

export default PersonCard