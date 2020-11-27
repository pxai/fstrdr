const chai = require('chai');
const expect = chai.expect;
const Memory = require('../../src/memory');

describe('Testing for Memory class', () => {
    it('should exist', () => {
        expect(Memory).to.exist;
    });

    it('should contain elements', () => {
        const elements = [1, 2, 3];
        const memory = new Memory(elements);
        expect(memory.elements).to.deep.equal(elements);
    });
});
