const express = require('express')
const { cadastrarEncomenda, perfilDoUsuario, listarEncomendas } = require('./controladores/acessoDoUsuario')
const { cadastrarUsuario, login } = require('./controladores/cadastroELogin')

const rotas = express()
rotas.use(express.json())

rotas.post('/cadastro', cadastrarUsuario)
rotas.post('/login', login)
rotas.get('/usuario/:id', perfilDoUsuario)
rotas.post('/encomenda', cadastrarEncomenda)
rotas.get('/encomenda', listarEncomendas)


module.exports = rotas