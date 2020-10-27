'use strict'
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const mongoose = require('mongoose')
var persona_routes = require('./routes/personaRoute');


app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())



app.use('/api',persona_routes);

mongoose.connect('mongodb+srv://jolivar1992:josefa2016@cluster0.zvxgc.mongodb.net/Taller_web?retryWrites=true&w=majority', (err, res) => {

    if(err){
        console.log("NO CONECTA")
    }
    app.listen(5000, () => {

        console.log("Esta corriendo en puerto 5000")
    })
})