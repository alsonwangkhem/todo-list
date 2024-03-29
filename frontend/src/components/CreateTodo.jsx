import { useState } from "react";

export function CreateTodo(props) {
    // react-query
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    return <div>
        <input id="title" style={{
            padding: 10,
            margin: 10
        }} type="text" placeholder="title" value={title} onChange={function(e) {
            setTitle(e.target.value);
        }}></input> <br />
    
        <input id="desc" style={{
            padding: 10,
            margin: 10
        }} type="text" placeholder="description" value={description} onChange={function(e) {
            setDescription(e.target.value);
        }}></input> <br />

        <button style={{
            padding: 10,
            margin: 10
        }} onClick={() => {
            props.addTodo(title, description);
            setTitle("");
            setDescription("");
        }}>Add a todo</button>
    </div>
}

