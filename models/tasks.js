const db = require("../data/config")

function find() {
    return db("tasks as t")
}

function findById(tasksId) {
    return db("tasks")
    .join("projects as p", "p.projectsId", "p.tasks_id")
    .where("p.projectsId", projectsId)
    .select(
        "p.projectsId a ProjectsId",
        "p.projectsName as Project",
        "p.description as Description",
        "t.tasksName as Task"
    )
    // .where("tasksId", tasksId)
    // .first()
}

module.exports = {
    find,
    findById
}