import React from 'react';
import { mount, ReactWrapper } from 'enzyme';

import Modal from './Modal';

describe('<Modal />', () => {
  let wrapper: ReactWrapper;

  beforeAll(() => {
    wrapper = mount(<Modal title={"test"} isOpen={false} onClose={() => {}} />);
  })

  it('should render children only if it is open', () => {
    expect(wrapper.find('div[data-test-id="test-modal-content"]')).toHaveLength(0);
  });

  it('should close the modal if close button is clicked', () => {
    const onClose = jest.fn();
    wrapper.setProps({ isOpen: true, onClose });

    const btnClose = wrapper.find('button[data-test-id="btn-modal-close"]').first();
    btnClose.simulate('click');

    expect(onClose).toHaveBeenCalled();
  });
});