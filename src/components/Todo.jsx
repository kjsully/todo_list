import react, {useState} from 'react'

const Todo = props => {

    const {index, todo, handleDelete} = props
    console.log(todo)

    return(
        <div>
            <h3>{todo.title}</h3>
            <button onClick={() => handleDelete(index)}>Delete</button>
        </div>
    )
}

export default Todo