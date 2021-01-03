import React from 'react';
import renderer from 'react-test-renderer';
import { render } from 'enzyme';
import Footer from '../../../../src/components/footer';
import { Context, ContextProps } from '../../../../src/context';
import '../../../../src/i18n';
import Api from '../../../../src/api';

describe('Footer componet', () => {
    let footer, context: ContextProps;

    beforeEach(() => {
      context = {
          config: {
              name: "sample",
              version: 666
          },
          api: new Api(),
          auth: {
            loggedIn: true
          }
      }
    });

    it('renders correctly', () => {
      const tree = renderer.create(<Footer />).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it('shows footer text correctly', () => {
      const footer = render(<Context.Provider value={context}><Footer /></Context.Provider>);

      expect(footer.find('p').length).toBe(2);
      expect(footer.find('p').text()).toMatch("Fst Rdr Foot Hello ThereFooter");
    });
});
