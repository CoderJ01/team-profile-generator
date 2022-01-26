const Employee = require('../lib/Employee.js');

class Intern extends Employee {
    constructor (name, id, email, school) {
        super(name, id, email, 'Intern');
        this.school = school;
    }

    schoolName() {
        return this.school;
    }
}

module.exports = Intern;