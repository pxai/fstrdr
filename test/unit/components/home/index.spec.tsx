import React from 'react';
import renderer from 'react-test-renderer';
import { render } from 'enzyme';
import Home from '../../../../src/components/home';
import SignInForm from '../../../../src/components/login/signin';
import { Context, ContextProps } from '../../../../src/context';
import '../../../../src/i18n';
import Api from '../../../../src/api/';
import FakeAuth from '../../../../src/api/fake_auth';


describe('Home componet', () => {
    let footer, context: ContextProps;

    beforeEach(() => {
      context = {
          config: {
              name: "sample",
              version: 666
          },
          api: new Api(),
          auth: new FakeAuth({})
      }
    });

    it('renders correctly', () => {
      const tree = renderer.create(<Context.Provider value={context}><Home /></Context.Provider>).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it('shows header correctly', () => {
      const home = render(<Context.Provider value={context}><Home /></Context.Provider>);

      // expect(home.find('Appbar.Header').length).toEqual(1);
      // expect(home.find('Appbar.Content').length).toEqual(1);
      // expect(home.find('Appbar.Action').length).toEqual(2);
    });
});
