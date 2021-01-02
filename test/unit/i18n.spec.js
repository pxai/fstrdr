import React from 'react';
import { shallow } from 'enzyme';
const i18n = require('../../src/i18n');
import { useTranslation } from 'react-i18next';

describe('Testing for i18n functionality', () => {
    it('should exist', () => {
        expect(i18n).toExist;
    });

    it('should translate', () => {
        const MyComponent = function Component () {
            expect(useTranslation().t('hello')).toEqual('Hello There');
        };

        shallow(< MyComponent />);
    });
});
