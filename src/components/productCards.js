import React, { useState } from "react";
import "./stylesheets/productCard.css";

const ProductCard = (props) => {
  const [Quantity, setQuantity] = useState(0);
  let [Cart, setCart] = useState(0);

  const addToCart = (quantityAdded) => {
    setCart((Cart = Quantity));
    console.log(`the quantity in your cart is ${Quantity}`);
    console.log(Cart);
  };
  return (
    <div id="cardContainer">
      <h1 id="productName">{props.name}</h1>
      <div id="cardImageHolder">
        <img id="plantImage" src={props.image} alt="productimage"></img>
      </div>

      <div id="detailsContainer">
        <p id="productDescription">Description</p>
        <p>$ {props.price}</p>
        <div id="quantityDiv">
          <button
            id="increaseButton"
            className="quantityButton"
            onClick={() => setQuantity(Quantity + 1)}
          >
            +
          </button>
          <div id="quantityChosen">{Quantity}</div>
          <button
            id="decreaseButton"
            className="quantityButton"
            onClick={() => setQuantity(Quantity - 1)}
          >
            -
          </button>
          <button id="buyNowButton" onClick={addToCart}>
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
