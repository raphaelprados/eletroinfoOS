
import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import morgan from 'morgan'
import pg from 'pg'

import routes from './routes.js'

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

// Estabelecendo conexao do banco de dados
const client = new pg.Client({
    host: 'localhost',
    port: 5432,
    database: 'adminos',
    user: 'postgres',
    password: 'admin'
})

routes(app)

// Testando conexão do banco de dados
client.connect((err) => {
    if(err)
        console.log('connection error', err.stack)
    else
        console.log('connected');
})

app.listen(8081, () => {
    console.log('Server is running on port 8081')
})
