// jshint esversion:6

const express = require('express')

const app = express()
const port = 2000

app.use(express.json())
app.use(
    express.urlencoded({
        extended: true,
    })
)

app.get('/', (__request, response) => {
    response.sendFile(__dirname + '/index.html')
})
app.post('/', (__request, response) => {
    console.log(__request.body)
    response.send('Thanks for poasting that')
})

app.listen(port, () => {
    console.log('Server running on port 2000')
})
