import express from "express"
import aparelhos from "./controllers/aparelhos.js"

const routes = express.Router()

routes.get("/aparelhos", aparelhos.findAll)
routes.get("/aparelhos/:id", aparelhos.findAparelho)
routes.post("/aparelhos", aparelhos.findAparelho)
routes.put("/aparelhos/:id", aparelhos.updateAparelho)
routes.delete("/aparelhos/:id", aparelhos.deleteAparelho)

export default routes

// export default (app) => {
//     app.get('/register', (req, res) => {
//         res.send({
//             message: `Hello ${req.body.email}! Your user was registered! Have fun`
//         })
//     })
//     app.get('/', (req, res) => {
//         res.send({
//             message: 'hello world bitch'
//         })
//     })
// }