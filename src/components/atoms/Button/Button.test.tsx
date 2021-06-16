import React from "react";
import { shallow } from "enzyme";
import Button, { ButtonVariant } from "./Button";

describe("<Button />", () => {
  it("should have valid class based on the variant", () => {
    ["primary", "outlined", "plain"].map((v) => {
      const wrapper = shallow(<Button variant={v as ButtonVariant} />);
      expect(wrapper.prop("className")).toContain(`button-${v}`);
    });
  });

  it("should append the given className", () => {
    const wrapper = shallow(<Button className="button-custom" />);
    expect(wrapper.prop("className")).toBe(
      "button button-primary button-custom"
    );
  });
});
