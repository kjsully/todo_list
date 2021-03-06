import react, { useState } from "react"
import Form from "./Form"
import Todo from "./Todo"
import "bootstrap/dist/css/bootstrap.min.css";


const TodoWrapper = props => {

    const [list, setList] = useState([])

    const handleDelete = idx => {
        const filteredList = list.filter((todo, i) => i != idx)
        setList(filteredList)
    }

    const handleChange = idx => {
        const copy = [...list]
        copy[idx].isComplete = !copy[idx].isComplete
        setList(copy)
    }

    return (
        <fieldset class="text-light">
            {/* <legend>TodoWrapper.jsx</legend> */}
            < Form list={list} setList={setList} />
            {
                list.map((todo, i) => {
                    return <Todo key={i}
                        index={i}
                        todo={todo}
                        handleDelete={handleDelete}
                        handleChange={handleChange}
                    />
                })
            }
        </fieldset>
    )
}

export default TodoWrapper