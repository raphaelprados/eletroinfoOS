import { Sequelize } from 'sequelize' 

// Estabelecendo conexao do banco de dados
const sequelize = new Sequelize('adminos', 'postgres', 'admin', {
    host: 'localhost',
    port: 5432,
    database: 'adminos',
    user: 'postgres',
    password: 'admin',
    dialect: 'postgres'
})

export default sequelize;