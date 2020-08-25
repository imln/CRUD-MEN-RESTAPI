const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb://localhost/UserDB'

const app = express()
mongoose.connect(url,{useNewUrlParser:true})

const con = mongoose.connection

con.on('open', function(){
    console.log('connected...')
})

app.use(express.json())

const usersRouter = require('./routes/users')
app.use('/user', usersRouter)



app.listen(9000, function(){
    console.log('Server started...')
})

