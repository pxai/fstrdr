import React from 'react';
import renderer from 'react-test-renderer';
import { render } from 'enzyme';
import About from '../../../../src/components/about';
import { Context, ContextProps } from '../../../../src/context';

describe('About component', () => {
  let context: ContextProps;

  beforeEach(() => {
      context = {
          config: {
              name: "sample",
              version: 666
          }
      }
  });

  it('renders correctly', () => {
    const tree = renderer.create(<Context.Provider value={context}><About /></Context.Provider>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('shows about correctly', () => {
    const about = render(<Context.Provider value={context}><About /></Context.Provider>);

    expect(about.find('Text').length).toEqual(1);
  });
})
