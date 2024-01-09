import { Sequelize, DataTypes } from 'sequelize'
const sequelize = new Sequelize('sqlite::memory')

const Marca = sequelize.define('Marca', {
    nome: {
        type: DataTypes.STRING,
        primaryKey: true        
    }
})

Marca.sync({ force: false })

console.log(Marca === sequelize.models.Marca)

export default Marca
