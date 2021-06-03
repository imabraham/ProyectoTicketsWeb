create database PROYECTOFINAL;
use PROYECTOFINAL;

create table PERSONAL(
    prsnl_id int not null auto_increment,
    prsnl_nombre varchar(50) not null,
    prsnl_apellidos varchar(80) not null,
    prsnl_telefono varchar(10),
    prsnl_direccion varchar(150),
    primary key (prsnl_id)
);

create table CATEGORIAS(
    ctgrs_id int not null auto_increment,
    ctgrs_nombre varchar(50) not null,
    primary key (ctgrs_id)
);

create table TICKETS(
	tckts_id int not null auto_increment,
    tckts_nombre varchar(50) not null,
    tckts_descripcion varchar(100),
    tckts_prioridad varchar(1) not null,
    prsnl_id int not null,
    ctgrs_id int not null,
    tckts_estatus varchar(3) not null,
    primary key (tckts_id),
	foreign key (prsnl_id) references PERSONAL(prsnl_id),
    foreign key (ctgrs_id) references CATEGORIAS(ctgrs_id)
);