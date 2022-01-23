const inquirer = require('inquirer');

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
            promptEmployee(employee, specificInfo, employeeData);
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
            var specificInfo = answer.GitHub;
            promptEmployee(employee, specificInfo, employeeData);
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
            var specificInfo = answer.school;
            promptEmployee(employee, specificInfo, employeeData);
        }
    });
}

var promptEmployee = (employee, specificInfo, employeeData) => {

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

            var allInfo = {
                employee: employee,
                specificInfo: specificInfo,
                name: answer.name,
                id: answer.id,
                email: answer.email,
                confirm: answer.confirmAddProject
            }

            employeeData.push(allInfo);

            if (allInfo.confirm === true) {
                chooseEmployee(employeeData);
            }
        }
    );
}


