import StoreLocator from "./StoreLocator";
import React from "react";
import { shallow } from "enzyme";
import axios from "../../../__mocks__/axios";

describe("StoreLocator", function() {
  // Smoke Test
  let mount;

  beforeEach(() => {
    mount = shallow(<StoreLocator />);
  });

  it("Store contains a header component", function() {
    let headers = mount.find("Header");
    expect(headers.length).toEqual(1);
  });

  it("renders a map", function() {
    let map = mount.find("Map");
    expect(map.length).toEqual(1);
  });

  it("calls axios.get in componentdidmount", () => {
    return mount
      .instance()
      .componentDidMount()
      .then(() => {
        expect(axios.get).toHaveBeenCalled();
      });
  });
});
