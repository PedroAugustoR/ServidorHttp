const { serve } = require('cordova')
const express = require('express')
const server = express()

server.get('/', (req, res) => {
    res.send('<h1>MENU</h1>')
})

serve.post('/contato', (req, res) => {
    res.send('FUNCIONAAAAA!')
})

serve.get('/contato', (req, res) => {
    res.send(`
        <h1>Contato</h1>

        <form action="/contato" method="POST">
            <label for="email">EMAIL:</label>
            <input type="email" name="email" id="email">
            <label for="mensagem">Mensagem:</label>
            <textarea name="mensagem" id="mensagem"></textarea>
            <input type="sumit" value="Enviar">
        </form>
        `)
})

server.listen(3001,() => {
    console.log('Servidor de pé em http://localhost:3001')
    console.log('Para desligar o servidor: ctrl + c')
})