const cadastrarUsuario = async (req, res) => {
    const { nome, email, telefone, senha } = req.body
    try {
        res.json({ nome, email, telefone })


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

module.exports = { cadastrarUsuario, login }