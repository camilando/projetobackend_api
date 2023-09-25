const express = require ("express")
const router = express.Router()

const app = express()
const porta = 7777

function mostraMulher(request,response) {
 response.json({
    nome:'Camila Silva',
    imagem:'https://media.licdn.com/dms/image/C4E03AQHe6jIwu428AQ/profile-displayphoto-shrink_400_400/0/1594299818162?e=1701302400&v=beta&t=_-7tmDk11uYImeJYGuqJA1G2MKDmgj3CXE2M7G0yQW0',
    minibio:'Geografa'
 })
}

 function mostraPorta() { 
    console.log("Servidor criado e rodando na porta ", porta)

 }

 app.use(router.get('/mulher', mostraMulher))
 app.listen(porta, mostraPorta)
