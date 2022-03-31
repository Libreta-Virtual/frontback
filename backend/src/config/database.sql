CREATE DATABASE libreta;

USE  libreta;

CREATE TABLE usuario(
    id serial PRIMARY KEY,
    nombre VARCHAR(30) NOT NULL,
    apellido VARCHAR(30)NOT NULL,
    dni int NOT NULL,
    base varchar(30) NOT NULL,
    password varchar(30),
    UNIQUE (dni)
);
CREATE TABLE servicios(
    id serial PRIMARY KEY,
    hora int,
    tren VARCHAR(30) NOT NULL,
    socio VARCHAR(30) NOT NULL,
    locomotora int,
    vehiculos int
);

INSERT INTO servicios( hora, tren, socio, locomotora, vehiculos) VALUES (
   12,
   222,
   "juan",
   9020,
   46
);