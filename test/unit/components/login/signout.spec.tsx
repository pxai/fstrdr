import React from 'react';
import renderer from 'react-test-renderer';
import { render } from 'enzyme';
import { Context, ContextProps } from '../../../../src/context';
import SignOut from '../../../../src/components/login/signout';

describe('SignOutForm component', () => {
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
    const signOut = renderer.create(<Context.Provider value={context}><SignOut /></Context.Provider>).toJSON();
    expect(signOut).toMatchSnapshot();
  });

  it('shows recover links correctly', () => {
    const signOut = render(<Context.Provider value={context}><SignOut /></Context.Provider>);
  });

  it('shows button', () => {
    const signOut = render(<Context.Provider value={context}><SignOut /></Context.Provider>);
    expect(signOut.find('button').length).toEqual(1);
  });
});
