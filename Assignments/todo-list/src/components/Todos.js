import { useState } from 'react'

import TodoForm from './TodoForm.js'
import OneTodo from './OneTodo.js'

const Todos = (props) => {
    const [allTodos, setAllTodos] = useState([])

    const addTodo = (todoData) => {
        setAllTodos([
            ...allTodos,
            todoData
        ])
    }

    const toggleCompleteTodo = (index) => {
        //Also could have done a map function and only toggle the completed state of the given index
        //probably would have been the best way!
        let newTodo = {
            ...allTodos[index],
            completed: !allTodos[index].completed
        }
        // debugger
        setAllTodos([
            ...allTodos.slice(0, index),
            newTodo,
            ...allTodos.slice(index + 1)
        ])

    }

    const removeTodo = (index) => {
        //first try
        // setAllTodos([
        //     ...allTodos.slice(0, index),
        //     ...allTodos.slice(index + 1)
        // ])

        //second try using filter
        let newList = allTodos.filter((todo, i) => i != index)
        setAllTodos([
            ...newList
        ])
    }

    return (
        <div>
            <h1>React Todo List</h1>
            <TodoForm addTodo={addTodo} />

            {
                allTodos.map((todo, i) => {
                    return <OneTodo
                        todo={todo}
                        key={i}
                        toggleCompleteTodo={toggleCompleteTodo}
                        removeTodo={removeTodo}
                        index={i}
                    />
                })
            }

        </div>
    )
}

export default Todos