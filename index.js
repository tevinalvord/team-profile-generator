const inquirer = require('inquirer');
const Employee = require('./lib/Employee')
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')

let employee = new Employee('tevin', 'tevin.alvord@gmail.com');
console.log(employee.getRole());

let manager = new Manager('tevin', 1, 'tevin.alvord@gmail.com');
console.log(manager.getEmail());

let engineer = new Engineer('tevin', 1, 'tevin.alvord@gmail.com', 'TevinAlvord');
console.log(engineer.getGithub());

let intern = new Intern('tevin', 1, 'tevin.alvord@gmail.com', 'UVU');
console.log(intern.getSchool());