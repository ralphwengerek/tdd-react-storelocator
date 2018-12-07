import React from "react";
import { shallow } from "enzyme";
import App from "./App";

describe("App", function() {
  it("renders without crashing", () => {
    shallow(<App />);
  });

  it("it renders a StoreLocator", () => {
    const mountedApp = shallow(<App />);
    const locators = mountedApp.find("StoreLocator");

    expect(locators.length).toEqual(1);
  });
});
