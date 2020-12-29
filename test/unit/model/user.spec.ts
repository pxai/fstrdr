import { expect } from 'chai';
import User from '../../../src/model/user';

describe('basic testing for random utils', () => {
    it('should exist', () => {
        expect(User).to.exist;
    });

    it('should have constructor', () => {
        const user = new User('John Doe');
    });

    it('should have name', () => {
        const name = 'John Doe';
        const user = new User(name);

        expect(user.name).to.equal(name);
    });

    it('should have state', () => {
        const name = 'John Doe';
        const user = new User(name);

        expect(user.state).to.deep.equal({
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
            expect(user.state).to.deep.equal({
                name,
                exercises: []
            });

            const exercise = { outcome: { outcome: 'ok' } };
            user.addExercise(exercise);

            expect(user.state).to.deep.equal({
                name,
                exercises: [ exercise ]
            });
        });
    });
});
