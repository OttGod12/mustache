const express = require('express')
const app = express()
const port = 8086
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')

//config body
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

let arr_postagens = []



//config handlebars
app.engine('handlebars', handlebars.engine())
app.set('view engine', 'handlebars')
app.set('views', './views')

app.get('/', function (req, res ){
    res.end("Bem vindo")
})



app.get('/formulario', function(req, res){
    res.render('formulario')
})



app.post('/cadastrarPostagem', function(req, res){
    //console.log(req.body.titulo)
    //console.log(req.body.conteudo)
    //res.send('Postagem Recebida')
    arr_postagens.push({titulo: req.body.titulo, conteudo: req.body.conteudo})
    res.render('postagens', {arr_postagens})
})

app.get('/postagens', function (req, res){
    res.render('postagens', {arr_postagens})
})


app.listen(port, function(req, res){
    console.log(`servidor rodando na porta ${port}...`)
})