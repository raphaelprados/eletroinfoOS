import { DataTypes } from 'sequelize'
import { sequelize } from '../sequel'

const Modelo = sequelize.define('Modelo', {
    modelo: {
        type: DataTypes.STRING,
        primaryKey: true        
    }
})

Modelo.sync({ force: false })

console.log(Modelo === sequelize.models.Modelo)

export default Modelo
