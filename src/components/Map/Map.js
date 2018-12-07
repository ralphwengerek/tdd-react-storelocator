import React from "react";
import PropTypes from "prop-types";
import mapChooser from "../../lib/mapChooser";
import "./Map.scss";

const defaultImage = "/images/default.png";

const Map = ({ selectedShop }) => {
  return selectedShop ? (
    <img
      className="map"
      src={mapChooser(selectedShop.image)}
      alt={selectedShop.location}
    />
  ) : (
    <img className="map" src={defaultImage} alt="All locations" />
  );
};

Map.propTypes = {
  selectedShop: PropTypes.shape({
    location: PropTypes.string,
    address: PropTypes.string,
    image: PropTypes.string
  })
};
export default Map;
