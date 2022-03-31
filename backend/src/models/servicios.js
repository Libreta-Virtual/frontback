const { password } = require('../config/db.config')
const {db} = require('../controllers/database.controller')

module.exports.servicios = async () => {
    const data = await db("SELECT * FROM servicios;")
    console.log(data)
    return {
        servicio: data
    }
} 

module.exports.serviciosID = async (id) => {
    const data = await db(`SELECT * FROM servicios WHERE id = ${id}`)
    console.log(data)
    return {
        servicio: data[0]
    }
} 

module.exports.crearServicio = async (hora, tren, socio, locomotora, vehiculos) => {
    const data = await db(`INSERT INTO servicios(hora, tren, socio, locomotora, vehiculos) VALUES (${hora}, ${tren}, "${socio}", ${locomotora}, ${vehiculos})`)

    return {
        servicio: `Servicio creado con id ${data.id}`
    }
} 

module.exports.updateServicio = async (hora, tren, socio, locomotora, vehiculos) => {
    const data = await db(`UPDATE servicios SET hora = ${hora}, tren = ${tren}, socio = "${socio}", locomotora = ${locomotora}, vehiculos = ${vehiculos}`)

    return {
        message: `Servicio actualizado con id ${data.id}`
    }
} 

module.exports.deleteServicio = async (id) => {
    const data = await db(`DELETE FROM servicios WHERE id = ${id}`)
    return {
        message: `Servicio eliminado con id ${data.id}`
    }  
}