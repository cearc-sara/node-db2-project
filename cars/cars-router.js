const express = require("express")

const cars = require("./carsDb")

const router = express.Router()


router.get("/", (req, res) => {
    cars.get()
    .then(cars => {
        res.status(200).json({ data: cars })
    })
    .catch(err => {
        res.status(500).json({ error: err.message })
    })
})

router.post("/", (req, res) => {
    cars.insert(req.body)
    .then(cars => {
        res.status(201).json({ data: cars })
    })
    .catch(err => {
        res.status(500).json({ error: err.message })
    })
})

module.exports = router