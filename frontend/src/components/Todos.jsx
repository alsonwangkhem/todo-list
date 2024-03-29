
export function Todos({todos, markCompletion}) {
    return <div>
        {todos.map(function(todo, index) {
            return <div key={index}>
                <h1>{todo.title}</h1>
                <h2>{todo.description}</h2>
                <button onClick={() => markCompletion(todo._id)}>{todo.completed ? "Completed" : "Mark as Complete"}</button>
            </div>
        })}
    </div>
}