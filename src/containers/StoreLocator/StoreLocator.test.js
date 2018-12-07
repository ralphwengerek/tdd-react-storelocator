import StoreLocator from "./StoreLocator";
import React from "react";
import { shallow } from "enzyme";
import data from "../../data/shops";

describe("StoreLocator", function() {
  // Smoke Test
  let mount;
  let buttonCount = data.length;

  beforeEach(() => {
    mount = shallow(<StoreLocator />);
  });

  it("Store contains a header component", function() {
    let headers = mount.find("Header");
    expect(headers.length).toEqual(1);
  });

  it(`renders ${buttonCount} buttons`, function() {
    let buttons = mount.find("Button");
    expect(buttons.length).toEqual(buttonCount);
  });

  it("renders a map", function() {
    let map = mount.find("Map");
    expect(map.length).toEqual(1);
  });
});
