const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
// const Employee = require('../lib/Employee');

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
        
        if (employee === 'Engineer') {
            promptEngineer(employee, employeeData);
        }
        if (employee === 'Manager') {
            promptManager(employee, employeeData);
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
            promptEmployee(employee, officeNum, employeeData);
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
            // const employee = new Engineer(name, id, email, gitHub);
            promptEmployee(employee, gitHub, employeeData);
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
            var schoolName = answer.school;
            promptEmployee(employee, schoolName, employeeData);
        }
    });
}

var promptEmployee = (employee, officeNum, gitHub, schoolName, employeeData) => {

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
           
            // var allInfo = {
            //     employee: employee,
            //     specificInfo: specificInfo,
            //     name: answer.name.substring(0, 1).toUpperCase() + answer.name.substring(1),
            //     id: parseInt(answer.id),
            //     email: answer.email.toLowerCase(),
            //     confirm: answer.confirmAddProject
            // }

            employeeData.push(allInfo);
            console.log(employeeData);

            if (allInfo.confirm === true) {
                chooseEmployee(employeeData);
            }
        }
    );
}


