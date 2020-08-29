const db = require("../data/config")

function find() {
    return db("resources as r")
    .join("projects as p", "p.projectsID", "r.projects_id")
    .select("r.resourcesId", "p.name as Project")
}

function findById(resourcesId) {
    return db("resources as r")
    .where("r.resourcesId", resourcesId)
    .join("projects as p", "r.resourcesId", "r.projects_id")
    .select("r.resourcesId", "r.name as Resource", "p.projectName as Projects")
}

module.exports = {
    find,
    findById
}