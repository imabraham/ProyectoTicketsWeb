const express = require('express');

const routes = express.Router();

const {eliminarTiket, borrarCategoria,obtenerEmpleados, obtenerEmpleado, registrarEmpleado, actualizarEmpleado, eliminarEmpleado, obtenerCategorias, registrarCategoria, obtenerTickets, obtenerTicket, registrarTickets, modificarTicket} = require('../controllers/Controller');

routes.get('/personal/', obtenerEmpleados)

routes.get('/personal/:id', obtenerEmpleado)

routes.post('/personal/', registrarEmpleado)

routes.put('/personal/', actualizarEmpleado)

routes.delete('/personal/:id', eliminarEmpleado)

routes.get('/categorias/', obtenerCategorias);

routes.post('/categorias/', registrarCategoria)

routes.get('/tickets/:id', obtenerTicket)

routes.get('/tickets/', obtenerTickets)

routes.delete('/tickets/:id', eliminarTiket)

routes.post('/tickets/', registrarTickets)

routes.delete('/tickets/', modificarTicket)

routes.delete('/eliminaCategoria/:id', borrarCategoria)

module.exports = routes;