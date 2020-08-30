const db = require("../data/config")

function find() {
    return db("tasks as t")
    .join("projects as p", "p.projectsId")
    .select("t.tasksId", "t.description as Task", "p.name as Project")
}

function findById(tasksId) {
    return db("tasks as t")
    .where("t.tasksId", tasksId)
    .join("projects as p", "p.projectsId")
    .select("t.tasksId", "t.description as Task", "p.name as Project")
}

module.exports = {
    find,
    findById
}