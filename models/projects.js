const db = require("../data/config")

function find() {
    return db("projects")
}

function findById(id) {
    return db("projects")
    .where("id", id)
    .first()
}

function findResources(projectsId) {
    return db("projects_resources as pr")
    .join("projects as p", "p.projectsId")
    .join("resources as r", "r.resourcesId")
    .where("p.projectsId", projectsId)
    .select(
        "p.projectsId",
        "p.projectsName as Project",
        "r.resourcesName as Resource",
        "t.tasksName as Task"
    )
}

function findTasks(projectsId) {
    return db("projects_tasks as pt")
    .join("projects as p", "p.projectsId")
    .join("resources as r", "r.resourcesId")
    .join("tasks as t", "t.tasksId")
    .where("p.projectsId", projectsId)
    .select(
        "p.projectsId",
        "p.projectsName as Project",
        "r.resourcesName as Resource",
        "t.tasksName as Task"
    )
}

module.exports = {
    find,
    findById,
    findResources,
    findTasks
}