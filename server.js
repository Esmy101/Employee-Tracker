// Import and require mysqul2
const mysql = require('mysql2');
// Import and require inquirer
const inquirer = require('inquirer');
const fs = require('fs');

const promptUser = () => {
    return inquirer.prompt({
        { 
            type: 'list',
            message:'What would you like to do?',
            name: 'options',
            choices:['view all departments', 'view all roles', 'view all employees', 'add department', 'add role', 'add employee', 'update employee role']
        }
    })
}
