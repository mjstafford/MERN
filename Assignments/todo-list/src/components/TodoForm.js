import { useState } from 'react'

const TodoForm = (props) => {
    const [todoData, setTodoData] = useState({ text: "", completed: false })

    const handleSubmit = (event) => {
        event.preventDefault()
        props.addTodo(todoData)
        setTodoData({ text: "", completed: false })
    }

    const handleFormChange = (event) => {
        setTodoData({
            ...todoData,
            [event.target.name]: event.target.value
        });
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    <input type="text" onChange={handleFormChange} name="text" value={todoData.text} />
                </label>

                <input type="Submit" value="Add" />
            </form>
        </div>
    )
}

export default TodoForm