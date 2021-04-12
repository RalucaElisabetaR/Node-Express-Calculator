// jshint esversion:6

const express = require('express')

const app = express()
let port = process.env.PORT
if (port == null || port == '') {
    port = 2000
}
app.listen(port)

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
    let weight = parseFloat(__request.body.weight)
    let height = parseFloat(__request.body.height)
    let bmi = weight / (height * height)

    response.send('Your BMI is ' + bmi)
})

app.listen(port, () => {
    console.log('Server running on port 2000')
})
