describe('Employee', () => {
    describe('lowercase', () => {
        it('should make all letters in a string lowercase', () => {
            const str = 'Jacob@email.com';
            const caseLower = 'jacob@email.com';

            const result = new Employee().toLowerCase(str);

            expect(result).toEqual(caseLower);
        });
    });

    describe('Uppercase', () => {
        it('should make the first letter of the string uppercase', () => {
            const str = 'joseph';
            const firstLetterUp = 'Joseph';

            const result = new Uppercase().charAt(0).toUpperCase(str) + stringslice(0);

            expect(result).toEqual(firstLetterUp);
        });

    });
});