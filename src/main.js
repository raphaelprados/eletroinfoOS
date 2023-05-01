import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'

// const { Pool, Client } = require('pg')

// const pool = new Pool({
//     user: "postgres",
//     password: "admin",
//     host: "127.0.0.1",
//     database: "OSAdminDemo",
//     port: 5432
// })

// pool.query('SELECT NOW()', (err, res) => {
//     console.log(err, res)
//     pool.end
// })

createApp(App).use(router).mount('#app')
