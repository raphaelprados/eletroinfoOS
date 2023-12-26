const { Sequelize, DataTypes } = require('sequelize')
const sequelize = new Sequelize('sqlite::memory')

const Marca = sequelize.define('Marca', {
    nome: {
        type: DataTypes.STRING,
        primaryKey: true        
    }
})

Marca.sync({ force: false })

console.log(Marca === sequelize.models.Marca)

module.exports = Marca
