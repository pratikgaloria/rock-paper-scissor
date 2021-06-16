import React from 'react';
import { mount } from 'enzyme';
import App from 'App';

describe('<Pod /', () => {
  const wrapper = mount(<App />);

  it('should update the score correctly when the game is concluded', () => {
    const btnRock = wrapper.find('div[data-test-id="btn-pod-rock"]').first();
    btnRock.simulate('click');

    const score = wrapper.find('span[data-test-id="txt-score"]').first();
    const hasWon = wrapper.find('div[data-test-id="btn-pod-scissor"]').length === 1;

    expect(score.text()).toBe(hasWon ? "1" : "-1");
  });
});