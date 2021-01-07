import React from 'react';
import renderer from 'react-test-renderer';
import { render } from 'enzyme';
import { Context, ContextProps } from '../../../../src/context';
import Bookmarks from '../../../../src/components/bookmarks';

describe('Bookmarks component', () => {
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
    const bookmarks = renderer.create(<Context.Provider value={context}><Bookmarks /></Context.Provider>).toJSON();
    expect(bookmarks).toMatchSnapshot();
  });

  it('shows footer links correctly', () => {
    const bookmarks = render(<Context.Provider value={context}><Bookmarks /></Context.Provider>);
  });

  it('shows text correctly', () => {
    const bookmarks = render(<Context.Provider value={context}><Bookmarks /></Context.Provider>);

    expect(bookmarks.find('div').text()).toEqual('bookmarks');
  });
});
