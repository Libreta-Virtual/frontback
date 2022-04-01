const express = require('express')
const router = express.Router()


const { servicioIdController, servicioController, createServicioController, updateServicioController, deleteServicioController } = require('../controllers/servicios.controllers')

router.get("/", servicioController)
router.get("/:id", servicioIdController)
router.post("/create", createServicioController)
router.put("/actualizar/:id", updateServicioController)
router.delete("/:id", deleteServicioController)

module.exports = router