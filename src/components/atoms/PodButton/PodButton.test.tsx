import React from "react";
import { mount, shallow } from "enzyme";

import PodButton, { PodType } from "./PodButton";

describe("<PodButton />", () => {
  it("should render the correct Icon and classNames based on the type", () => {
    ["rock", "paper", "scissor"].map((t) => {
      const wrapper = mount(<PodButton type={t as PodType} />);

      expect(wrapper.find(`svg[data-test-id="icon-${t}"]`)).toHaveLength(1);
      expect(wrapper.childAt(0).prop("className")).toContain(`container-${t}`);

      wrapper.unmount();
    });
  });

  it("should animate with ripples effect if ripples prop is true", () => {
    const wrapper = shallow(<PodButton type={"rock"} ripples />);

    expect(wrapper.prop("className")).toContain("containerWithRipples");
  });

  it("should call onClick prop if clicked", () => {
    const onClick = jest.fn();
    const wrapper = shallow(<PodButton type={"rock"} onClick={onClick} />);

    wrapper.simulate('click');

    expect(onClick).toHaveBeenCalled();
  });
});
