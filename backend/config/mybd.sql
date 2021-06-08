create database PROYECTOFINAL;

use PROYECTOFINAL;

create table PERSONAL(
    id int not null auto_increment,
    nombre varchar(50) not null,
    apellidos varchar(80) not null,
    telefono varchar(10),
    direccion varchar(150),
    primary key (id)
);

INSERT INTO PERSONAL(nombre,apellidos,telefono,direccion ) VALUES ('JUAN', 'MARES', '6671856220','BLV.NAVIDAD')

create table CATEGORIAS(
    id int not null auto_increment,
    nombre varchar(50) not null,
    primary key (id)
);


create table TICKETS(
	id int not null auto_increment,
    nombre varchar(50) not null,
    descripcion varchar(100),
    prioridad varchar(1) not null,
    idPersona int not null,
    idCategoria int not null,
    estatus varchar(3) not null,
    primary key (id),
	foreign key (idPersona) references PERSONAL(id),
    foreign key (idCategoria) references CATEGORIAS(id)
);