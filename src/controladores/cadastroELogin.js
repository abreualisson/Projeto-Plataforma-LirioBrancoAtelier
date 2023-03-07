const knex = require("../conexao")

const cadastrarUsuario = async (req, res) => {
    const { nome, email, telefone, senha } = req.body
    try {

        const dadosDoUsuario = {
            nome,
            email,
            telefone,
            senha
        }

        const cadastrar = await knex('usuarios').insert(dadosDoUsuario, ['id', 'nome']).debug()

        return res.status(201).json({ "mensagem": "Usuario Cadastrado" })

    } catch (error) {
        res.status(500).json({ mensagem: "erro interno do servidor" })
    }

}

const login = async (req, res) => {
    const { email, senha } = req.body

    try {



    } catch (error) {
        res.status(500).json({ mensagem: "erro interno do servidor" })
    }
}

const atualizarUsuario = async (req, res) => {
    const { nome, email, telefone, senha } = req.body
    const { id } = req.params

    try {
        const dadosAtualizados = {
            nome,
            email,
            telefone,
            senha
        }

        const atualizarDados = await knex('usuarios').update(dadosAtualizados).where({ id }).debug();

        return res.status(200).json({ "mensagem": "Cadastro Atualizado" })

    } catch (error) {
        res.status(500).json({ mensagem: "erro interno do servidor" })
    }
}

const excluirUsuario = async (req, res) => {
    const { id } = req.params

    try {
        const deletarDadosDeUsuario = await knex('usuarios').delete().where({ id }).debug();

        return res.status(200).json({ "mensagem": "Cadastro Excluido" })

    } catch (error) {
        res.status(500).json({ mensagem: "erro interno do servidor" })
    }
}

module.exports = { cadastrarUsuario, login, atualizarUsuario, excluirUsuario }