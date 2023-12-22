export default (app) => {
    app.get('/register', (req, res) => {
        res.send({
            message: `Hello ${req.body.email}! Your user was registered! Have fun`
        })
    })
    app.get('/', (req, res) => {
        res.send({
            message: 'hello world bitch'
        })
    })
}