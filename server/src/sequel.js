import { Sequelize } from 'sequelize' 

// Estabelecendo conexao do banco de dados
export const sequelize = new Sequelize('adminos', 'postgres', 'admin', {
    host: 'localhost',
    port: 5432,
    dialect: 'postgres'
})

// export default sequelize