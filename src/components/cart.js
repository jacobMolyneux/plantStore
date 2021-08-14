import React, { useState } from "react";

class ShoppingCart extends React.Component {
  constructor() {
    super();
    this.state = {
      totalPrice: 0,
      items: [],
    };
  }
  render() {
    return (
      <div id="shoppingCartContainer">
        <h1>Shopping Cart</h1>
      </div>
    );
  }
}
export default ShoppingCart;
