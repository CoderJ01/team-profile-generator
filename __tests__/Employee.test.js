const Employee = require('../lib/Employee.js');

describe('Employee', () => {
    describe('name', () => {
        it('should return a string', () => {
            const user = new Employee('Jason');
            expect(user.name).toBe('Jason'); 
            expect(user.name).toEqual(expect.any(String));
        });
    });

    describe('id', () => {
        it('should return a value', () => {
            const user = new Employee('Jason', 55);
            expect(user.id).toBe(55);
            expect(user.id).toEqual(expect.any(Number));
        });
    });

    describe('email', () => {
        it('should return a string', () => {
            const user = new Employee('Jason', 55, 'jason@yahoo.com');
            expect(user.email).toBe('jason@yahoo.com');
            expect(user.email).toEqual(expect.any(String));
        });
    });

    describe('role', () => {
        it('should return a string', () => {
            const user = new Employee('Jason', 55, 'jason@yahoo.com', 'Employee');
            expect(user.role).toBe('Employee');
            expect(user.role).toEqual(expect.any(String));
        });
    });
});