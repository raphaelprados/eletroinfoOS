import { DataTypes } from 'sequelize'
import { sequelize } from './database'

const Aparelho = sequelize.define('Aparelho', {
    tipo: {
        type: DataTypes.STRING,
        primaryKey: true        
    }
})

Aparelho.sync({ force: false })

console.log(Aparelho === sequelize.models.Aparelho)

export default Aparelho
