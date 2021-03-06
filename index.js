const express = require ('express')
const path = require('path')
const bodyParser = require('body-parser')
const routes = require('./router')
const mongoose = require('mongoose')
const app = express()

require('dotenv').config({path: 'variables.env'})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

mongoose.Promise = global.Promise
mongoose.connect (process.env.DB_URL, {
    useNewUrlParser: true
})

app.set('view engine', 'pug')

app.set('views', path.join(__dirname, './views'))

app.use(express.static('public'))

app.use('/', routes())

const host= process.env.HOST || '0.0.0.0';
const port = process.env.PORT || 3000
app.listen(port, host, ()=>{
    console.log("El servidor esta funcionando")
})