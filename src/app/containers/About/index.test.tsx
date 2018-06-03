// tslint:disable: no-unused-expression

import { expect } from 'chai';
import { renderComponent, createState } from '../../helpers/TestHelper';
import { About } from './index';

const state = createState();

describe('<About />', () => {
  const component = renderComponent(About, {}, state);

  it('Renders with correct style', () => {
    const style = require('./style.css');
    expect(component.find(style.About)).to.exist;
  });

  it('Renders header with text', () => {
    expect(component.find('h4').text()).to.eql('About');
  });
});
