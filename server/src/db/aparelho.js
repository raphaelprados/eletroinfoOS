const { Sequelize, DataTypes } = require('sequelize')
const sequelize = new Sequelize('sqlite::memory')

const Aparelho = sequelize.define('Aparelho', {
    tipo: {
        type: DataTypes.STRING,
        primaryKey: true        
    }
})

Aparelho.sync({ force: false })

console.log(Aparelho === sequelize.models.Aparelho)

module.exports = Aparelho
