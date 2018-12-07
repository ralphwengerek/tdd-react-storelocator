import React from "react";
import { shallow } from "enzyme";
import Map from "./Map";

describe("Map", () => {
  let mount;
  let props;
  let defaultImage;

  beforeEach(function() {
    props = {
      selectedShop: {
        location: "holborn",
        image: "holborn.png"
      }
    };
    mount = shallow(<Map {...props} />);
    defaultImage = "/images/default.png";
  });

  it("renders without crashing", () => {
    let mount = shallow(<Map />);
  });

  it("contains an img", function() {
    let image = mount.find("img");
    expect(image.length).toEqual(1);
  });

  it("displays the map passed to it", function() {
    let img = mount.find("img[src='holborn.png']");
    expect(img.length).toEqual(1);
  });
});
