import react, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Todo = props => {

    const { index, todo, handleDelete, handleChange } = props
    console.log(todo)

    const style = {
        "textDecoration": "line-through"
    }

    return (
        <div class="m-3">
            {
                (todo.isComplete) ? <h3 style={style}>Thing {index}: {todo.thing}</h3> : <h3 class="text-info"> Thing {index +1}: {todo.thing} </h3>
            }
            <h3 class="text-muted">Do by: {todo.date} </h3>
            <div class="form-check form-switch">
                <input class="form-check-input" id="flexSwitchCheckDefault" type="checkbox" checked={todo.isComplete} onChange={() => handleChange(index)} />
            </div>
            <button class="btn btn-danger" onClick={() => handleDelete(index)}>Delete</button>
        </div>
    )
}

export default Todo