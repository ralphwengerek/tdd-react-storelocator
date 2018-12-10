import React, { Component } from "react";
import { Header, Button, Map } from "../../components";
import "./StoreLocator.scss";
import axios from "axios";

export default class StoreLocator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedShop: undefined,
      shops: []
    };
  }

  buttonClicked = shop => {
    this.setState({ selectedShop: shop });
  };

  async componentDidMount() {
    axios.get("/data/shops.json").then(response => {
      this.setState({ shops: response.data });
    });
  }

  render() {
    const { selectedShop, shops } = this.state;

    const storeButtons = shops.map((shop, index) => (
      <Button
        key={index}
        handleClick={() => this.buttonClicked(shop)}
        location={shop.location}
        active={selectedShop === shop}
      />
    ));

    return (
      <React.Fragment>
        <Header title="Store Locator" />
        <div className="btn-container">{storeButtons}</div>
        <Map selectedShop={selectedShop} />
      </React.Fragment>
    );
  }
}
