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
    .join("projects as p", "p.projectsId", "r.projects_id")
    .where("p.projectsId", projectsId)
    .select(
        "p.projectsId",
        "p.projectsName as Project",
        "r.resourcesName as Resource",
    )
}

// function findTasks(projectsId) {
//     return db("projects_tasks as pt")
//     .join("projects as p", "p.projectsId", "p.tasks_id")
//     .where("p.projectsId", projectsId)
//     .select(
//         "p.projectsId",
//         "p.projectsName as Project",
//         "t.tasksName as Task"
//     )
// }

module.exports = {
    find,
    findById,
    findResources
}