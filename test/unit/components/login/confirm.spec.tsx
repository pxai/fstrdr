import React from 'react';
import renderer from 'react-test-renderer';
import { render } from 'enzyme';
import { Context, ContextProps } from '../../../../src/context';
import ConfirmForm from '../../../../src/components/login/confirm';

describe('ConfirmForm component', () => {
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
    const confirmForm = renderer.create(<Context.Provider value={context}><ConfirmForm /></Context.Provider>).toJSON();
    expect(confirmForm).toMatchSnapshot();
  });

  it('shows confirmForm links correctly', () => {
    const confirmForm = render(<Context.Provider value={context}><ConfirmForm /></Context.Provider>);
  });

  it('shows inputs', () => {
    const confirmForm = render(<Context.Provider value={context}><ConfirmForm /></Context.Provider>);
    expect(confirmForm.find('input[type=text]').length).toEqual(1);
  });

});
