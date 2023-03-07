const knex = require('../conexao')

const perfilDoUsuario = async (req, res) => {
    const { id } = req.params

    try {

        const usuarios = await knex('usuarios').select('nome').orderBy('id', 'desc').debug();

        return res.json(usuarios)
    } catch (error) {
        return res.status(500).json('erro interno do servidor')
    }
}

module.exports = { perfilDoUsuario }