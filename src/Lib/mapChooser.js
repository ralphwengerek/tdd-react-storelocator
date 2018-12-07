const mapChooser = locationName => {
  if (!locationName) {
    return "/images/default.png";
  }
  return locationName;
};

export default mapChooser;
