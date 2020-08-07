const proffys = [

    {
        name: "Diego Fernandes",
        avatar: "https://github.com/diego3g.png",
        whatsapp: "900000000",
        bio: "Entusiasta das melhores tecnologias de química avançada. Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.00 pessoas já passaram por uma das minhas explosões.",
        subject: "Química",
        cost: "20",
        weekday: [0], // Tipo de dado que agrupará vários dados
        time_from: [720],
        time_to: [1200]
    },
    {
        name: "Mayk Brito",
        avatar: "https://github.com/maykbrito.png",
        whatsapp: "900000000",
        bio: "Entusiasta das melhores tecnologias de química avançada. Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.00 pessoas já passaram por uma das minhas explosões.",
        subject: "Química",
        cost: "20",
        weekday: [1],
        time_from: [720],
        time_to: [1200]
    }

]

const subjects = [
    "Artes",
    "Biologia",
    "Ciências",
    "Educação física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Portugês",
    "Química"
  ]
  
  const weekdays = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
  ]

  // Funcionalidades
  
function getSubjects(subjectNumber) {
    const position = +subjectNumber -1
    return subjects[position]
  }



function pageLanding(req, res) {
    return res.render("index.html") // Renderizando o arquivo
}



function pageStudy(req, res) {
    const filters = req.query   // Enviando os dados 
    return res.render("study.html", { proffys, filters, subjects, weekdays }) // Além de renderizar, estamos pegando os objetos da lista de objetos
}



function pageGiveClasses(req, res) {
    const data = req.query
   
    // Se tiver dados (data)... 
    const isNotEmpty = Object.keys(data).length != 0           
    if(isNotEmpty) {        
      data.subject = getSubjects(data.subject)
       //adicionar dados a lista de proffys
      proffys.push(data)
      // Redirecionando para a página /study
      return res.redirect("/study")
    }
    // se não, mostrar a página...
    return res.render("give-classes.html", { subjects, weekdays })
  }
  

const express = require('express')
const server = express()

// Configurar Nunjuks
const nunjucks = require('nunjucks');
nunjucks.configure('src/views', { // Aqui estou apontando para onde que eu quero que meu Nunjuks seja configurado
  express: server, // Dizendo qual é o servidor express que estou usando
  noCache: true, // Desativando o Cash (Guardar em memória)
})




server
// Configurar arquivos estáticos (CSS, Scripts, Imagens)
.use(express.static("public"))
// Rotas da Aplicação
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.listen(5500)

