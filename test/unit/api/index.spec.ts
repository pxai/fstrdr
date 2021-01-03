import Api from '../../../src/api';

describe('Testing for Api class', () => {
    it('should exist', () => {
        expect(Api).toExist;
    });

    it('should have constructor', () => {
        const api: Api = new Api();
    });

    it('should return random Text', () => {
        const api: Api = new Api();

        expect(api.randomText()).toEqual('This is a random text\nThat should be enough\hRight?\n');
    });
});
