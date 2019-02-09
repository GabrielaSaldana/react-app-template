import React from 'react';
import { shallow } from 'enzyme';
import App from '..';

describe('App', () => {
  test('Should render', () => {
    const AppC = shallow(<App />);
    expect(AppC).toMatchSnapshot();
  });
});
