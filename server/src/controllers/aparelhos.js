import Aparelho from '../models/aparelhoModel.js'

function findAll(req, res) {
    Aparelho.findAll().then((result) => res.json(result))
}

function findAparelho(req, res) {
    Aparelho.findByPk(req.params.tipo).then((result) => res.json(result))
}

function addAparelho(req, res) {
    Aparelho.create({
        tipo: req.body.tipo
    }).then((result) => res.json(result))
}

async function updateAparelho(req, res) {
    await Aparelho.update(
        {
            tipo: req.body.tipo,
        },
        {
            where: {
                id: req.params.id
            },
        }
    )

    Aparelho.findByPk(req.params.id).then((result) => res.json(result))
} 

async function deleteAparelho(req, res) {
    await Aparelho.destroy({
        where: {
            id: req.params.id,
        },
    })

    Aparelho.findAll().then((result) => res.json(result))
}

export default { findAll, addAparelho, deleteAparelho, findAparelho, updateAparelho }
