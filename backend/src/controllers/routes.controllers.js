const { usuario, usuarioID, createUsuario, usuarioDniPassword, updateUsuario, deleteUsuario } = require('../models/usuario')
const {contarMsCookie} = require('../utils/time')
const {crearToken} = require('../utils/token')

module.exports.usuarioController = async (req,res) => {
    try {
        const user = await usuario()
        return res.send(user)
    } catch(err) {
       
        return res.send(err)
    }
}

module.exports.usuarioIdController = async(req,res) => {
    const {id} = req.params
    try {
        const user = await usuarioID(id)
        return res.send(user)
    } catch(err) {
        return res.send(err)
    }
}

module.exports.createUsuarioController= async(req,res) => {
    const {nombre, apellido, dni, base, password} = req.body
    try {
        const user = await createUsuario(nombre, apellido, dni, base, password)
        return res.send(user)
    } catch(err) {
        return res.send(err)
    }
}

module.exports.usuarioDniPasswordController = async(req,res) => {
    const {dni, password} = req.body
    try {
        const user = await usuarioDniPassword(dni, password)
        if(usuario.message) {
            res.cookie("session", crearToken(user), {
                maxTime: contarMsCookie(10)
            })
        }
        
       return res.send(user)
    } catch(err) {
        return res.send(err)
    }
}


module.exports.updateUsuarioController = async(req,res) => {
    const {id} = req.params
    const {nombre, apellido, dni, edad, base, password} = req.body
    try {
        const user = await updateUsuario(id, nombre, apellido, dni, edad, base, password)
        return res.send(user)
    } catch(err) {
        return res.send(err)
    }
}

module.exports.deleteUsuarioController = async(req,res) => {
    const {id} = req.params
    try {
        const user = await deleteUsuario(id)
        return res.send(user)
    } catch(err) {
        return res.send(err)
    }
}