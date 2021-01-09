import React from 'react';
import renderer from 'react-test-renderer';
import { render } from 'enzyme';
import { Context, ContextProps } from '../../../../src/context';
import Recover from '../../../../src/components/login/recover';

describe('Recover component', () => {
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
    const recover = renderer.create(<Context.Provider value={context}><Recover /></Context.Provider>).toJSON();
    expect(recover).toMatchSnapshot();
  });

  it('shows recover links correctly', () => {
    const recover = render(<Context.Provider value={context}><Recover /></Context.Provider>);
  });

  it('shows inputs', () => {
    const menu = render(<Context.Provider value={context}><Recover /></Context.Provider>);
    expect(menu.find('input[type=password]').length).toEqual(2);
  });

});
