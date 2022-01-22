const inquirer = require('inquirer');

var promptEmployee = () => {

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
        }
    ]);
}

var promptManager = () => {

    inquirer.prompt([
        {
            type: 'input',
            name: 'officeNumber',
            message: 'Enter your office number of the manager:',
            validate: officeInput => {
                if (officeInput) {
                    return true;
                }
                else {
                    console.log('You need to enter the office number');
                }
            }
        }
    ]);
}

var promptEngineer = () => {

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
    ]);
}

var promptIntern = () => {

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
    ]);
}
