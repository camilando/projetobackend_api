const express = require ("express")
const router = express.Router()

const app = express()
const porta = 3333

const mulheres =  [ 
    {
        nome: 'Gato Preto',
        imagem:'https://s.abcnews.com/images/Lifestyle/ht_vampire_cat_em_161101_16x9_992.jpg?w=992',
        minibio:'vivendo a boa vida'
    },
    
    {
        nome: 'Iana Chan',
        imagem:'https://s.abcnews.com/images/Lifestyle/ht_vampire_cat_em_161101_16x9_992.jpg?w=992',
        minibio:'fundadora da Programaria'
    },
] 


function mostraMulheres(request, response) {
    response.json(mulheres)
}

function mostraPorta() { 
    console.log("Servidor criado e rodando na porta ", porta)

 }

 app.use(router.get('/mulheres', mostraMulheres))
 app.listen(porta, mostraPorta)
