const express = require('express');

const routes = express.Router();

const {obtenerEmpleados, obtenerEmpleado, registrarEmpleado, actualizarEmpleado, eliminarEmpleado, obtenerCategorias, registrarCategoria, obtenerTickets, obtenerTicket, registrarTickets, modificarTicket} = require('../controllers/Controller');

routes.get('/personal/', obtenerEmpleados)

routes.get('/personal/:id', obtenerEmpleado)

routes.post('/personal/', registrarEmpleado)

routes.put('/personal/:id', actualizarEmpleado)

routes.delete('/personal/:id', eliminarEmpleado)

routes.get('/categorias/', obtenerCategorias);

routes.post('/categorias/', registrarCategoria)

routes.get('/tickets/:id', obtenerTicket)

routes.get('/tickets/', obtenerTickets)

routes.post('/tickets/', registrarTickets)

routes.delete('/tickets/', modificarTicket)

module.exports = routes;