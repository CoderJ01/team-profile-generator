const Employee = require('../lib/Employee.js');

describe('Employee', () => {
    describe('name', () => {
        it('should return a string', () => {

            const usersName = new Employee('Jason'); // terminal: Expected Any<String>
            // const usersName = new Employee().getName('Jason'); //terminal: Expected "Jason"
            // expect(usersName).toBe('Jason'); // Expected: "Jason", Received: {"email": "", "id": "", "name": "Jason"}
            // expect(name).toBe('Jason'); // ReferenceError: name is not defined
            expect(usersName.name).toBe('Jason'); // Expected: Any<String>, Received: undefined
            expect(usersName.name).toEqual(expect.any(String));

        });
    });
});