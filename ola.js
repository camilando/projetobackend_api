const express = require("express")
const router = express.Router()

const app = express()
const porta = 4444

function mostraOla(request, response) {
    response.send("Ola, mundo!")
}

function mostraPorta() { 
    console.log("Servidor criado e rodando na porta ", porta)

 }
 app.use(router.get('/ola',mostraOla))
 app.listen(porta, mostraPorta)
