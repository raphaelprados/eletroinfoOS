import { DataTypes } from 'sequelize'
import { sequelize } from '../sequel'

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
