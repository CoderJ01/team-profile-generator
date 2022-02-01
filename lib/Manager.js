// Create objects for Manager
const Employee = require('../lib/Employee.js');

class Manager extends Employee {
    constructor(name, id, email, officeNum) {
        super(name, id, email, 'Manager');
        this.officeNum = officeNum;
    }

    officeNumber() {
        return this.officeNum;
    }
}

module.exports = Manager;