
import { Aparelho } from './aparelho' 
import { Cliente } from './cliente'
import { Endereco } from './endereco'
import { Funcionario } from './funcionario'
import { Marcas } from './marcas'
import { Modelo } from './modelo'
import { OrdemServico } from './ordemServico'

function setAssociations() {
    
    // Has Many or Has One
    Aparelho.hasMany(OrdemServico, { onDelete: 'RESTRICT', onUpdate: 'CASCADE' })
    Cliente.hasMany(OrdemServico, { onDelete: 'RESTRICT', onUpdate: 'CASCADE' })
    Cliente.hasOne(Endereco, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    Funcionario.hasOne(Endereco, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    Funcionario.hasMany(OrdemServico, { onDelete: 'RESTRICT', onUpdate: 'CASCADE' })
    Marcas.hasMany(OrdemServico, { onDelete: 'RESTRICT', onUpdate: 'CASCADE' })
    Modelo.hasMany(OrdemServico, { onDelete: 'RESTRICT', onUpdate: 'CASCADE' })

    // Belongs to
    Endereco.belongsTo(Cliente)
    Endereco.belongsTo(Funcionario)
    OrdemServico.belongsTo(Aparelho)
    OrdemServico.belongsTo(Cliente)
    OrdemServico.belongsTo(Funcionario)
    OrdemServico.belongsTo(Marcas)
    OrdemServico.belongsTo(Modelo)
}

export default setAssociations
