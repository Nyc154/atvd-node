
const express = require('express')
const axios = require('axios')
const app = express()
const port = 3000



app.get('/', (req, res) =>{
    res.send('Hello World!')
})
0
app.get('/rota', (req, res) =>{
    res.send('Minha primeira rota')
})
app.get('/consulta-cep/:cep', async (req, res) =>{
    const regex = /^[0-9]{5}-[0-9]{3}$/;
    const cep = req.params.cep

    if (regex.test(cep)){
        axios.get(`https://viacep.com.br/ws/${cep}/json/`)
        .then(function(response){
            res.json(response.data);
        })
    }

    else {
        res.send('Erro ao consultar o CEP')
    }
})

app.get()

app.listen(port, () => {
    console.log(`servidor rodando em http://localhost:${port}`)
})