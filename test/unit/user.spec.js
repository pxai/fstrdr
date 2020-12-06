const User = require('../../src/user');

describe('basic testing for random utils', () => {
    it('should exist', () => {
        expect(User).toExist;
    });

    it('should have constructor', () => {
        const user = new User();
    });

    it('should have name', () => {
        const name = 'John Doe';
        const user = new User(name);

        expect(user.name).toEqual(name);
    });

    it('should have state', () => {
        const name = 'John Doe';
        const user = new User(name);

        expect(user.state).toEqual({
            name,
            exercises: []
        });
    });

    describe('exercises', () => {
        let name, user, exercises;

        beforeEach(() => {
            name = 'John Doe';
            user = new User(name);
        });

        it('should add exercises', () => {
            expect(user.state).toEqual({
                name,
                exercises: []
            });

            const exercise = { outcome: { outcome: 'ok' } };
            user.addExercise(exercise);

            expect(user.state).toEqual({
                name,
                exercises: [ exercise ]
            });
        });
    });
});
