// Import and require mysqul2
const mysql = require('mysql2');
// Import and require inquirer
const inquirer = require('inquirer');
//Calls table library 
const cTable = require('console.table');

// create the connection to database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Sunnyside1413!',
    database: 'business_db'
});


const showDepartment = () => {
    connection.query(
        'SELECT * FROM department',
        function(err, results, fields) {
            const table = cTable.getTable(results)
                
          console.log(table); // shows table
        }
      );
      
};

const showRoles = () => {
    connection.query(
        'SELECT * FROM department',
        function(err, results, fields) {
            let departments = results 
                
            connection.query(
                'SELECT * FROM roles',
                function(err, results, fields) {
                    const table = cTable.getTable(results)
                    console.log(departments)
                  console.log(table); // shows table
                }
              );
        }
      );

};

const showEmployees = () => {
    connection.query(
        'SELECT * FROM employee',
        function(err, results, fields) {
            const table = cTable.getTable(results)
                
          console.log(table); // shows table
        }
      );
};

const addDepartment = () => {

};

const addRole = () => {

};

const addEmployee = () => {

};

const updateEmployee = () => {

};


const promptUser = () => {
    return inquirer.prompt([
        { 
            type: 'list',
            message:'What would you like to do?',
            name: 'options',
            choices:['view all departments', 'view all roles', 'view all employees', 'add department', 'add role', 'add employee', 'update employee role']
        }
    ]) 
    .then ((reply) => {
        if('view all departments' === reply.options){
            showDepartment()
        } else if ('view all roles' === reply.options){
            showRoles()
        }else if ('view all employees' === reply.options){
            showEmployees()
        }else if ('add department' === reply.options){
            addDepartment()
        }else if ('add role' === reply.options){
            addRole()
        }else if ('add employee' === reply.options){
            addEmployee()
        } else if ('update employee role' === reply.options){
            updateEmployee()
        }
    })
};

promptUser()