import React from 'react';
import { mount, ReactWrapper } from 'enzyme';

import App from './App';

describe('<App />', () => {
  let wrapper: ReactWrapper;
  beforeAll(() => {
    wrapper = mount(<App />, { });
  });

  it('should render the button for rules', () => {
    expect(wrapper.find('button[data-test-id="btn-rules"]')).toHaveLength(1);
  });

  it('clicking on rules button should show a modal', () => {
    const btnRules = wrapper.find('button[data-test-id="btn-rules"]').first();
    btnRules.simulate('click');

    expect(wrapper.find('div[data-test-id="Rules-modal-content"]')).toHaveLength(1);
  });

  afterAll(() => {
    wrapper.unmount();
  })
});