const knex = require('../conexao')

const perfilDoUsuario = async (req, res) => {
    const { id } = req.params

    try {

        const usuario = await knex('usuarios').where({ id }).debug();

        return res.json(usuario)
    } catch (error) {
        return res.status(500).json('erro interno do servidor')
    }
}

module.exports = { perfilDoUsuario }