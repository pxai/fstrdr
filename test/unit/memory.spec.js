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

    it('should pick some elements', () => {
        const memory = new Memory(elements);
        const qty = 5;

        expect(memory.pick(5).length).to.equal(qty);
        expect(memory.pick(5)).to.not.deep.equal(elements.slice(0, qty));
    });

    it('should store picked elements', () => {
        const memory = new Memory(elements);
        const qty = 5;
        const picked = memory.pick(5);

        expect(picked.length).to.equal(qty);
        expect(memory.picked).to.deep.equal(picked);
    });

    it('should check if it is in the group', () => {
        const memory = new Memory(elements);
        memory.pick(5);

        expect(memory.isCorrect(45)).to.equal(false);
        expect(memory.isCorrect(memory.picked[0])).to.equal(true);
    });

    it('should check if it is correct', () => {
        const memory = new Memory(elements);
        memory.pick(5);

        expect(memory.allCorrect(memory.picked)).to.equal(true);
        expect(memory.allCorrect(memory.elements.slice(0, 5))).to.equal(false);
    });
});
