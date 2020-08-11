
// Servidor
const express = require('express')
const server = express()

const { 
  pageLanding,
  pageStudy,
  pageGiveClasses,
  saveClasses } = require('./pages')

// Configurar Nunjuks
const nunjucks = require('nunjucks');
nunjucks.configure('src/views', { // Aqui estou apontando para onde que eu quero que meu Nunjuks seja configurado
  express: server, // Dizendo qual é o servidor express que estou usando
  noCache: true, // Desativando o Cash (Guardar em memória)
})

// Inicio e configuração do servidor



server
  // receber os dados do req.body
  .use(express.urlencoded({ extended: true }))
  // Configurar arquivos estáticos (CSS, Scripts, Imagens)
  .use(express.static("public"))
  // Rotas da Aplicação
  .get("/", pageLanding)
  .get("/study", pageStudy)
  .get("/give-classes", pageGiveClasses)
  .post("/save-classes", saveClasses)
  // start do servidor
  .listen(5500)

