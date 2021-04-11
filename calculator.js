const { response, request } = require('express')
const express = require('express')
const app = express()
app.get('/', (_request, response) => {
    response.send('<h1>Hello World!</h1>')
})

app.listen(2000, () => {
    console.log('Server started on port 2000')
})
