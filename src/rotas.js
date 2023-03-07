const express = require('express')
const knex = require('./conexao')
const { perfilDoUsuario } = require('./controladores/acessoDoUsuario')
const { cadastrarUsuario, login, atualizarUsuario, excluirUsuario } = require('./controladores/cadastroELogin')
const { cadastrarEncomenda, listarEncomendas } = require('./controladores/encomendas')

const rotas = express()
rotas.use(express.json())

rotas.post('/cadastro', cadastrarUsuario)
rotas.post('/login', login)
rotas.get('/usuario/:id', perfilDoUsuario)
rotas.put('/usuario/:id', atualizarUsuario)
rotas.delete('/usuario/:id', excluirUsuario)
rotas.post('/encomenda', cadastrarEncomenda)
rotas.get('/encomenda', listarEncomendas)

module.exports = rotas