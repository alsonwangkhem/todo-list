import { useState } from "react";

export function CreateTodo(props) {
    // react-query
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    return <div className="p-4 max-w-sm mx-auto bg-white rounded-lg shadow-md">
        <input id="title"  className="w-full p-2 mb-4 text-gray-700 bg-gray-200 rounded border border-gray-300 focus:outline-none focus:border-blue-500" type="text" placeholder="title" value={title} onChange={function(e) {
            setTitle(e.target.value);
        }}></input> <br />
    
        <input id="desc"  className="w-full p-2 mb-4 text-gray-700 bg-gray-200 rounded border border-gray-300 focus:outline-none focus:border-blue-500" type="text" placeholder="description" value={description} onChange={function(e) {
            setDescription(e.target.value);
        }}></input> <br />

        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 focus:outline-none" onClick={() => {
            props.addTodo(title, description);
            setTitle("");
            setDescription("");
        }}>Add a todo</button>
    </div>
}

