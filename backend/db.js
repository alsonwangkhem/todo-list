const mongoose = require("mongoose");

const dbConnectionString = process.env.DB_CONNECTION_STRING;

mongoose.connect(dbConnectionString)
const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo
}