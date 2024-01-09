import { DataTypes } from 'sequelize'
import { sequelize } from '../db'


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

export default Funcionario
