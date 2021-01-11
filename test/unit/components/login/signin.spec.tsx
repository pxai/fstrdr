import React from 'react';
import renderer from 'react-test-renderer';
import { render } from 'enzyme';
import { Context, ContextProps } from '../../../../src/context';
import SignInForm from '../../../../src/components/login/signin';

describe('SignInForm component', () => {
  let context: ContextProps;

  beforeEach(() => {
      context = {
          config: {
              name: "sample",
              version: 666
          },
          auth: {
            loggedIn: true
          }
      }
  });

  it('renders correctly', () => {
    const signInForm = renderer.create(<Context.Provider value={context}><SignInForm /></Context.Provider>).toJSON();
    expect(signInForm).toMatchSnapshot();
  });

  it('shows recover links correctly', () => {
    const signInForm = render(<Context.Provider value={context}><SignInForm /></Context.Provider>);
  });

  it('shows inputs', () => {
    const signInForm = render(<Context.Provider value={context}><SignInForm /></Context.Provider>);
    expect(signInForm.find('input[type=text]').length).toEqual(1);
    expect(signInForm.find('input[type=password]').length).toEqual(1);
  });
});
