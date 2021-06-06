const connection = require('../config/connection');

function obtenerEmpleados(req, res) {
    if(connection) {
        let sql = "select * from PERSONAL";
        connection.query(sql, (err, empleados) => {
            if(err) {
                res.json(err);
            } else {
                console.log(empleados);
                res.json(empleados);
            }
        });
    }
}

function obtenerEmpleado(req, res) {
    if(connection){
        const { id } = req.params; 
        let sql = `select * from PERSONAL where prsnl_id = ${connection.escape(id)}`;
        connection.query(sql, (err, empleado) => {
            if(err){
                console.log(err);
            } else {
                var mensaje1 = "";
                if(empleado === undefined || empleado.length == 0)
                mensaje1 = "Empleado no encontrado";

                res.json({data: empleado[0], mensaje: mensaje1});
            }
        }
        )
    }
}

function registrarEmpleado(req, res){
    if(connection){
        console.log(req.body);
        const empleado = req.body;

        if(!empleado.prsnl_nombre && empleando.prsnl_nombre.length <= 50){
            return res.status(400).send({error: true, mensaje: "El nombre es obligatorio y debe tener un máximo de 50 caracteres"});
        }

        if(!empleado.prsnl_apellidos && empleando.prsnl_apellidos.length <= 80){
            return res.status(400).send({error: true, mensaje: "El apellido es obligatorio y debe tener un máximo de 80 caracteres"});
        }

        if(empleado.prsnl_telefono && empleado.prsnl_telefono.length !== 10){
            return res.status(400).send({error: true, mensaje: "El télefono debe tener 10 dígitos"});
        }

        let sql = "insert into PERSONAL set ?";

        connection.query(sql, [empleado], (err, data) => {
            if(err){
                console.log(err);
            } else {
                res.json({error: false, data, mensaje: "Empleado añadido con éxito."});
            }
        })
    }
}

function actualizarEmpleado(req, res) {
    if(connection){
        const { id } = req.params;
        const empleado = req.body;

        let sql = "update PERSONAL set ? where prsnl_id = ?";

        connection.query(sql, [empleado, id], (err, data) => {
            if(err) {
                res.json(err);
            } else {
                let mensaje = "";
                if(data.changedRows === 0) {
                    mensaje = "La información es la misma"
                } else {
                    mensaje = "Empleado actualizado con éxito."
                }

                res.json({error: false, data, mensaje});
            }
        }
        )
    }
}

function eliminarEmpleado(req, res) {
    if(connection) {
        const { id } = req.params;
        let sql = "delete from PERSONAL where id = ?";
        connection.query(sql, [id], (err, data) => {
            if(err) {
                res.json(err);
            } else {
                let mensaje = "";
                if(data.affectedRows === 0) {
                    mensaje = "Empleado no encontrado";
                } else {
                    mensaje = "Empleado eliminado con éxito";
                }

                res.json({error: false, data, mensaje});
            }
        })
    }
}

function obtenerCategorias(req, res) {
    if(connection) {
        let sql = "select * from CATEGORIAS";
        connection.query(sql, (err, categorias) => {
            if(err) {
                res.json(err);
            } else {
                console.log(categorias);
                res.json(categorias);
            }
        });
    }
}

function registrarCategoria(req, res){
    if(connection){
        console.log(req.body);
        const categoria = req.body;

        if(!categoria.ctgrs_nombre){
            return res.status(400).send({error: true, mensaje: "El nombre es obligatorio"});
        }

        let sql = "insert into CATEGORIAS set ?";

        connection.query(sql, [categoria], (err, data) => {
            if(err){
                console.log(err);
            } else {
                res.json({error: false, data, mensaje: "Categoría añadida con éxito."});
            }
        })
    }
}

function obtenerTickets(req, res) {
    if(connection) {
        let sql = "select * from TICKETS";
        connection.query(sql, (err, tickets) => {
            if(err) {
                res.json(err);
            } else {
                console.log(tickets);
                res.json(tickets);
            }
        });
    }
}

function obtenerTicket(req, res) {
    if(connection){
        const { id } = req.params; 
        let sql = `select * from TICKETS where tckts_id = ${connection.escape(id)}`;
        connection.query(sql, (err, ticket) => {
            if(err){
                console.log(err);
            } else {
                var mensaje1 = "";
                if(ticket === undefined || ticket.length == 0)
                mensaje1 = "Ticket no encontrado";

                res.json({data: ticket[0], mensaje: mensaje1});
            }
        }
        )
    }
}


function registrarTickets(req, res){
    if(connection){
        console.log(req.body);
        const ticket = req.body;

        if(!ticket.tckts_nombre){
            return res.status(400).send({error: true, mensaje: "El nombre es obligatorio"});
        }

        if(!ticket.tckts_prioridad){
            return res.status(400).send({error: true, mensaje: "La prioridad es obligatoria"});
        }

        if(!ticket.tckts_estatus){
            return res.status(400).send({error: true, mensaje: "El estatus es obligatorio"});
        }

        if(!ticket.prsnl_id){
            return res.status(400).send({error: true, mensaje: "El id del empleado es obligatorio"});
        }

        if(!ticket.ctgrs_id){
            return res.status(400).send({error: true, mensaje: "El id de la categoría es obligatorio"});
        }

        let sql = "insert into TICKETS set ?";

        connection.query(sql, [ticket], (err, data) => {
            if(err){
                console.log(err);
            } else {
                res.json({error: false, data, mensaje: "Ticket añadido con éxito."});
            }
        })
    }
}

function modificarTicket(req, res) {
    if(connection){
        const { id } = req.params;
        const ticket = req.body;

        let sql = "update TICKETS set ? where tckts_id = ?";

        connection.query(sql, [ticket, id], (err, data) => {
            if(err) {
                res.json(err);
            } else {
                let mensaje = "";
                if(data.changedRows === 0) {
                    mensaje = "La información es la misma"
                } else {
                    mensaje = "Ticket actualizado con éxito."
                }

                res.json({error: false, data, mensaje});
            }
        }
        )
    }
}

module.exports = {
    obtenerEmpleados,
    obtenerEmpleado,
    registrarEmpleado,
    actualizarEmpleado,
    eliminarEmpleado,
    obtenerCategorias,
    registrarCategoria,
    obtenerTickets,
    obtenerTicket,
    registrarTickets,
    modificarTicket
}