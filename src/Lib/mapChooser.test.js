import mapChooser from "./mapChooser";

describe("mapChooser", function() {
  it("returns an image file name based on input given to it", function() {
    let expected = "/images/holborn.png";

    let actual = mapChooser("/images/holborn.png");
    expect(actual).toEqual(expected);
  });

  it("return a default image when no input is given to it", function() {
    let expected = "/images/default.png";
    let actual = mapChooser();
    expect(actual).toEqual(expected);
  });

  it("return a default image when empty string is given to it", function() {
    let expected = "/images/default.png";
    let actual = mapChooser("");
    expect(actual).toEqual(expected);
  });
});
