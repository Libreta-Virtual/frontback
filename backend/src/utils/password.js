const bcrypt = require('bcrypt')

module.exports.hashPassword = (password) => {
    return bcrypt.hashSync(password, 10) //1234 => 1@r2tr3@@4 1rraa@@2r3t4
}

module.exports.comparadorPassword = (passwordComparar, passwordGuardado) => {
    return bcrypt.compareSync(passwordComparar, passwordGuardado)
}
