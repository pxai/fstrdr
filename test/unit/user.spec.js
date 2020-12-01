const chai = require('chai');
const expect = chai.expect;
const User = require('../../src/user');

describe('basic testing for random utils', () => {
    beforeEach(() => {
    });

    it('should exist', () => {
        expect(User).to.exist;
    });

    it('should have constructor', () => {
        const user = new User();
    });
});
