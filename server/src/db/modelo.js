const { Sequelize, DataTypes } = require('sequelize')
const sequelize = new Sequelize('sqlite::memory')

const Modelo = sequelize.define('Modelo', {
    modelo: {
        type: DataTypes.STRING,
        primaryKey: true        
    }
})

Modelo.sync({ force: false })

console.log(Modelo === sequelize.models.Modelo)

module.exports = Modelo
