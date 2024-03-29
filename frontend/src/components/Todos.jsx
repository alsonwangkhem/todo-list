
export function Todos({todos, markCompletion}) {
    return <div className="max-w-4xl mx-auto py-8">
        {todos.map(function(todo, index) {
            return <div className="bg-white shadow-md rounded-lg p-6 mb-4" key={index}>
                <h1 className="text-xl font-bold text-gray-800">{todo.title}</h1>
                <h2 className="text-md text-gray-600">{todo.description}</h2>
                <button className={`mt-4 px-4 py-2 rounded text-white font-semibold ${todo.completed ? "bg-green-500" : "bg-blue-500 hover:bg-blue-600"}`} onClick={() => markCompletion(todo._id)}>{todo.completed ? "Completed" : "Mark as Complete"}</button>
            </div>
        })}
    </div>
}