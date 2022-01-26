const Engineer = require('../lib/Engineer.js');

describe('Engineer', () => {
    describe('gitHub', () => {
        it('should return a string', () => {
            const user = new Engineer('Michaelangelo', 27, 'example@gmail.com', 'mazerunnerM01');
            expect(user.gitHub).toBe('mazerunnerM01');
        });
    });
});