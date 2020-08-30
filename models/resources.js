const db = require("../data/config")

function find() {
    return db("resources")
}

function findById(resourcesId) {
    return db("resources")
    .where("resourcesId", resourcesId)
    .first()
}

module.exports = {
    find,
    findById
}