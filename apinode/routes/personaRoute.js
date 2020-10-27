'use strict'
 
// Cargamos el módulo de express para poder crear rutas
var express = require('express');
 
// Cargamos el controlador
var personaController = require('../controllers/personaController');
// var autoController = require('../controllers/autoController');

// Llamamos al router
var api = express.Router();
 
//  Guardar Persona
api.post('/personas', personaController.guardar);
api.get('/personas', personaController.todos);
api.get('/personabyID/:id', personaController.buscarPorID);
api.delete('/personabyID/:id',personaController.eliminarPorID);
api.put('/personabyID/:id',personaController.actualizarTodo);
//api.put('/modificarbyID/:id',personaController.modificarPorID);


// api.post('/autoguardar',autoController.guardar);

// Exportamos la confi,guración
module.exports = api;
