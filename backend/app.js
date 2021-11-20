require('dotenv').config()
const Recomendacao = require ('./models/recomendacao')
const mongoose = require ('mongoose')
const express = require ('express')
const app = express()
app.use(express.json())
const cors = require ('cors')
app.use(cors())


const { MONGODB_USER, MONGODB_PASSWORD, MONGODB_ADDRESS, MONGODB_DATABASE } = process.env

mongoose.connect(`mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false`)
.then(() => {console.log("Conexão OK")
})
.catch((e) => console.log ("Conexão NOK: " + e))

var listener = app.listen(3000, function(){
    console.log('Listening on port ' + listener.address().port); //Listening on port 8888
});




//GET localhost:3000/api/clientes
app.get ('/api/recomendacoes', (req, res) => {
    Recomendacao.find()
    .then((documents) => {
        console.log(documents)
        res.status(200).json({
            recomendacoes: documents,
            mensagem: "Tudo OK" 
        })
    })
})

// app.get('/api/clientes/:id', (req, res) => {
//     Cliente.findById(req.params.id)
//     .then(cli => {
//         if (cli)
//             res.status(200).json(cli)
//         else
//             res.status(404).send({mensagem: "Cliente não encontrado!"})
//     })
// })

//POST localhost:3000/api/clientes
app.post('/api/recomendacoes', (req, res) => {
    console.log(req.body.descricao)
    const recomendacao = new Recomendacao({
        descricao: req.body.descricao
    })
    recomendacao.save()
    .then((recomendacaoInserida) => {
        console.log(recomendacao)
        res.status(201).json({
            mensagem: "Recomendacao inserida",
            id: recomendacaoInserida._id
        })
    })
})

// app.put('/api/clientes/:id/', (req, res) => {
//     const cliente = new Cliente({
//         _id: req.params.id,
//         nome: req.body.nome,
//         fone: req.body.fone,
//         email: req.body.email
//     })

//     Cliente.updateOne(
//         {_id: req.params.id}, 
//         cliente
//     )
//     .then((resultado) => {
//         console.log(resultado)
//         res.status(200).json({mensagem: 'Atualização realizada com sucesso'})
//     })

// })

//DELETE localhost:3000/api/clientes/123456
//DELETE localhost:3000/api/clientes/abc
app.delete('/api/recomendacoes/:id', (req, res) => {
    // DELETE FROM tb_clientes WHERE id = 123456
    Recomendacao.deleteOne({_id: req.params.id})
    .then((resultado) => {
        console.log (resultado)
        res.status(200).json({mensagem: 'Recomendação removido'})
    })
})





module.exports = app