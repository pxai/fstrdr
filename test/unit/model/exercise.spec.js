const Exercise = require('../../../src/model/exercise');

describe('Testing for Memory class', () => {
    it('should exist', () => {
        expect(Exercise).toExist;
    });

    it('should have constructor', () => {
        const exercise = new Exercise();
    });

    it('should have type field', () => {
        const type = "memory";
        const exercise = new Exercise(type);

        expect(exercise.type).toEqual(type);
    });

    it('should have outcome setter', () => {
        const type = "memory";
        const exercise = new Exercise(type);
        exercise.outcome = { outcome: "OK" };

        expect(exercise.outcome.outcome).toBe("OK");
    });

    it('should have state', () => {
        const type = "memory";
        const exercise = new Exercise(type);
        exercise.outcome = { outcome: "OK" };

        expect(exercise.state).toEqual({
          type: "memory",
          outcome: { outcome: "OK" }
        });
    });
});
