import React, { Component } from "react";
import { Header, Button, Map } from "../../components";
import "./StoreLocator.scss";

import shops from "../../data/shops";

export default class StoreLocator extends Component {
  constructor(props) {
    super(props);

    this.shops = shops;

    this.state = {
      selectedShop: undefined
    };
  }

  buttonClicked = shop => {
    this.setState({ selectedShop: shop });
  };

  render() {
    const storeButtons = this.shops.map((shop, index) => (
      <Button
        key={index}
        handleClick={() => this.buttonClicked(shop)}
        location={shop.location}
      />
    ));
    const { selectedShop } = this.state;
    return (
      <React.Fragment>
        <Header title="Store Locator" />
        <div className="btn-container">{storeButtons}</div>
        <Map selectedShop={selectedShop} />
      </React.Fragment>
    );
  }
}
