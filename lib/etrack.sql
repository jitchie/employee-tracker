DROP DATABASE IF EXISTS etrack_db;
CREATE DATABASE etrack_db;
USE etrack_db;
CREATE TABLE department(
    id INT AUTO_INCREMENT NOT NULL,
    name VARCHAR(30),
    PRIMARY KEY(id)
);
CREATE TABLE employeerole(
    id INT AUTO_INCREMENT NOT NULL,
    title VARCHAR(30) NOT NULL,
    salary INT(10) NOT NULL,
    department_id INT,
    PRIMARY KEY(id)
);
CREATE TABLE employee(
    id INT AUTO_INCREMENT NOT NULL,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT,
    manager_id INT NULL,
    PRIMARY KEY(id)
);