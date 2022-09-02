import { useState } from 'react'

const Form = props => {
    //state
    const [color, setColor] = useState("")
    const [width, setWidth] = useState(50)

    //onSubmit Handler
    const submitHandler = (e) => {
        e.preventDefault()
        //send to parent via function?
        console.log(color)
        props.addBox(color, width)
        //reset color state
        setColor("")
    }

    //colorChangeHandler
    const colorChangeHandler = (e) => {
        setColor(e.target.value)
    }

    //widthChangeHandler
    const widthChangeHandler = (e) => {
        setWidth(e.target.value)
    }

    return (
        <form onSubmit={(e) => submitHandler(e)}>
            <div>
                <label>Color:
                    <input type="text" onChange={colorChangeHandler} value={color} />
                </label>
            </div>
            <div>
                <label>Width of Square:
                    <input type="text" onChange={widthChangeHandler} value={width} />
                </label>
            </div>
            <input type="submit" value="Add" />
        </form>
    )
}

export default Form