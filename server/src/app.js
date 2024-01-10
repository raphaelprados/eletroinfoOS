
import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import morgan from 'morgan'
// import pg from 'pg'
import { sequelize } from './sequel.js'
import routes from './routes.js'

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

// Testando conexão do banco de dados
const initDB = async() => {
    try {
        await sequelize.authenticate()
        console.log('Connection has ben estabilishe successfully')
    } catch(error) {
        console.error('Unable to connect to the database: ', error)
    }
}
initDB()

routes(app)

// app.post('/register', (req, res) => {
//     res.send({
//         message: `Hello ${req.body.email}! Your user was registered! Have fun!`
//     })
// })

app.listen(8081, () => {
    console.log('Server is running on port 8081')
})
