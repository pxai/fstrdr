import React from 'react';
import renderer from 'react-test-renderer';
import { render } from 'enzyme';
import { Context, ContextProps } from '../../../../src/context';
import Reader from '../../../../src/components/reader';

describe('Reader component', () => {
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
    const reader = renderer.create(<Context.Provider value={context}><Reader /></Context.Provider>).toJSON();
    expect(reader).toMatchSnapshot();
  });

  it('shows footer links correctly', () => {
    const reader = render(<Context.Provider value={context}><Reader /></Context.Provider>);
  });

  it('shows text correctly', () => {
    const reader = render(<Context.Provider value={context}><Reader /></Context.Provider>);

    expect(reader.find('div').text()).toEqual('reader');
  });
});
