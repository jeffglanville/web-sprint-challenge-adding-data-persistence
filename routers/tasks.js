const express = require("express")
const db = require("../data/config")
const Task = require("../models/tasks")

const router = express.Router()

router.get("/tasks", async (req, res, next) => {
	try {
		const tasks = await Task.find()
		res.json(tasks)
	} catch(err) {
		next(err)
	}
})

router.get("/tasks/:id", async (req, res, next) => {
	try {
		const task = await Task.findById(req.params.id)
		if (!task) {
			return res.status(404).json({
				message: "Species not found",
			})
		}

		res.json(task)
	} catch(err) {
		next(err)
	}
})

router.post("/tasks", async (req, res, next) => {
	try{
		const [tasksId] = await db("tasks").insert(req.body)
		const task = await db("tasks").where({ tasksId }).first()

		res.status(200).json(task)
	}catch(err) {
		next(err)
	}
})

module.exports = router