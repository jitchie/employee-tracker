const inquirer = require('inquirer');
const connection = require('./config/mysqlconnection');
require('dotenv').config();


async function appMenu(){
inquirer
.prompt([
  {
    type: "input",
    name: "choice",
    message: "what would you like to do?",
    choice: [
    'View Departments',
    'View Roles',
    'View Employees',
    'Add Department',
    'Add Role',
    'Add Employee',
    'Update Employee Role']
  },

])
.then((answers) => {
// Use user feedback for... whatever!!
})
.catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
});
}
appMenu();
//collecting 