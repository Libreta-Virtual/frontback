const {servicio, servicioID, crearServicio, updateServicio, deleteServicio} = require('../models/servicios')

module.exports.servicioController = async (req,res) => {
    try {
        const service = await servicio()
        return res.send(service)
    } catch(err) {
       
        return res.send(err)
    }
}

module.exports.servicioIdController = async(req,res) => {
    const {id} = req.params
    try {
        const service = await servicioID(id)
        return res.send(service)
    } catch(err) {
        return res.send(err)
    }
}

module.exports.createServicioController= async(req,res) => {
    const {hora, tren , socio, locomotora, vehiculos} = req.body
    try {
        const service = await crearServicio(hora, tren, socio, locomotora, vehiculos)
        return res.send(service)
    } catch(err) {
        return res.send(err)
    }
}

module.exports.updateServicioController = async(req,res) => {
    const {id} = req.params
    const {hora, tren, socio, locomotora, vehiculos} = req.body
    try {
        const service = await updateServicio(id, hora, tren, socio, locomotora, vehiculos)
        return res.send(service)
    } catch(err) {
        return res.send(err)
    }
}

module.exports.deleteServicioController = async(req,res) => {
    const {id} = req.params
    try {
        const service = await deleteServicio(id)
        return res.send(service)
    } catch(err) {
        return res.send(err)
    }
}