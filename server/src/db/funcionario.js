const { Sequelize, DataTypes } = require('sequelize')
const sequelize = new Sequelize('sqlite::memory')

const Funcionario = sequelize.define('Funcionario', {
    nomeComp: {
        type: DataTypes.STRING,
        allowNull: false
    },
    telefone: { type: DataTypes.STRING(11) },
    cpf: { type: DataTypes.STRING(11) },
    email: { type: DataTypes.STRING }
})

Funcionario.sync({ force: false })

console.log(Funcionario === sequelize.models.Funcionario)

module.exports = Funcionario
