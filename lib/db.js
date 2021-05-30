const connection = require('../config/mysqlconnection');

class Db {
    constructor(connection){
        this.connection = connection;
    }
    findAllEmployees() {
        return this.connection.promise().query(
        "SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager FROM employee LEFT JOIN role on employee.role_id = role.id LEFT JOIN department on role.department_id = department.id LEFT JOIN employee manager on manager.id = employee.manager_id;"
        );
    }
//function that views all departments

    //function that adds department

    //function that adds role

    //function that adds employee

//function to view roles

//function that returns employees
}
module.exports = new Db(connection);