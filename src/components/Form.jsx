import react, { useState } from "react"
import "bootstrap/dist/css/bootstrap.min.css";

const Form = props => {

    const [thingState, setThingState] = useState("");
    const [dateState, setDateState] = useState("");

    const { list, setList } = props

    const handleSubmit = event => {
        event.preventDefault()
        setList([
            ...list,
            {
                "thing": thingState,
                "date": dateState,
                "isComplete": false
            }
        ])

    }

    return (
        <fieldset>
            {/* <legend>Form.jsx</legend> */}
            <form onSubmit={handleSubmit}>
                <h1>THINGS YA GOTTA DO</h1>
                <p>
                    Thing:
                    <input type="text" value={thingState} onChange={e => setThingState(e.target.value)} />
                </p>
                <p>
                    Date:
                    <input type="date" value={dateState} onChange={e => setDateState(e.target.value)} />
                </p>
                <button class="btn btn-primary">Put</button>
            </form>
        </fieldset>
    )
}

export default Form