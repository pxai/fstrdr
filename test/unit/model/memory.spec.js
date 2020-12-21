const Memory = require('../../../src/model/memory');

describe('Testing for Memory class', () => {
    let elements;

    beforeEach(() => {
        elements = new Array(100).fill(0).map((_, i) => i);
    });

    it('should exist', () => {
        expect(Memory).toExist;
    });

    it('should contain elements', () => {
        const memory = new Memory(elements);
        expect(memory.elements).toEqual(elements);
    });

    it('should shuffle elements', () => {
        const memory = new Memory(elements);

        expect(memory.shuffle()).not.toEqual(elements);
        expect(memory.shuffle().length).toEqual(elements.length);
    });

    it('should pick some elements', () => {
        const memory = new Memory(elements);
        const qty = 5;

        expect(memory.pick(5).length).toEqual(qty);
        expect(memory.pick(5)).not.toEqual(elements.slice(0, qty));
    });

    it('should store picked elements', () => {
        const memory = new Memory(elements);
        const qty = 5;
        const picked = memory.pick(5);

        expect(picked.length).toEqual(qty);
        expect(memory.picked).toEqual(picked);
    });

    it('should check if it is in the group', () => {
        const memory = new Memory(elements);
        memory.pick(5);

        expect(memory.isCorrect(666)).toEqual(false);
        expect(memory.isCorrect(memory.picked[0])).toEqual(true);
    });

    it('should check if it is correct', () => {
        const memory = new Memory(elements);
        memory.pick(5);

        expect(memory.allCorrect(memory.picked)).toEqual(true);
        expect(memory.allCorrect(memory.elements.slice(0, 5))).toEqual(false);
    });
});
