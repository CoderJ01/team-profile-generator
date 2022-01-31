const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const fs = require('fs');
const mainHTML = require('./src/page-template-html');

var chooseEmployee = (managerData, engineerData, internData) => {

    if (!managerData) {
        managerData = [];
    }
    if (!engineerData) {
        engineerData = [];
    }
    if (!internData) {
        internData = [];
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
            promptManager(employee, managerData, engineerData, internData);
        }
        if (employee === 'Engineer') {
            promptEngineer(employee, managerData, engineerData, internData);
        }
        if (employee === 'Intern') {
            promptIntern(employee, managerData, engineerData, internData);
        }
    });       
}

chooseEmployee();

var promptManager = (employee, managerData, engineerData, internData) => {

    inquirer.prompt([
        {
            type: 'input',
            name: 'officeNumber',
            message: 'Enter your office number:',
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
            promptEmployee(employee, managerData, engineerData, internData, job);
        }
    });
}

var promptEngineer = (employee, managerData, engineerData, internData) => {

    inquirer.prompt([
        {
            type: 'input',
            name: 'GitHub',
            message: 'Enter the GitHub username of the engineer:',
            validate: githubInput => {
                if (githubInput) {
                    return true;
                }
                else {
                    console.log('You need to enter a username');
                }
            }
        }
    ])
    .then(answer => {
        if (answer.GitHub) {
            var gitHub = answer.GitHub;
            var job = gitHub;
            promptEmployee(employee, managerData, engineerData, internData, job);
        }
    });
}

var promptIntern = (employee, managerData, engineerData, internData, job) => {

    inquirer.prompt([
        {
            type: 'input',
            name: 'school',
            message: 'Enter the school that the intern attends:',
            validate: schoolInput => {
                if (schoolInput) {
                    return true;
                }
                else {
                    console.log('You need to enter the school of the intern');
                    return false;
                }
            }
        }
    ])
    .then(answer => {
        if (answer.school) {
            var school = answer.school;
            var job = school;
            promptEmployee(employee, managerData, engineerData, internData, job);
        }
    });
}

var promptEmployee = (employee, managerData, engineerData, internData, job) => {

    var statement = '';
    var your = '';

    if (employee === 'Manager') {
        your = 'your';
    }
    if (employee === 'Engineer') {
        your = 'the';
        statement = ' of the engineer';
    }
    if (employee === 'Intern') {
        your = 'the';
        statement = ' of the intern';
    }

    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: `Enter ${your} name${statement}:`,
            validate: nameInput => {
                if (nameInput) {
                    return true;
                }
                else {
                    console.log('You need to enter a name');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: `Enter ${your} employee ID number${statement}:`,
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
            message: `Enter ${your} email${statement}:`,
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
                managerData.push(manager);
            }
            if (employee === 'Engineer') {
                engineerData.push(engineer); 
            }
            if (employee === 'Intern') {
                internData.push(intern);
            }

            if (answer.confirmAddProject === true) {
                chooseEmployee(managerData, engineerData, internData);
            }
            else {
                const displayHTML = mainHTML(managerData, engineerData, internData);

                fs.writeFile('./dist/index.html', displayHTML, err => {
                    if (err) {
                        throw new Error(err);
                    }
                    else {
                        console.log('Page created! Check out index.html in this directory to see it!');
                    }
                });
            }
        }     
    );
}






