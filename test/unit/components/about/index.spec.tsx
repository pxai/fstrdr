import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import About from '../../../../src/components/about';

it('renders correctly', () => {
  const tree = renderer.create(<About />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('shows about correctly', () => {
  const about = shallow(<About />);

  expect(about.find('Text').length).toBe(1);
  const text = about.find('Text');
  console.log(text, text.text(), text.html());
});
