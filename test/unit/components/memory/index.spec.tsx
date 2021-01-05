import React from 'react';
import renderer from 'react-test-renderer';
import { render } from 'enzyme';
import { Context, ContextProps } from '../../../../src/context';
import Memory from '../../../../src/components/memory';

describe('Memory component', () => {
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
    const memory = renderer.create(<Context.Provider value={context}><Memory /></Context.Provider>).toJSON();
    expect(memory).toMatchSnapshot();
  });

  it('shows footer links correctly', () => {
    const memory = render(<Context.Provider value={context}><Memory /></Context.Provider>);
  });

  it('shows text correctly', () => {
    const memory = render(<Context.Provider value={context}><Memory /></Context.Provider>);

    expect(memory.find('div').text()).toEqual("memory");
  });
});
