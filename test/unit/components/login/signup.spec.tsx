import React from 'react';
import renderer from 'react-test-renderer';
import { render } from 'enzyme';
import { Context, ContextProps } from '../../../../src/context';
import SignUpForm from '../../../../src/components/login/signup';

describe('SignUpForm component', () => {
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
    const signUpForm = renderer.create(<Context.Provider value={context}><SignUpForm /></Context.Provider>).toJSON();
    expect(signUpForm).toMatchSnapshot();
  });

  it('shows recover links correctly', () => {
    const signUpForm = render(<Context.Provider value={context}><SignUpForm /></Context.Provider>);
  });

  it('shows inputs', () => {
    const signUpForm = render(<Context.Provider value={context}><SignUpForm /></Context.Provider>);
    expect(signUpForm.find('input[type=text]').length).toEqual(1);
    expect(signUpForm.find('input[type=password]').length).toEqual(1);
  });
});
