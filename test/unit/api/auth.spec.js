const Auth = require('../../../src/api/auth');

describe.skip('Testing for Auth class', () => {
    let user, userPool;

    beforeEach(() => {
        user = {
            confirmRegistration: jest.fn (() => new Promise().resolve(0)),
            authenticateUser: jest.fn (() => new Promise().resolve(0))
        }

        userPool = {
          signUp: jest.fn (() => new Promise().resolve(0))
        }
    });

    it('should exist', () => {
        expect(Auth).toExist;
    });

    it('should have constructor', () => {
        const auth = new Auth(userPool);
    });

    it('should set user', () => {
        const auth = new Auth({});
        auth.user = { name: "Pello" };

        expect(auth.user.name).to.equal("Pello");
    });

    describe('signin', () => {
        it('should call authenticateUser', () => {
            const auth = new Auth();
            auth.user = user;

            auth.signIn("user@user.com", "123456");

            expect(auth.user.authenticateUser).toHaveBeenCalledTimes(1);
        });
    });

    describe('confirm', () => {
        it('should call confirmRegistration', () => {
            const auth = new Auth();
            auth.user = user;

            auth.confirm("666");

            expect(auth.user.confirmRegistration).toHaveBeenCalledTimes(1);
        });
    });
});
