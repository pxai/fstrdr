const Api = require('../../../src/api');

describe('Testing for Api class', () => {
    it('should exist', () => {
        expect(Api).toExist;
    });

    it('should have constructor', () => {
        const api = new Api();
    });

    it('should return random Text', () => {
        const api = new Api();

        expect(api.randomText()).toEqual('This is a random text\nThat should be enough\hRight?\n');
    });
});
