const db = require("../data/config")

function find() {
    return db("tasks as t")
    .join("projects as p", "p.projectsId", "t.projects_id")
    .select("t.tasksId", "t.name as Task", "p.name as Project")
}

function findById(tasksId) {
    return db("tasks as t")
    .where("t.tasksId", tasksId)
    .join("projects as p", "p.projectsId", "t.projects_id")
    .select("t.tasksId", "t.name as Task", "p.name as Project")
}

module.exports = {
    find,
    findById
}