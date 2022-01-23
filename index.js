const inquirer = require('inquirer');

var chooseEmployee = () => {

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
            promptEngineer(employee);
        }
        if (employee === 'Manager') {
            promptManager(employee);
        }
        if (employee === 'Intern') {
            promptIntern(employee);
        }
    });       
}

chooseEmployee();

var promptManager = (employee) => {

    inquirer.prompt([
        {
            type: 'input',
            name: 'officeNumber',
            message: 'Enter the office number of the manager:',
            validate: officeInput => {
                if (officeInput) {
                    return true;
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
            var specificInfo = answer.officeNumber;
            promptEmployee(employee, specificInfo);
        }
    });
}

var promptEngineer = (employee) => {

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
            var specificInfo = answer.GitHub;
            promptEmployee(employee, specificInfo);
        }
    });
}

var promptIntern = (employee) => {

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
            var specificInfo = answer.school;
            promptEmployee(employee, specificInfo);
        }
    });
}

var promptEmployee = (employee, specificInfo) => {

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
                    return true;
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
            var allInfo = {
                employee: employee,
                specificInfo: specificInfo,
                name: answer.name,
                id: answer.id,
                email: answer.email,
                confirmAddProject: answer.confirmAddProject
            }
        }
    );
}


