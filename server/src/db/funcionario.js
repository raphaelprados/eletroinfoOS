const { Sequelize, DataTypes } = require('sequelize')
const sequelize = new Sequelize('sqlite::memory')

const Funcionario = sequelize.define('Funcionario', {
    nomeComp: {
        type: DataTypes.STRING,
        allowNull: false
    },
    telefone: {
        type: DataTypes.STRING(11)
    },
    // o campo armazena ambos os tipos de usuario. Controle de erros e realizado pelo front 
    cpfCnpj: {
        type: DataTypes.STRING(14)
    },
    pessJuridica: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
})

console.log(Funcionario === sequelize.models.Funcionario)


