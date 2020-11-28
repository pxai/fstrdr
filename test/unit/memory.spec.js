const chai = require('chai');
const expect = chai.expect;
const Memory = require('../../src/memory');

describe('Testing for Memory class', () => {
    let elements;

    beforeEach(() => {
        elements = new Array(10).fill(0).map((_, i) => i);
    });

    it('should exist', () => {
        expect(Memory).to.exist;
    });

    it('should contain elements', () => {
        const memory = new Memory(elements);
        expect(memory.elements).to.deep.equal(elements);
    });

    it('should shuffle elements', () => {
        const memory = new Memory(elements);
        expect(memory.shuffle()).to.not.deep.equal(elements);
        expect(memory.shuffle().length).to.equal(elements.length);
    });
});
