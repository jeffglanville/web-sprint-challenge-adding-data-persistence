const db = require("../data/config")

function find() {
    return db("tasks as t")
}

function findById(tasksId) {
    return db("tasks")
    .where("tasksId", tasksId)
    .first()
}

module.exports = {
    find,
    findById
}