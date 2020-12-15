import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Menu from '../../../../src/components/menu';

it('renders correctly', () => {
  const tree = renderer.create(<Menu />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('shows footer links correctly', () => {
  const menu = shallow(<Menu />);
});
