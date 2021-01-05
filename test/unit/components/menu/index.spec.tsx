import React from 'react';
import renderer from 'react-test-renderer';
import { render } from 'enzyme';
import { Context, ContextProps } from '../../../../src/context';
import Menu from '../../../../src/components/menu';

describe('Menu component', () => {
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
    const tree = renderer.create(<Context.Provider value={context}><Menu /></Context.Provider>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('shows footer links correctly', () => {
    const menu = render(<Context.Provider value={context}><Menu /></Context.Provider>);
  });

  it('shows links', () => {
    const menu = render(<Context.Provider value={context}><Menu /></Context.Provider>);
    expect(menu.find('Button').length).toEqual(0);
  });

});
