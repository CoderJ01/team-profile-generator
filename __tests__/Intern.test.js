const Intern = require('../lib/Intern.js');

describe('Intern', () => {
    describe('school', () => {
        it('should return a string', () => {
            const user = new Intern('Michaelangelo', 27, 'example@gmail.com', 'Harvard');
            expect(user.school).toBe('Harvard');
        });
    });
});