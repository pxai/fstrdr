const chai = require('chai');
const expect = chai.expect;
const Exercise = require('../../src/exercise');

describe('Testing for Memory class', () => {
    beforeEach(() => {
    });

    it('should exist', () => {
        expect(Exercise).to.exist;
    });

    it('should have constructor', () => {
        const exercise = new Exercise();
    });

    it('should have type field', () => {
        const type = "memory";
        const exercise = new Exercise(type);

        expect(exercise.type).to.equal(type);
    });

    it('should have outcome setter', () => {
        const type = "memory";
        const exercise = new Exercise(type);
        exercise.outcome = { outcome: "OK" };

        expect(exercise.outcome.outcome).to.equal("OK");
    });

    it('should have state', () => {
        const type = "memory";
        const exercise = new Exercise(type);
        exercise.outcome = { outcome: "OK" };

        expect(exercise.state).to.deep.equal({
          type: "memory",
          outcome: { outcome: "OK" }
        });
    });
});
