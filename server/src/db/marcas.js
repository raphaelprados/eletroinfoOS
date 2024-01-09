import { DataTypes } from 'sequelize'
import { sequelize } from './database'


const Marca = sequelize.define('Marca', {
    nome: {
        type: DataTypes.STRING,
        primaryKey: true        
    }
})

Marca.sync({ force: false })

console.log(Marca === sequelize.models.Marca)

export default Marca
