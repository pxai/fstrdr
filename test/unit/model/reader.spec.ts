import Reader from '../../../src/model/reader';

describe('Testing for Reader class', () => {
    let text, speed;

    beforeEach(() => {
        text = 'blah blah blah\nble ble ble\nblu blu blu';
        speed = 1;
    });

    it('should exist', () => {
        expect(Reader).toExist;
    });

    it('should have constructor', () => {
        const reader = new Reader(speed, text);
    });

    it('should have speed getter', () => {
        const reader = new Reader(speed, text);

        expect(reader.speed).toEqual(speed);
    });

    it('should have text getter', () => {
        const reader = new Reader(speed, text);

        expect(reader.text).toEqual(text);
    });

    describe.skip('read', () => {
        it('should read one by one', () => {
            const reader = new Reader(speed, text);
            expect(reader.read()).toEqual(undefined);
        });
    });
});
