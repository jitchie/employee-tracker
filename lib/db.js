const connection = require('../config/mysqlconnection');

class db {
    constructor(connection){
        this.connection = connection
    }
    class CreateDeparment {
        constructor(name){
            this.name=name;
        }
    }
    //all function are between this class
}
module.exports = new db(connection);