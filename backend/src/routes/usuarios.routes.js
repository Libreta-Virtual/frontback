const express = require('express')
const router = express.Router()

const { usuarioController, usuarioIdController, createUsuarioController, updateUsuarioController, deleteUsuarioController, usuarioDniPasswordController} = require('../controllers/routes.controllers')

router.get("/", usuarioController)
router.get("/:id", usuarioIdController)
router.post("/crear", createUsuarioController)
router.post("/", usuarioDniPasswordController)
router.put("/actualizar/:id", updateUsuarioController)
router.delete("/:id", deleteUsuarioController)

module.exports = router