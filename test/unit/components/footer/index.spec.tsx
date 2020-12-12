import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Footer from '../../../../src/components/footer';

it('renders correctly', () => {
  const tree = renderer.create(<Footer />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('shows footer text correctly', () => {
  const footer = shallow(<Footer />);

  expect(footer.find('p').length).toBe(1);
  expect(footer.find('p').text()).toEqual('Fst Rdr');
});
