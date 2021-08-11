import React, { useState } from "react";

const Shoppingcart = () => {
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0);
  return (
    <div id="cartContainer">
      <div id="itemsContainer">
        {items.map((item) => (
          <div> {item} </div>
        ))}
      </div>
      <div id="checkoutDetails">
        <div>
          <h1>Number of Items in Cart {items.length}</h1>
          <p>Your Total Price {total} </p>
        </div>
      </div>
    </div>
  );
};
