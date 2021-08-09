import React, { useState } from "react";
import "./stylesheets/productCard.css";

const ProductCard = (props) => {
  const [Quantity, setQuantity] = useState(0);
  return (
    <div id="cardContainer">
      <div id="cardImageHolder">
        <img id="plantImage" src={props.image} alt="productimage"></img>
      </div>
      <div id="detailsContainer">
        <h1 id="productName">{props.name}</h1>
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
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
