const express = require("express")
const Resource = require("../models/resources")

const router = express.Router()

router.get("/resources", async (req, res, next) => {
	try {
		const resources = await Resource.find()
		res.json(resources)
	} catch(err) {
		next(err)
	}
})

router.get("/resources/:id", async (req, res, next) => {
	try {
		const resource = await Resource.findById(req.params.id)
		if (!resource) {
			return res.status(404).json({
				message: "Resource not found",
			})
		}

		res.json(resource)
	} catch(err) {
		next(err)
	}
})

module.exports = router