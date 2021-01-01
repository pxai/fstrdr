import { expect } from 'chai';
import React from "react";
import ReactDOM from "react-dom";
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import Menu from '../../../../src/components/menu';

/*it('renders correctly', () => {
  const tree = renderer.create(<Menu />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('shows footer links correctly', () => {
  const menu = render(<Menu />);
});*/

it('shows links', () => {
  const menu = mount(<Menu />);
  expect(menu.find('span').length).to.equal(4);

  ['Home', 'Memory', 'Read', 'Speed'].forEach( (link, i) => {
      //expect(menu.find('span').at(i).text()).to.equal(link);
      console.log(i);
  });
});
