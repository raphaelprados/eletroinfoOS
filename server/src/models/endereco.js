import { DataTypes } from 'sequelize'
import { sequelize } from '../db/database'

const Endereco = sequelize.define('Endereco', {
    estado: {
        type: DataTypes.CHAR(2)
    },
    cidade: {
        type: DataTypes.STRING,
        allowNull: false
    },
    bairro: {
        type: DataTypes.STRING
    },
    rua: {
        type: DataTypes.STRING
    },
    numero: {
        type: DataTypes.CHAR(5)
    },
    complemento: {
        type: DataTypes.STRING
    }    
})

Endereco.sync({ force: false })

console.log(Endereco === sequelize.models.Endereco)

export default Endereco