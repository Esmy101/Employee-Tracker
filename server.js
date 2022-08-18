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

                                //SHOWING TABLES
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
        `select roles.id, role_title, role_salary, department_name  from roles, department
        where roles.department_id = department.id`,
        function(err, results, fields) {
            const table = cTable.getTable(results)
                
          console.log(table); // shows table
        }
      );
};

const showEmployees = () => {
    connection.query(
        `select e.id, e.first_name, e.last_name, r.role_title, d.department_name, r.role_salary,  m.first_name as manger_name 
        from employee as e 
        left join employee as m on e.manager_id = m.id 
        left join roles as r on r.id = e.role_id 
        left join department as d on r.department_id = d.id`,
        function(err, results, fields) {
            const table = cTable.getTable(results)
                
          console.log(table); // shows table
        }
      );
};
                                    //ADDING 
const addDepartment = () => {
    inquirer.prompt([
        {
            type: 'input',
            message: 'What is the name of the department?',
            name: 'department',
        }
    ]) .then ((answers) => {
        connection.query(
            `INSERT INTO department (department_name)
            VALUES ( '${answers.department}')`
        )
        console.log(`Successfully added ${answers.department} to database`)
    })
};

const addRole = () => {
    inquirer.prompt([
        {
            type: 'input',
            message: 'What is the name of the role?',
            name: 'role',
        },
        {
            type: 'input',
            message: 'What is the salary of the role?',
            name: 'salary',
        },
        {
            type: 'list',
            message: 'Which department does the role belong to?',
            name: 'department',
            choices: [//don't know what to put here]
        },
    ]) .then ((answers) => {
        connection.query(
            `INSERT INTO department (role_title, role_salary, department_id)
            VALUES ( '${answers.role}', '${answers.salary}', '${answers.department}')`
        )
        console.log(`Successfully added ${answers.role} to database`)
    })
};

const addEmployee = () => {
    inquirer.prompt([
        {
            type: 'input',
            message: 'What is the employees first name?',
            name: 'fname',
        },
        {
            type: 'input',
            message: 'What is the employees last name?',
            name: 'lname',
        },
        {
            type: 'list',
            message: 'What is the employees role?',
            name: 'role',
            choices: []
        },
        {
            type: 'list',
            message: 'Who is the employees manager?',
            name: 'manager',
            choices: []
        },
    ]) .then((answers) => {
        connection.query(
            `INSERT INTO department (first_name, last_name, role_id, manager_id)
            VALUES ( '${answers.fname}', '${answers.lname}', '${answers.role}', '${answers.manager}'
            )`
        )
        console.log(`Successfully added ${answers.fname} ${answers.lname} to database`)
    })
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
    .then ((reply) => { //conditions for al the options
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