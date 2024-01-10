import { DataTypes } from 'sequelize'
import Sequelize from 'sequelize'
// import { sequelize } from '../sequel'
// const sequelize = require('../sequel')

const sequelize = new Sequelize('adminos', 'postgres', 'admin', {
    host: 'localhost',
    port: 5432,
    dialect: 'postgres'
})

const Aparelho = sequelize.define('Aparelho', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    tipo: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

Aparelho.sync({ force: false })

console.log(Aparelho === sequelize.models.Aparelho)

export default Aparelho
