const connection = require('../config/mysqlconnection');

class db {
    constructor(connection){
        this.connection = connection
    }
    //all function are between this class
}
module.exports = new db(connection);