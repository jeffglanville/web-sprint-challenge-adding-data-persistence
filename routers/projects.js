const express = require("express")
// const Project = require("../models/projects")

const router = express.Router()

router.get("/projects", async (req, res, next) => {
    try{
        const projects = await projects.find()
        res.json(projects)
    }catch(err) {
        next(err)
    }
})