const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

var chooseEmployee = (employeeData) => {

    if (!employeeData) {
        employeeData= [];
    }

    inquirer.prompt([
        {
            type: 'list',
            name: 'employee',
            message: 'Choose an employee',
            choices: ['Manager','Engineer', 'Intern']
        },
    ])
    .then(answer => {
        
        var employee = answer.employee;
        
        if (employee === 'Manager') {
            promptManager(employee, employeeData);
        }
        if (employee === 'Engineer') {
            promptEngineer(employee, employeeData);
        }
        if (employee === 'Intern') {
            promptIntern(employee, employeeData);
        }
    });       
}

chooseEmployee();

var promptManager = (employee, employeeData) => {

    inquirer.prompt([
        {
            type: 'input',
            name: 'officeNumber',
            message: 'Enter the office number of the manager:',
            validate: officeInput => {
                if (officeInput) {
                    if (!/^[0-9]+$/.test(officeInput)) {
                        console.log(' The office number needs to be a numerical value');
                        return false
                    }
                    else {
                        return true;
                    }
                }
                else {
                    console.log('You need to enter the office number');
                    return false;
                }
            }
        }
    ])
    .then(answer => {
        if (answer.officeNumber) {
            var officeNum = parseInt(answer.officeNumber);
            var job = officeNum;
            promptEmployee(employee, employeeData, job);
        }
    });
}

var promptEngineer = (employee, employeeData) => {

    inquirer.prompt([
        {
            type: 'input',
            name: 'GitHub',
            message: 'Enter your GitHub username:',
            validate: githubInput => {
                if (githubInput) {
                    return true;
                }
                else {
                    console.log('You need to enter your username');
                }
            }
        }
    ])
    .then(answer => {
        if (answer.GitHub) {
            var gitHub = answer.GitHub;
            var job = gitHub;
            promptEmployee(employee, employeeData, job);
        }
    });
}

var promptIntern = (employee, employeeData) => {

    inquirer.prompt([
        {
            type: 'input',
            name: 'school',
            message: 'Enter the name of your school:',
            validate: schoolInput => {
                if (schoolInput) {
                    return true;
                }
                else {
                    console.log('You need to enter the name of your school');
                    return false;
                }
            }
        }
    ])
    .then(answer => {
        if (answer.school) {
            var school = answer.school;
            var job = school;
            promptEmployee(employee, employeeData, job);
        }
    });
}

var promptEmployee = (employee, employeeData, job) => {

    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Enter your name:',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                }
                else {
                    console.log('You need to enter your name');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'Enter your employee ID number:',
            validate: idInput => {
                if (idInput) {
                    if (!/^[0-9]+$/.test(idInput)) {
                        console.log(' The ID needs to be a numerical value');
                        return false
                    }
                    else {
                        return true;
                    }
                }
                else {
                    console.log('You need to enter an ID number');
                    return false;
                }
            }
        }, 
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email:',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                }
                else {
                    console.log('You need to enter an email');
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmAddProject',
            message: 'Would you like to add another employee?',
            default: false
        }       
    ])
    .then(
        answer => {

            var name = answer.name.substring(0, 1).toUpperCase() + answer.name.substring(1);
            var id = parseInt(answer.id);
            var email = answer.email.toLowerCase();

            if (employee === 'Manager') {
                var officeNum = job;
            }
            if (employee === 'Engineer') {
                var gitHub = job;
            }
            if (employee === 'Intern') {
                var school = job;
            }
  
            const manager = new Manager(name, id, email, officeNum);
            const engineer = new Engineer(name, id, email, gitHub);
            const intern = new Intern(name, id, email, school);

            if (employee === 'Manager') {
                employeeData.push(manager);
            }
            if (employee === 'Engineer') {
                employeeData.push(engineer); 
            }
            if (employee === 'Intern') {
                employeeData.push(intern);
            }

            if (answer.confirmAddProject === true) {
                chooseEmployee(employeeData);
            }

            // if(employeeData.enginner[2]) {
            //     console.log(employeeData.enginner[2]);
            // }
        }
    );
}





