const Manager = require('../lib/Manager.js');

describe('Manager', () => {
    describe('office', () => {
        it('should return a value', () => {
            const user = new Manager('Michaelangelo', 27, 'example@gmail.com', 100);
            expect(user.officeNum).toBe(100);
        });
    });
});