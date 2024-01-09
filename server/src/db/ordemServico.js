import { Sequelize, DataTypes } from 'sequelize'
const sequelize = new Sequelize('sqlite::memory')

const OrdemServico = sequelize.define('OrdemServico', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    status: {
        type: DataTypes.STRING
    },
    numeroSerie: {
        type: DataTypes.STRING
    },
    defeitoReclamado:  {
        type: DataTypes.TEXT
    },
    diagnostico: {
        type: DataTypes.TEXT
    },
    acessorios: {
        type: DataTypes.STRING
    },
    entrada: {
        type: DataTypes.DATE,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    saida: {
        type: DataTypes.DATE
    }
})

OrdemServico.sync({ force: false })

console.log(OrdemServico === sequelize.models.OrdemServico)

export default OrdemServico
