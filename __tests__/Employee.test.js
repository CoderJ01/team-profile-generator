const Employee = require('../lib/Employee.js');

describe('Employee', () => {
    describe('name', () => {
        it('should return a string', () => {

            const usersName = new Employee('Jason');
            expect(usersName.name).toBe('Jason'); 
            expect(usersName.name).toEqual(expect.any(String));

        });
    });
});