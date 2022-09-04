const OneTodo = (props) => {
    const handleToggle = () => {
        props.toggleCompleteTodo(props.index)
    }

    const onSubmitHandler = (event) => {
        event.preventDefault()
        props.removeTodo(props.index);
    }

    return (
        <div>
            <form onSubmit={onSubmitHandler}>
                <label className={props.todo.completed ? 'strike' : ""}>{props.todo.text}
                    <input type="checkbox" checked={props.todo.completed} onChange={handleToggle} />
                </label>
                <input type="submit" value="delete" />
            </form>
        </div>
    )
}

export default OneTodo