import React from "react";
import { shallow } from "enzyme";
import Button from "./Button";

describe("Button", () => {
  let mount;

  beforeEach(function() {
    mount = shallow(<Button />);
  });

  it("renders without crashing", () => {
    let button = shallow(<Button />);
  });

  it("calls a function passed to it when clicked", function() {
    const mockCallback = jest.fn();
    const mountedButtonWithCallback = shallow(
      <Button handleClick={mockCallback} />
    );
    mountedButtonWithCallback.find("button").simulate("click");
    expect(mockCallback.mock.calls.length).toEqual(1);
  });
});

describe("when a location is passed to it", () => {
  let mountedButton;
  let props;

  beforeEach(() => {
    props = {
      location: "Covent Garden"
    };

    mountedButton = shallow(<Button {...props} />);
  });

  it("displays the location ", () => {
    let btn = mountedButton.find(".btn");
    expect(btn.text()).toEqual("Covent Garden");
  });
});

describe("when a no location is passed to it", () => {
  let mountedButton;
  let props;

  beforeEach(() => {
    props = {
      location: undefined
    };

    mountedButton = shallow(<Button {...props} />);
  });

  it("displays all locations ", () => {
    let btn = mountedButton.find(".btn");
    expect(btn.text()).toEqual("All locations");
  });
});
