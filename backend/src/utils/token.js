const jwt = require('jsonwebtoken')

module.exports.crearToken = (data) => {
    return jwt.sign(data, "JWT password")
}