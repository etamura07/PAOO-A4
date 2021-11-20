const mongoose = require('mongoose')

const recomendacaoSchema = mongoose.Schema({
    descricao: { type: String, required: true },
    createdAt: { type: Date, required: true, default: Date.now },
})


module.exports = mongoose.model('Recomendacao', recomendacaoSchema)