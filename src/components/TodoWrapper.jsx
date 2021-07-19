import react, {useState} from 'react'
import Form from './Form'
import Todo from './Todo'


const TodoWrapper = props => {

    const [list, setList] = useState([])

    const handleDelete = idx => {
        const filteredList = list.filter((todo, i) => i != idx)
        setList(filteredList)
    }

    return(
        <fieldset>
            <legend>TodoWrapper.jsx</legend>
            < Form list={list} setList={setList}/>
            {
                list.map((todo, i) => <Todo key ={i} index={i} todo={todo} handleDelete={handleDelete} />)
            }
        </fieldset>
    )
}

export default TodoWrapper