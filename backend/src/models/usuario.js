const { password } = require('../config/db.config')
const {db} = require('../controllers/database.controller')

module.exports.usuario = async () => {
    const data = await db("SELECT * FROM usuario;")
    console.log(data)
    return {
        usuario: data
    }
} 

module.exports.usuarioID = async (id) => {
    const data = await db(`SELECT * FROM usuario WHERE id = ${id}`)
    console.log(data)
    return {
        usuario : data[0]
    }  
}

module.exports.createUsuario = async(nombre, apellido, dni, base, password) => {
    const data = await db(`INSERT INTO usuario(nombre, apellido, dni, base, password) VALUES ("${nombre}", "${apellido}", ${dni}, "${base}", "${password}")`)

    return {
        message: `Usuario creado con id ${data.id}`
    }
}

module.exports.usuarioDniPassword = async (dni, password) => {
    const data = await db(`SELECT * FROM usuario WHERE dni = "${dni}"`)

    if(data.lenght !== 0 && comparadorPassword(password, data[0].password)) {
        let {nombre, apellido, dni} = data[0]
        let user = {"nombre" : nombre, "apellido": apellido, "dni": dni}
        return {
            usuario : user,
            message: true
        }
    } else {
        return {
           message: false
        }
    }
}

module.exports.updateUsuario = async(id, nombre, apellido, dni, base, password) => {
    const data = await db(`UPDATE usuario SET nombre = "${nombre}", apellido = "${apellido}", dni = ${dni}, email = ${base}, password = ${password} WHERE id = ${id}`)
    return {
        message: `Usuario actualizado con id ${data.id}`
    }
}

module.exports.deleteUsuario = async (id) => {
    const data = await db(`DELETE FROM usuario WHERE id = ${id}`)
    return {
        message: `Usuario eliminado con id ${data.id}`
    }  
}