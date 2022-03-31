const mysql = require('mysql')
const config = require('../config/db.config')

module.exports.db = (query) => new Promise((req,res) => {
    const connection = mysql.createConnection({
        host: process.env.LOCAL ? 'localhost': config.host,
        user: process.env.LOCAL ? 'root': config.user,
        password: process.env.LOCAL ? '': config.password,
        database: process.env.LOCAL ? 'libreta': config.database
    })

    connection.query(query, (error, data, fields) => {
         
        if(error) {
            res(error)
        }

        connection.end((err)=> {
            if(err) {
                res(err)
            }
            res(data)
            
        })
    })
})