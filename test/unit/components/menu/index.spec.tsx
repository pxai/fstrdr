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

it('shows links', () => {
  const menu = shallow(<Menu />);
  expect(menu.find('span').length).toEqual(3);

  ['Home', 'Read', 'Speed'].forEach( (link, i) => {
      expect(menu.find('span').at(i).text()).toEqual(link);
  });
});
