import { Sequelize, DataTypes } from 'sequelize'
const sequelize = new Sequelize('sqlite::memory')

const Cliente = sequelize.define('Cliente', {
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

Cliente.sync({ force: false })

console.log(Cliente === sequelize.models.Cliente)

export default Cliente
