
import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import morgan from 'morgan'

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

app.get('/status', (req, res) => {
    res.send({
        message: 'hello world bitch'
    })
})

app.post('/register', (req, res) => {
    res.send({
        message: `Hello ${req.body.email}! Your user has issued a post`,

    })
})

app.listen(8081, () => {
    console.log('Server is running on port 8081')
})