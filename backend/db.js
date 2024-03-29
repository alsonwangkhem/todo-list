const mongoose = require("mongoose");


mongoose.connect("mongodb+srv://alsonwangkhem20092:zuEYgQSXmzrMp6pU@cluster0.h1qcgtw.mongodb.net/todo")
const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo
}