const chai = require('chai');
const expect = chai.expect;
const Reader = require('../../src/reader');

describe('Testing for Reader class', () => {
    let text, speed;

    beforeEach(() => {
        text = "blah blah blah\nble ble ble\nblu blu blu";
        speed = 1;
    });

    it('should exist', () => {
        expect(Reader).to.exist;
    });

    it('should have constructor', () => {
        const reader = new Reader();
    });

    it('should have speed getter', () => {
        const reader = new Reader(speed, text);

        expect(reader.speed).to.equal(speed);
    });

    it('should have text getter', () => {
        const reader = new Reader(speed, text);

        expect(reader.text).to.equal(text);
    });

    describe('read', () => {
        it('should read one by one', () => {
            const reader = new Reader(speed, text);
            expect(reader.read()).to.equal(undefined);
        });
    });
});
